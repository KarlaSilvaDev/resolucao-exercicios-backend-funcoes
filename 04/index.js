const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor){
        this.saldo += valor;
        this.atualizarHistorico("Depósito", valor);
        return `Depósito de R$ ${this.formatarMoeda(valor)} realizado para o cliente: ${this.nome}`;    
    },
    sacar: function(valor){
        if (valor > this.saldo){
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        }else{
            this.saldo -= valor;
            this.atualizarHistorico("Saque", valor);
            return `Saque de R$ ${this.formatarMoeda(valor)} realizado para o cliente: ${this.nome}`;
        }
    },
    atualizarHistorico: function(tipo, valor){ //tipo: "Depósito" ou "Saque" , valor: valor depositado ou sacado em centavos
        this.historicos.push(
            {
                tipo: tipo,
                valor: valor
            }
        )
    },
    extrato: function(){
        const {nome, saldo, historicos} = this;
        console.log(`Extrato de ${nome} - Saldo: R$ ${this.formatarMoeda(saldo)}`);
        console.log(`Histórico:`);
        let mensagem = "";
        for (let historico of historicos){
            const {tipo, valor} = historico;
            mensagem += `${tipo} de R$ ${this.formatarMoeda(valor)}\n`;
        }
        return mensagem;
    },
    formatarMoeda: function(moeda){ //o argumento é um valor em centavos. A função retorna o valor formatado em reais
        let moedaFormatada = (moeda/100).toFixed(2).replace(".", ",");
        return moedaFormatada;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());