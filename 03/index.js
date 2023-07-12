const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

function imprimirResumoDoCarrinho(carrinho){
    const {nomeDoCliente, produtos} = carrinho;
    let quantidadeProdutos = 0;
    let precoTotal = 0;
    for (let produto of produtos){
        quantidadeProdutos += produto.qtd;
        precoTotal += produto.qtd * produto.precoUnit; 
    }
    console.log(`Cliente: ${nomeDoCliente} \nTotal de itens: ${quantidadeProdutos} \nTotal a pagar: R$ ${(precoTotal/100).toFixed(2).replace(".",",")}`);
}

imprimirResumoDoCarrinho(carrinho);