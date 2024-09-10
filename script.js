
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Falta de profissionais qualificados"
        alternativas: [
            {
                texto: "Atraves de faculdades presenciais.
            ",
                afirmacao: "Atraves de faculdades online a distancia."
            },
            {
                texto:  "Com cursos de capacitaçao regularmente.",
                afirmacao: "Contrataçao de pessoas responsaveis e eficientes."
            }    
           
        ]
    }
        enunciado: Falta na capacitaçao na saude publica ?",
            alternativas: [
                {
                    texto: "E importante o investimento na area da saude publica.",
                    afirmacao: "melhor atendimento na triagem de pacientes."
                },
                {
                    texto:  "Atendimento online na saude publica. ",
                    afirmacao: "Atendimento presencial."
                }    
               
            ]
        },
        {
            enunciado: "Falta de medicos?",

            alternativas: [
                {
                    texto: Atendimento duas vezes apenas na semana.",
                    afirmacao: "Atendimento todos os dias em horarios comerciais."
                },
                {
                    texto:    "Atendimentos via meet.",
               
                    afirmacao: "Atendimento presencial, especializado."
                }    
               .
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}


mostraPergunta();