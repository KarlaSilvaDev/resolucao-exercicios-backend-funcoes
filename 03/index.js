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
        const quantidadeProdutos = this.calcularTotalDeItens();
        let precoTotal = this.calcularTotalAPagar();
        const desconto = this.calcularDesconto();   
        let totalAPagar = precoTotal - desconto;     
        console.log(`\nCliente: ${this.nomeDoCliente} \nTotal de itens: ${quantidadeProdutos} ${quantidadeProdutos > 1 ? "itens" :"item"} \nValor Total: R$ ${this.formatarMoeda(precoTotal)} \nDesconto: R$ ${this.formatarMoeda(desconto)} \nTotal a pagar: R$ ${this.formatarMoeda(totalAPagar)}\n`);

    },
    imprimirDetalhes: function(){
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        const totalItems = this.calcularTotalDeItens();
        const precoTotal = this.calcularTotalAPagar();
        for (let produto of this.produtos){
            const {id, nome, qtd, precoUnit} = produto;
            console.log(`Item ${id} - ${nome} - ${qtd} und. - R$ ${this.formatarMoeda(qtd*precoUnit)}`);
        }
        const desconto = this.calcularDesconto();
        console.log(`\nTotal de itens: ${totalItems} ${totalItems>1 ? "itens" : "item"}`);
        console.log(`Total: R$ ${this.formatarMoeda(precoTotal)} \nDesconto: R$ ${this.formatarMoeda(desconto)}\nTotal a pagar: R$ ${this.formatarMoeda(precoTotal-desconto)}\n`);       
        
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
    calcularTotalDeItens: function(){
        let totalItems = 0;
        for (let produto of this.produtos){
            totalItems += produto.qtd;
        }
        return totalItems;
    },
    calcularTotalAPagar: function(){
        let precoTotal = 0;
        for (let produto of this.produtos){
            precoTotal +=  produto.precoUnit * produto.qtd;
        }
        return precoTotal;
    },
    calcularDesconto: function(){
        let desconto1 = 0;
        let totalItems = this.calcularTotalDeItens();
        //DESCONTOS NÃO CUMULATIVOS
        //1º CRITÉRIO: para compras acima de 4 itens, o item mais barato sai de graça.
        if (totalItems > 4){  
            for (let i = 0; i < this.produtos.length; i++){
                const {precoUnit} = this.produtos[i];
                if (i == 0){
                    desconto1 = precoUnit;
                }else if (desconto1 > precoUnit){
                    desconto1 = precoUnit;
                }     
            }
        }
        //2ª CRITÉRIO: desconto de 10% para compras acima de 100 reais.
        let desconto2 = 0;
        let totalAPagar = this.calcularTotalAPagar();
        if (totalAPagar > 10000){
            desconto2 = 0.1*totalAPagar;
        }

        return desconto1 > desconto2 ? desconto1 : desconto2;
    },
    formatarMoeda: function(moeda){ //Entrada em Centavos e saída em reais
        let moedaFormatada = (moeda/100).toFixed(2).replace(".",",");
        return moedaFormatada;
    }

}

carrinho.imprimirDetalhes();
carrinho.imprimirResumo();

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
carrinho.imprimirDetalhes();
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();
carrinho.imprimirResumo();
