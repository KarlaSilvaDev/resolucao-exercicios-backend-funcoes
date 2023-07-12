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

    }
}

function addProdutoAoCarrinho(carrinho, produto){
    const {produtos} = carrinho;
    let noCarrinho = false;
    for (let produtoCarrinho of produtos){
        if (produtoCarrinho.id == produto.id){
            produtoCarrinho.qtd += produto.qtd;
            noCarrinho = true;
            break;
        }
    }
    if (!noCarrinho){
        produtos.push(produto);
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

addProdutoAoCarrinho(carrinho, novoTenis);
carrinho.imprimirResumo();
