const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function(){
        if (this.ligado){
            console.log('Este carro já está ligado.')
        }else{
            this.ligado = true; 
            this.status();
        }     
    },
    desligar: function(){
        if (!this.ligado){
            console.log('Este carro já está desligado.');
        }else{ //SOLUÇÃO SIMPLES
            this.velocidade = 0;
            this.ligado = false;
            this.status();
        }
        //SOLUÇÃO EXTRA: o carro apenas será desligado quando tiver em velocidade zero.
        //Para usar essa solução, deve-se substituir todo o bloco else acima pelas linhas de código comentadas abaixo
        /*
        }else if (this.velocidade == 0){
            this.ligado = false;
            this.velocidade = 0;
            this.status();  
        }else{
            console.log('O carro não pode ser desligado, pois a velocidade não é igual a zero.')
        }*/ 

    },
    acelerar: function(){
        if (this.ligado){
            this.velocidade += 10;
            this.status();
        }else{
            console.log('Não é possível acelerar um carro desligado.')
        }
    },
    desacelerar: function(){
        if (this.ligado){
            if (this.velocidade >= 10){
                this.velocidade -= 10;
                this.status();
            }else{
                console.log('Não dá para reduzir a velocidade. O carro já está parado.');
            }
        }else{
            console.log('Não é possível desacelerar um carro desligado.')
        }      
    },
    status: function(){
        console.log(`Carro ${this.ligado == true? 'ligado' : 'desligado'}. Velocidade: ${this.velocidade}.`);
    }
}

//1. Desligar o carro
carro.desligar();
//2. Ligar o carro
carro.ligar();
//3. Ligar o Carro
carro.ligar();
//4. Acelerar o Carro
carro.acelerar();
//5. Acelerar o Carro
carro.acelerar();
//6. Desacelerar o Carro
carro.desacelerar();
//7. Desligar o Carro
carro.desligar();
//8. Acelerar o Carro
carro.acelerar();
//9. Desacelerar o Carro
carro.desacelerar();
