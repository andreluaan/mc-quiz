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
            //funçao de pontuação 
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
        titulo: 'De acordo com o termo “pesquisa” no contexto científico, ela pode ser classificada em três tipos. São eles:',
        opcoes: ['Pesquisa primária, pesquisa secundária e pesquisa terciária.','Pesquisa exploratória, pesquisa descritiva e pesquisa de levantamento.' , 'Pesquisa quanto à natureza, pesquisa-ação e quanto aos procedimentos técnicos.' , 'Pesquisa bibliográfica, documental e experimental.' , 'Pesquisa quanto à natureza, quanto aos objetivos e quanto aos procedimentos técnicos.' ],
        resposta: 1
    }   
    
    ,{
        titulo: 'Dê uma definição de pelo menos três tipos de pesquisa.',
        opcoes: ['Pesquisa etnográfica e pesquisa bibliográfica','Pesquisa primária e pesquisa terciária' , 'Pesquisa de levantamento e pesquisa explicativa' , 'Pesquisa-ação e casos confirmatórios' ],
        resposta: 2
    }

    ,{
        titulo: 'De acordo com a Computação, como são definidos os termos “Ciência e Tecnologia”?',
        opcoes: ['Pesquisa documental','Pesquisa bibliográfica' , 'Pesquisa de levantamento' , 'Pesquisa-ação' , ],
        resposta: 3
    }

    ,{
        titulo: 'Como é feita uma pesquisa-ação? ',
        opcoes: ['É feita usualmente com a aplicação de questionários a um grupo de pessoas para que possa conhecer melhor suas opiniões e observações sobre determinado tópico','Implica que o pesquisador sistematicamente provocará alterações no ambiente a ser pesquisado, de forma a observar se cada intervenção produz os resultados esperados.' , 'O pesquisador interage com os pesquisados, envolvendo-se no trabalho de pesquisa de forma participativa, buscando determinado resultado. Ela não é feita apenas para descobrir como o mundo é, mas a intervenções possíveis para resolver problemas ainda não resolvidos.' , 'Utiliza técnicas rigorosas de amostragem e testes de hipóteses para que seus resultados sejam estaticamente aceitáveis e generalizáveis (Barbetta, Reis e Bornia, 2008).'],
        resposta: 2
    }

    ,{
        titulo: 'O estudo de caso é uma técnica muito utilizada em Computação, cabe mencionar que existem dois tipos básicos de estudos de caso:',
        opcoes: ['Caso etnográfico e Caso exploratório','Case exploratório e Caso de levantamento.' , 'Caso confirmatório e Caso exploratório.' , 'Caso especial e Prova de validade.' ],
        resposta: 3
    }

    ,{
        titulo: '“Busca apresentar conhecimento novo a partir de observações e teorias construídas para explicá-las. Assume-se a nova informação como relevante quando ela tem implicação na forma como se entendem os processos e sistemas ou quando tem implicação prática na sua realização.” De acordo com os tipos de pesquisa, marque a alternativa correta que mais se encaixa com esta definição.',
        opcoes: ['Pesquisa terciária','Pesquisa exploratória' , 'Pesquisa explicativa' , 'Pesquisa primária' , 'Pesquisa científica' ],
        resposta: 4
    }

    ,{
        titulo: 'Qual o tipo de pesquisa pode ser utilizado, por exemplo, para descobrir quais técnicas e ferramentas têm sido usadas na indústria ou na academia?',
        opcoes: ['Pesquisa de levantamento','Pesquisa-ação' , 'Pesquisa experimental' , 'Pesquisa observacional' , 'Pesquisa Documental' ],
        resposta: 4
    }

    ,{
        titulo: 'A participação observacional no qual o pesquisador não só observa, mas entra para a equipe e passa a realizar as tarefas efetivamente é um exemplo de:',
        opcoes: ['Pesquisa-ação','Pesquisa de levantamento' , 'Pesquisa etnográfica' , 'Pesquisa documental' ],
        resposta: 2
    }

    ,{
        titulo: 'A pesquisa-ação demanda a existência de um:',
        opcoes: ['Problem Owner','Situational problem' , 'Lead developer' , 'Programming instructor'],
        resposta: 0
    }

    ,{
        titulo: 'Uma técnica muito popular na qual o pesquisador vai buscar evidências a partir de diferentes técnicas é chamada:',
        opcoes: ['Triangulação','Prova de validade' , 'Estudos dirigidos ' , 'Verdade Absoluta' ],
        resposta: 0
    }

    ,{
        titulo: 'É uma técnica muito usada em Computação, embora muita confusão ainda exista em relação a ela.',
        opcoes: ['Estudo dirigido','Estudo do caso' , 'Técnica de observação' , 'Limite de pesquisa' ],
        resposta: 1
    }

    ,{
        titulo: 'É a aplicação dos conhecimentos nas atividades práticas, como, por exemplo, as atividades industriais e econômicas.',
        opcoes: ['Ciência','Sistema' , 'Software' , 'Hardware' , 'Tecnologia' ],
        resposta: 4
    }

    ,{
        titulo: 'Para que um trabalho seja considerado científico é necessário que:',
        opcoes: ['A informação contida nele explique um pouco mais sobre o porquê de as coisas funcionarem como funcionam ou como poderiam funcionar melhor','A informação contida seja obtida através de um tipo de pesquisa específico e apenas de uma forma' , 'A informação contida nele explique um pouco sobre o determinado assunto, sem a necessidade de uma escrita e pesquisa correta' , 'Explique sobre como o autor chegou no resultado e em como suas hipóteses foram sendo aplicadas, apenas'],
        resposta: 0
    }

    ,{
        titulo: 'É a busca do conhecimento e das explicações.',
        opcoes: ['Tecnologia','Teoria científica ' , 'Ciência ' , 'Artigo científico ' ],
        resposta: 2
    }

    ,{
        titulo: 'Uma ideia que pode ser testada para resolver o problema integral ou parcialmente.',
        opcoes: ['Hipótese','Teoria' , 'Estudo' , 'Trabalho acadêmico'],
        resposta: 0
    }
]




// posição da pergunta na lista
let indice = 0;
