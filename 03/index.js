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
        console.log(`Cliente: ${this.nomeDoCliente} \nTotal de itens: ${quantidadeProdutos} ${quantidadeProdutos > 1 ? "itens" :"item"} \nTotal a pagar: R$ ${(precoTotal/100).toFixed(2).replace(".",",")}`);

    },
    addProduto: function(produto){
        let noCarrinho = false;
        for (let produtoCarrinho of this.produtos){
            if (produtoCarrinho.id == produto.id){
                produtoCarrinho.qtd += produto.qtd;
                noCarrinho = true;
                break;
            }
        }
        if (!noCarrinho){
            this.produtos.push(produto);
        }
        
    },
    imprimirDetalhes: function(){
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        let totalItems = 0;
        let precoTotal = 0;
        for (let produto of this.produtos){
            const {id, nome, qtd, precoUnit} = produto;
            totalItems += qtd;
            precoTotal += qtd * precoUnit;
            console.log(`Item ${id} - ${nome} - ${qtd} und. - R$ ${((qtd*precoUnit)/100).toFixed(2).replace(".",",")}`);
        }
        console.log(`\nTotal de itens: ${totalItems} ${totalItems>1 ? "itens" : "item"}`);
        console.log(`Total a pagar: R$ ${(precoTotal/100).toFixed(2).replace(".",",")}`);
        
    }
}

carrinho.imprimirDetalhes();
