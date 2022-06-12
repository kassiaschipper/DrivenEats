function selecaoPrato(prato) {
    const pratoSelecionado = document.querySelector(".pratos .selecionado");

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");
    botaoVerde();
}

function selecaoBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");

    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }

    bebida.classList.add("selecionado");
    botaoVerde();

}

function selecaoSobremesa(sobremesa) {
    const sobreSelecionada = document.querySelector(".sobremesas .selecionado");

    if (sobreSelecionada !== null) {
        sobreSelecionada.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado");
    botaoVerde();
}

function botaoVerde(){
    let botao = document.querySelector(".botao");
    let mensagem = document.querySelector(".mensagem");

    let pedidoPrato = document.querySelector(".pratos .selecionado");
    let pedidoBebida = document.querySelector(".bebidas .selecionado");
    let pedidoSobremesa = document.querySelector(".sobremesas .selecionado");
    
    if(pedidoPrato && pedidoBebida && pedidoSobremesa){
        botao.classList.add("botao-verde");
        mensagem.innerHTML = "Fazer Pedido";
    }
}


// function activeCheckedFood(element){
    
//     let checked = element.querySelector('.containerFood .checked')
//     let active = document.querySelector('.containerFood .active')
//     if (active !== null){
//         active.classList.remove('active')
//     }
//     checked.classList.add('active')
// }