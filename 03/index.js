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
    ],
    imprimirResumo: function(){
        let quantidadeProdutos = 0;
        let precoTotal = 0;
        for (let produto of this.produtos){
            quantidadeProdutos += produto.qtd;
            precoTotal += produto.qtd * produto.precoUnit; 
        }
        console.log(`Cliente: ${this.nomeDoCliente} \nTotal de itens: ${quantidadeProdutos} \nTotal a pagar: R$ ${(precoTotal/100).toFixed(2).replace(".",",")}`);

    }
}

carrinho.imprimirResumo();