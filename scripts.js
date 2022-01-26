let qtdProdutos = 0;
let comidaSelecionada;
let valorComida;
let bebidaSelecionada;
let valorBebida;
let sobremesaSelecionada;
let valorSobremesa;
let valorTotal;


function selecionarComida(produto) {
    const selecionado = document.querySelector(".comidas .selecionado");
    const icone = document.querySelector(".comidas .selecionado ion-icon");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        qtdProdutos -= 1;
    }

    produto.classList.toggle("selecionado");
    const icone2 = document.querySelector(".comidas .selecionado ion-icon");
    if (icone !== null) {
        icone.classList.remove("com-icone")
    }
    icone2.classList.toggle("com-icone")
    qtdProdutos += 1;
    const valorComidaProv = document.querySelector(".comidas .selecionado .valor-produto");
    const comida = document.querySelector(".comidas .selecionado .nome-produto");
    valorComida = valorComidaProv.textContent;
    comidaSelecionada = comida.textContent;
    mudarBotaoPedido();
}

function selecionarBebida(produto) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    const icone = document.querySelector(".bebidas .selecionado ion-icon");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        qtdProdutos -= 1;

    }
    produto.classList.toggle("selecionado");

    const icone2 = document.querySelector(".bebidas .selecionado ion-icon");
    if (icone !== null) {
        icone.classList.remove("com-icone")
    }
    icone2.classList.toggle("com-icone")
    const bebida = document.querySelector(".bebidas .selecionado .nome-produto");
    const valorBebidaProv = document.querySelector(".bebidas .selecionado .valor-produto");
    bebidaSelecionada = bebida.textContent;
    valorBebida = valorBebidaProv.textContent;


    qtdProdutos += 1;
    mudarBotaoPedido();

}

function selecionarSobremesa(produto) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    const icone = document.querySelector(".sobremesas .selecionado ion-icon");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");

        qtdProdutos -= 1;
    }
    produto.classList.toggle("selecionado");
    const icone2 = document.querySelector(".sobremesas .selecionado ion-icon");
    if (icone !== null) {
        icone.classList.remove("com-icone")
    }
    icone2.classList.toggle("com-icone")
    const sobremesa = document.querySelector(".sobremesas .selecionado .nome-produto");
    const valorSobremesaProv = document.querySelector(".sobremesas .selecionado .valor-produto");
    sobremesaSelecionada = sobremesa.textContent;
    valorSobremesa = valorSobremesaProv.textContent;
    qtdProdutos += 1;
    mudarBotaoPedido();
}

function mudarBotaoPedido() {
    if (qtdProdutos > 2) {
        const botao = document.querySelector(".fechar-pedido");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "Fechar pedido";
    }

}

function finalizarPedido() {
    if (qtdProdutos > 2) {
        valorBebida = valorBebida.replace('R$ ', "");
        valorComida = valorComida.replace('R$ ', "");
        valorSobremesa = valorSobremesa.replace('R$ ', "");
        const finalizar = document.querySelector(".bloco-finalizar");
        document.querySelector(".comida-final").innerHTML = "<p class='comida-final'>" + comidaSelecionada + "</p>"
        document.querySelector(".valor-comida").innerHTML = "<p class='valor-comida'>" + valorComida + "</p>"
        document.querySelector(".bebida-final").innerHTML = "<p class='bebida-final'>" + bebidaSelecionada + "</p>"
        document.querySelector(".valor-bebida").innerHTML = "<p class='valor-bebida'>" + valorBebida + "</p>"
        document.querySelector(".sobremesa-final").innerHTML = "<p class='sobremesa-final'>" + sobremesaSelecionada + "</p>"
        document.querySelector(".valor-sobremesa").innerHTML = "<p class='valor-sobremesa'>" + valorSobremesa + "</p>"
        valorBebida = valorBebida.replace(',', ".");
        valorComida = valorComida.replace(',', ".");
        valorSobremesa = valorSobremesa.replace(',', ".");
        valorTotal = parseFloat(valorBebida) + parseFloat(valorComida) + parseFloat(valorSobremesa);
        valorTotal = valorTotal.toFixed(2);
        valorTotal = valorTotal.replace('.', ",");
        document.querySelector(".valor-total-final").innerHTML = "<p class='valor-total-final'> R$ " + valorTotal + "</p>"
        finalizar.style.display = "initial";

    }
}

function fecharConfirmacao() {
    const finalizar = document.querySelector(".bloco-finalizar")
    finalizar.style.display = "none"

}

function pedirComida() {
    let nomeCliente = prompt("Digite seu nome!");
    let enderecoCliente = prompt("Digite seu endereço!")

    const mensagemEncoded = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: " +
        comidaSelecionada.trim() + "\n- Bebida: " + bebidaSelecionada.trim() + "\n- Sobremesa: " +
        sobremesaSelecionada.trim() + "\nTotal: R$ " + valorTotal + "\n\n Nome: " +
        nomeCliente + "\n Endereço: " + enderecoCliente);
    window.open("http://wa.me/5551998805949?text=" + mensagemEncoded)

}