
//  MultiRangeSlider
//  @param {HTMLElement} elmement - the dom element that will be made the slider
//  @param {object} settings 
//  @param {function} [getFormattedValue] - a function that will convert the label values

    function MultiRangeSlider(element, settings, getFormattedValue = (value) => value) {
        const slider = element;
        const DOM = {};
        let steps = [];
        let dragging = false;
        let currentHandle = null;
        const getHandleOffset = () => DOM.handles[0].offsetWidth / 2;
        const getTrackWidth = () => DOM.track.offsetWidth;
        const getFocusedHandle = () => DOM.handles.find(handle => document.activeElement === handle);
      
        const values = {
          start: settings.start,
          end: settings.end
        };
      
        function getSteps(sliderWidth, stepLen, handleOffset) {
          const steps = [];
          for (let i = 0; i <= stepLen; i++) {
            const stepX = i * (sliderWidth * 0.95 / stepLen) + handleOffset;
            const stepPercent = (i * (95 / stepLen)).toFixed(2);
            const value = i * settings.increment + settings.start;
            steps.push({
              value,
              stepX,
              stepPercent
            });
          }
          return steps;
        }
      
        const getStepLen = () => (settings.end - settings.start) / settings.increment;
        
        const startDrag = (event) => {
          currentHandle = event.target;
          dragging = true;
        };
        const stopDrag = () => dragging = false;
      
        function createLabels(container, settings) {
          const labels = document.createElement("div");
          labels.classList.add("multi-range__labels");
          steps = getSteps(slider.offsetWidth, getStepLen(), getHandleOffset());
          steps.forEach(step => {
            const label = document.createElement("label");
            label.classList.add("label");
            label.textContent = getFormattedValue(step.value);
            label.style.left = `${step.stepPercent}%`;
            labels.appendChild(label);
            const tick = document.createElement("div");
            tick.classList.add("multi-range__tick");
            container.appendChild(tick);
          });
          
          return labels;
        }
        
        function addElementsToDOM() {
          const track = document.createElement("div");
          track.classList.add("multi-range__track");
          DOM.track = track;
          const trackBg = document.createElement("div");
          trackBg.classList.add("multi-range__track-bg");
          const trackFill = document.createElement("div");
          trackFill.classList.add("multi-range__fill");
          DOM.trackFill = trackFill;
          const ticksContainer = document.createElement("div");
          ticksContainer.classList.add("multi-range__ticks");
          let handleContainer = document.createElement("div");
          handleContainer.classList.add("multi-range__handles");
          const leftHandle = document.createElement("div");
          leftHandle.classList.add("multi-range__handle");
          leftHandle.setAttribute("data-handle-position", "start");
          leftHandle.setAttribute("tabindex", 0);
          const rightHandle = document.createElement("div");
          rightHandle.classList.add("multi-range__handle");
          rightHandle.setAttribute("data-handle-position", "end");
          rightHandle.setAttribute("tabindex", 0);
          handleContainer.appendChild(leftHandle);
          handleContainer.appendChild(rightHandle);
          DOM.handles = [leftHandle, rightHandle];
          track.appendChild(trackBg);
          track.appendChild(trackFill);
          slider.appendChild(track);
          slider.appendChild(handleContainer);
          const labels = createLabels(ticksContainer, settings);
          slider.appendChild(labels);
          track.appendChild(ticksContainer);
        }
        
        function init() {
          addElementsToDOM();
          DOM.handles.forEach(handle => {
            handle.addEventListener("mousedown", startDrag);
            handle.addEventListener("touchstart", startDrag);
          });
          window.addEventListener("mouseup", stopDrag);
          window.addEventListener("touchend", stopDrag);
          window.addEventListener("resize", onWindowResize);
          window.addEventListener("mousemove", onHandleMove);
          window.addEventListener("touchmove", onHandleMove);
          window.addEventListener("keydown", onKeyDown);
        }
      
        function dispatchEvent() {
          let event;
          if (window.CustomEvent) {
            event = new CustomEvent("slider-change", {
              detail: { start: values.start, end: values.end }
            });
          } else {
            event = document.createEvent("CustomEvent");
            event.initCustomEvent("slider-change", true, true, {
              start: values.start,
              end: values.end
            });
          }
          slider.dispatchEvent(event);
        }
      
        function getClosestStep(newX, handlePosition) {
          const isStart = handlePosition === "start";
          const otherStep = getStep(values[isStart ? "end" : "start"]);
          let closestDistance = Infinity;
          let indexOfClosest = null;
          for (let i = 0; i < steps.length; i++) {
            if (
              (isStart && steps[i].stepX < otherStep.stepX) ||
              (!isStart && steps[i].stepX > otherStep.stepX)
            ) {
              const distance = Math.abs(steps[i].stepX - newX);
              if (distance < closestDistance) {
                closestDistance = distance;
                indexOfClosest = i;
              }
            }
          }
          return steps[indexOfClosest];
        }
      
        function updateHandles() {
          DOM.handles.forEach(function(handle, index) {
            const step = index === 0 ? getStep(values.start) : getStep(values.end);
            handle.style.left = `${step.stepPercent}%`;
          });
        }
      
        const getStep = value => steps.find(step => step.value === value);
      
        function updateFill() {
          const trackWidth = getTrackWidth();
          const startStep = getStep(values.start);
          const endStep = getStep(values.end);
          const newWidth =
            trackWidth - (startStep.stepX + (trackWidth - endStep.stepX));
          const percentage = newWidth / trackWidth * 100;
          DOM.trackFill.style.width = `${percentage}%`;
          DOM.trackFill.style.left = `${startStep.stepPercent}%`;
        }
      
        function render() {
          updateFill();
          updateHandles();
        }
      
        function onHandleMove(event) {
          event.preventDefault();
          if (!dragging) return;
          const handleOffset = getHandleOffset();
          const clientX = event.clientX || event.touches[0].clientX;
          window.requestAnimationFrame(() => {
            if (!dragging) return;
            const mouseX = clientX - slider.offsetLeft;
            const handlePosition = currentHandle.dataset.handlePosition;
            let newX = Math.max(
              handleOffset,
              Math.min(mouseX, slider.offsetWidth - handleOffset)
            );
            const currentStep = getClosestStep(newX, handlePosition);
            values[handlePosition] = currentStep.value;
            render();
            dispatchEvent();
          });
        }
        
        function onKeyDown(e) {
          const keyCode = e.keyCode;
          const handle = getFocusedHandle();
          const keys = {
            "37": "left",
            "39": "right"
          };
          const arrowKey = keys[keyCode];
          if(!handle || !arrowKey) return;
          const handlePosition = handle.dataset.handlePosition;
          const stepIncrement = arrowKey === "left" ? -1 : 1;
          const stepIndex = steps.findIndex(step => step.value === values[handlePosition]);
          const newIndex = stepIndex + stepIncrement;
          if(newIndex < 0 || newIndex >= steps.length) return;
          values[handlePosition] = steps[newIndex].value;
          render();
          dispatchEvent();
        }
        
        function onWindowResize() {
          steps = getSteps(slider.offsetWidth, getStepLen(), getHandleOffset());
          render();
        }
      
        function update(newValues) {
          values.start = newValues.start;
          values.end = newValues.end;
          render();
        }
        
        function on(eventType, fn) {
          slider.addEventListener(eventType, fn);
        }
        
        function off(eventType, fn) {
          slider.removeEventListener(eventType, fn);
        }
        
        function destroy(removeElement) {
          DOM.handles.forEach(handle => {
            handle.removeEventListener("mousedown", startDrag);
            handle.removeEventListener("touchstart", startDrag);
          });
          window.removeEventListener("mouseup", stopDrag);
          window.removeEventListener("touchend", stopDrag);
          window.removeEventListener("resize", onWindowResize);
          window.removeEventListener("mousemove", onHandleMove);
          window.removeEventListener("touchmove", onHandleMove);
          window.removeEventListener("keydown", onKeyDown);
          if(removeElement) slider.parentNode.removeChild(slider);
        }
      
        init();
      
        render();
      
        return {
          on,
          off,
          update,
          destroy
        };
      }
      
      /**
        * Aqui põe aonde começa e quando termina 4 da manha e 24 pq da meia noite
      **/
      const settings = {
        start: 4,
        end: 24,
        // Esse incremment é o tanto que quer pular, tenta mudar de 1 para 2, 4 e vc ve na hora oq faz 
        //  ele nao muda nada de conta etc só visual
        increment: 1
      };
      
      /**
       * Uma função como esta pode ser passada para
       * MultiRangeSlider para transformar as labels
       * com base nos seus valores.
       */
      function getFormattedValue(value) {
        let hour;
        hour = value % 12 == 0 ? 12 : value % 12;
        hour = value / 12 >= 1 ? hour + " PM" : hour + " AM";
        return hour;
      }
      
      
      /**
       * Inicializar o slider
       */
      var slider = MultiRangeSlider(
        document.querySelector(".multi-range"), 
        settings, 
        getFormattedValue
      );
      
      
      slider.on("slider-change", event => view.update(event.detail));
      
      /**
       * Ajuda para atualizar a vista quando o slider muda
       */
      const view = {
        start: document.querySelector(".start-hour"),
        end: document.querySelector(".end-hour"),
        update: function(values) {
          for (let key in values) {
            this[key].textContent = getFormattedValue(values[key]);
          }
        }
        
      };
      
      view.update({
        start: settings.start,
        end: settings.end
      });
      
  function buscarPresencas() {
    var hora_iniVar = hora_ini.value;
    var hora_fimVar = hora_fim.value;

    var formulario = new URLSearchParams(new FormData(heatmap_form));
    fetch('medidas/presenca-hora', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hora_ini: hora_iniVar,
        hora_fim: hora_fimVar
      })
    }).then(resultado => {
      if (resultado.ok) {
        resultado.json().then(json => {
          console.log('JSON AQUI', json);
              // Configuração mínima, container padrão
var heatmapInstance = h337.create({
            container: document.querySelector('.heatmap_se')
          });

          var points = [];
          var max = 100;
          var min = 0;
          var width = 820;
          var height = 320;
          
          //Gerando um ponto por local da planta
          var local1 = { x: 40, y: 125, value: json[0].total , radius: 30 };
          var local2 = { x: 40, y:160, value: json[1].total, radius: 30 };
          var local3 = { x: 40, y: 215, value: json[2].total , radius: 30 };
          var local4 = { x: 40, y: 250, value:json[3].total , radius: 30 };
          var local5 = { x: 130, y: 45, value: json[4].total , radius: 65 };
          var local6 = { x: 200, y: 40, value: json[5].total , radius: 65 };
          var local7 = { x: 330, y: 40, value: json[6].total , radius: 65 };
          var local8 = { x: 420, y: 45, value: json[7].total , radius: 65 };
          var local9 = { x: 500, y: 40, value: json[8].total , radius: 65 };
          var local10 = { x: 600, y: 40, value: json[9].total, radius: 65 };
          var local11 = { x: 130, y: 370, value: json[10].total, radius: 65 };
          var local12 = { x: 200, y: 360, value: json[11].total, radius: 65 };
          var local13 = { x: 330, y: 360, value: json[12].total, radius: 65 };
          var local14 = { x: 420, y: 370, value: json[13].total, radius: 65 };
          var local15 = { x: 500, y: 370, value: json[14].total, radius: 65 };
          var local16 = { x: 600, y: 370, value: json[15].total, radius: 65 };
          var local17 = { x: 775, y: 125, value: json[16].total, radius: 30 };
          var local18 = { x: 775, y: 160, value: json[17].total, radius: 30 };
          var local19 = { x: 775, y: 220, value: json[18].total, radius: 30 };
          var local20 = { x: 775, y: 265, value: json[19].total, radius: 30 };
          var local21 = { x: 550, y: 210, value: json[20].total, radius: 80 };
          var local22 = { x:  200, y: 250, value: json[21].total, radius: 92 };
          var local23 = { x:  220, y: 129, value: json[22].total, radius: 70 };

          console.log('escada 1:', local1);
          console.log('escada 2:', local2);
          console.log('escada 3:', local3);
          console.log('escada 4:', local4);
          console.log('trem porta 1:', local5);
          console.log('trem porta 2:', local6);
          console.log('trem porta 3:', local7);
          console.log('trem porta 4:', local8);
          console.log('trem porta 5:', local9);
          console.log('trem porta 6:', local10);
          console.log('trem porta 7:', local11);
          console.log('trem porta 8:', local12);
          console.log('trem porta 9:', local13);
          console.log('trem porta 10:', local14);
          console.log('trem porta 11:', local15);
          console.log('trem porta 12:', local16);
          console.log('escada 5:', local17);
          console.log('escada 6:', local18);
          console.log('escada 7:', local19);
          console.log('escada 8:', local20);
          console.log('proximidade visão:', local21);
          console.log('proximidade anúncio de cima:', local22);
          console.log('proximidade anúncio de baixo:', local23);

          points = points.concat(
            local1,
            local2,
            local3,
            local4,
            local5,
            local6,
            local7,
            local8,
            local9,
            local10,
            local11,
            local12,
            local13,
            local14,
            local15,
            local16,
            local17,
            local18,
            local19,
            local20,
            local21,
            local22,
            local23
          );

          //formato para gerar mapa
          var data = {
            max: max,
            min: min,
            data: points
          };

          //inicia pontos no mapa de calor
          heatmapInstance.setData(data);
          // heatmapInstance.addData({ x: 10, y: 10, value: 100})

        });
      } else {
        console.log('Erro ao buscar quantidade de presença!');

        // response.text().then((texto) => {
        //     console.error(texto);
        // })
      }
    });
    return false;
  }
