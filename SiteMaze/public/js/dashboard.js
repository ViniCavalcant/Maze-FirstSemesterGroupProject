/* Responsavel por expandir o menu */

/* 
- const cria uma variavel onde o valoré fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída. 

- && operador de comparação logo, se toggle foi igual a navbar -> da inicio a função de expandir a tela de acordo com o padding do body
*/


const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('expander')

    })
  }
}
/* mostra na tela os seguntes elementos: */
showMenu('nav-toggle', 'navbar')

/*nav_link -> Resonsavel pelas cores e valores atribuidos quando o menu está expandido*/
const linkColor = document.querySelectorAll('.nav_link')
function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))



