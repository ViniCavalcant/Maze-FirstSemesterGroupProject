
var linha_selecionada;
var plano;
var preco;

//Cálculo principal
function fnCalculo() {
    linha_selecionada = linha.value;
    plano = selecao.value;
    
    //Guardando em uma váriavel a quantidade de pessoas de acordo com a linha selecionada
    var qtd_pessoas = fnQtdPessoas(linha_selecionada);
    var visualizacoes_por_dia = qtd_pessoas;
    //Cálculo da quantidade de pessoas por mês
    var visualizacoes_mensais = (visualizacoes_por_dia * 30).toLocaleString();

    var visualizacoes_semestrais = ((visualizacoes_por_dia * 30) * 6).toLocaleString();
    
    var visualizacoes_anuais = ((visualizacoes_por_dia * 30) * 12).toLocaleString();

    //Resultado financeiro
    // var resultado_financeiro = (preco * qtd_pessoas * 0.01).toLocaleString();
    //Mostrar o retorno financeiro e as visualizações
    tempo.innerHTML = `
        Selecionando o plano 
        <strong style="color: var(--green-strong)">${plano} dias</strong>, 
        com fluxo 
        <strong style="color: var(--green-strong)">${linha_selecionada}</strong>, 
        seu anúncio terá aproximadamente: <br><br>

         <span id="span_views_dia"><strong id="views_dia" style="color: var(--green-strong)">${visualizacoes_por_dia}</strong> visualizações por dia,</span><br><br>
         <span id="span_views_mes"><strong id="views_mes" style="color: var(--green-strong)">${visualizacoes_mensais}</strong> visualizações por mês </span> <br><br>

         <sub>Dados oficiais de: metrocptm.com.br</sub>
         `;

        if(plano == "180") {
            span_views_dia.innerHTML = `<strong id="views_dia" style="color: var(--green-strong)">${visualizacoes_mensais}</strong> visualizações por mês,`
            span_views_mes.innerHTML = `<strong id="views_mes" style="color: var(--green-strong)">${visualizacoes_semestrais}</strong> visualizações por semestre`
        } else if (plano == "365") {
            span_views_dia.innerHTML = `<strong id="views_dia" style="color: var(--green-strong)">${visualizacoes_semestrais}</strong> visualizações por semestre,`
            span_views_mes.innerHTML = `<strong id="views_mes" style="color: var(--green-strong)">${visualizacoes_anuais}</strong> visualizações por ano`
        }

    function fnQtdPessoas(linha) {
        if (linha == "Baixo") {
            return 250000;
        } else if (linha == "Médio") {
            return 425000;
        } else if (linha == "Alto") {
            return 536000;
        } 
    }
}
