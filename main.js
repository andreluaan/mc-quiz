const mostrar = (elementId) => document.getElementById(elementId).hidden = false;

function esconder (elementId) {
    document.getElementById(elementId).hidden = true;
}

function adicionarOpcoes (incrementar = false) {
    const opcoes = perguntas[indice].opcoes;

    opcoes.forEach((opcao, index) => {
        const elementoHTML = `
        <input type="radio" name="opcao" id="${index}" value=${index}>
        <label for="${index}">${opcao}</label>
        <br/>`;
    opcoesHTML.innerHTML += elementoHTML;
    });
}

function proximaPergunta (incrementar = false) {
    opcoesHTML.innerHTML = '';
    errorMsg.innerHTML = '';
    if (incrementar) {
        indice++;
    }
    
    if (indice < perguntas.length) { // se o indice existe na lista de perguntas
        document.getElementById('question-title').innerHTML = perguntas[indice].titulo;
        adicionarOpcoes(incrementar);

    } else {
        mostrar('end-image');
        esconder('question-title');
        esconder('next-button');
    }
}

function validarResposta() {
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
    const resposta = opcaoSelecionada && opcaoSelecionada.value; // igual a:::: if (opcaoSelecionada) { reposta = opcaoSelecionada.value }
    if (resposta) {
        const acertou = resposta == perguntas[indice].resposta;
        if (acertou) {
            proximaPergunta(true);
        } else {
            errorMsg.innerHTML = 'erooooooou';
        }
    } else {
        errorMsg.innerHTML = 'Selecione uma resposta';
    }
}

function iniciarJogo () {
    esconder('start-button');
    mostrar('next-button');
    proximaPergunta();
}


const opcoesHTML = document.getElementById('opcoes');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const errorMsg = document.getElementById('error-message');

// dizer ao botao (start-button) qual acao (iniciarJogo) ele deve executar ao ser clicado 
startButton.onclick = iniciarJogo;
nextButton.onclick = validarResposta;


const perguntas = [
    {
        titulo: '1- De acordo com o termo “pesquisa” no contexto científico, ela pode ser classificada em três tipos. São eles:',
        opcoes: ['A','Pesquisa exploratória, pesquisa descritiva e pesquisa de levantamento.' , 'Pesquisa quanto à natureza, pesquisa-ação e quanto aos procedimentos técnicos.' , 'Pesquisa bibliográfica, documental e experimental.' , 'Pesquisa quanto à natureza, quanto aos objetivos e quanto aos procedimentos técnicos.' ],
        resposta: 1
    }   
    
    ,{
        titulo: '2- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '3- De acordo com a Computação, como são definidos os termos “Ciência e Tecnologia”?',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'C'
    }

    ,{
        titulo: '4- Como é feita uma pesquisa-ação? ',
        opcoes: ['a','É feita usualmente com a aplicação de questionários a um grupo de pessoas para que possa conhecer melhor suas opiniões e observações sobre determinado tópico','Implica que o pesquisador sistematicamente provocará alterações no ambiente a ser pesquisado, de forma a observar se cada intervenção produz os resultados esperados.' , 'O pesquisador interage com os pesquisados, envolvendo-se no trabalho de pesquisa de forma participativa, buscando determinado resultado. Ela não é feita apenas para descobrir como o mundo é, mas a intervenções possíveis para resolver problemas ainda não resolvidos.' , 'Utiliza técnicas rigorosas de amostragem e testes de hipóteses para que seus resultados sejam estaticamente aceitáveis e generalizáveis (Barbetta, Reis e Bornia, 2008).'],
        resposta:'a'
    }

    ,{
        titulo: '5- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '6- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '7- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '8- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '9- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '10- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '11- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }

    ,{
        titulo: '12- Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['A','B' , 'C' , 'D' , 'E' ],
        resposta:'D'
    }
]




// posição da pergunta na lista
let indice = 0;
