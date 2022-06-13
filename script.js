function selecaoPrato(prato) {
    const pratoSelecionado = document.querySelector(".pratos .selecionado");

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");
    botaoVerde();
}
function checkPrato(prato) {
    const checado = prato.querySelector(".check");
    const checkVisivel = document.querySelector(".pratos .visivel");

    if (checkVisivel) {
        checkVisivel.classList.remove("visivel");
    }

    checado.classList.add("visivel");
}

function selecaoBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");

    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }

    bebida.classList.add("selecionado");
    botaoVerde();

}
function checkBebida(bebida) {
    const checado = bebida.querySelector(".check");
    const checkVisivel = document.querySelector(".bebidas .visivel");

    if (checkVisivel) {
        checkVisivel.classList.remove("visivel");
    }

    checado.classList.add("visivel");
}

function selecaoSobremesa(sobremesa) {
    const sobreSelecionada = document.querySelector(".sobremesas .selecionado");

    if (sobreSelecionada !== null) {
        sobreSelecionada.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado");
    botaoVerde();
}
function checkSobremesa(sobremesa) {
    const checado = sobremesa.querySelector(".check");
    const checkVisivel = document.querySelector(".sobremesas .visivel");

    if (checkVisivel) {
        checkVisivel.classList.remove("visivel");
    }

    checado.classList.add("visivel");
}


function botaoVerde() {
    let botao = document.querySelector(".botao");
    let mensagem = document.querySelector(".mensagem");

    let pedidoPrato = document.querySelector(".pratos .selecionado");
    let pedidoBebida = document.querySelector(".bebidas .selecionado");
    let pedidoSobremesa = document.querySelector(".sobremesas .selecionado");

    if (pedidoPrato && pedidoBebida && pedidoSobremesa) {
        botao.classList.add("botao-verde");
        mensagem.innerHTML = "Fazer Pedido";

       
    }

}

function pedidoFechado() {

    let pratoPedido = document.querySelector(".pratos .selecionado");
    let bebidaPedida = document.querySelector(".bebidas .selecionado");
    let sobremesaPedida = document.querySelector(".sobremesas .selecionado");

    let nomePratoPedido = pratoPedido.querySelector(".nome-item");
    let precoPratoPedido = pratoPedido.querySelector(".preco");

    let nomePratoFechado = document.querySelector(".prato-escolhido");
    nomePratoFechado.innerHTML = nomePratoPedido.innerHTML;
    let precoPratoFechado = document.querySelector(".preco-prato-escolhido");
    precoPratoFechado.innerHTML = precoPratoPedido.innerHTML;

    let nomeBebidaPedida = bebidaPedida.querySelector(".nome-item");
    let precoBebidaPedida = bebidaPedida.querySelector(".preco");

    let nomeBebidaFechada = document.querySelector(".bebida-escolhida");
    nomeBebidaFechada.innerHTML = nomeBebidaPedida.innerHTML;
    let precoBebidaFechada = document.querySelector(".preco-bebida-escolhida");
    precoBebidaFechada.innerHTML = precoBebidaPedida.innerHTML;

    let nomeSobremesaPedida = sobremesaPedida.querySelector(".nome-item");
    let precoSobremesaPedida = sobremesaPedida.querySelector(".preco");

    let nomeSobremesaFechada = document.querySelector(".sobremesa-escolhida");
    nomeSobremesaFechada.innerHTML = nomeSobremesaPedida.innerHTML;
    let precoSobremesaFechada = document.querySelector(".preco-sobremesa-escolhida");
    precoSobremesaFechada.innerHTML = precoSobremesaPedida.innerHTML;

    let totalPedidoFechado = document.querySelector(".preco-total");
    totalPedidoFechado.innerHTML = "R$ " + (Number(precoPratoFechado.innerHTML) + Number(precoBebidaFechada.innerHTML) + Number(precoSobremesaFechada.innerHTML)).toFixed(2);


    let removeEscondido = document.querySelector(".finalizar-pedido")
    removeEscondido.classList.remove("escondido");

    let opacidade = document.querySelector(".conteudo");
    opacidade.classList.add("opacidade");
    let opacidadeTopo = document.querySelector(".topo");
    opacidadeTopo.classList.add("opacidade");
    let opacidadeRodape = document.querySelector(".rodape");
    opacidadeRodape.classList.add("opacidade");
}

function cancelarPedido() {

};