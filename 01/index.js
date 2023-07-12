const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova){
    const {aluno, materia, valor, questoes} = prova; //desestruturação
    let acertos = 0;
    for (let questao of questoes){             
        if (questao.resposta === questao.correta){ 
            acertos++;
        }
    }
    let nota = (valor/questoes.length)*acertos; //calcula o valor de cada questão e multiplica pela quantidade de acertos.
    console.log(`O aluno(a) ${aluno} acertou ${acertos} ${acertos > 1 ? "questões" : "questão"} e obteve nota ${nota} na prova de ${materia}.` );
}

corrigirProva(prova);

