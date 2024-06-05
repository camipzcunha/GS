/*
+-----------+
| CARROSSEL |
+-----------+
*/

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img .img");

let i = 0;

function containerFotos(){
    i++;
    if(i > img.length - 1){
        i = 0;
    }

    imgs.style.transform = `translateX(${-i*100}%)`
}

setInterval(containerFotos, 1800);

/*
+--------------------+
| Cadastrar Projetos |
+--------------------+
*/

const btnCadastrar = document.querySelector('#cadastrarProjeto')
const listaProjetos = document.querySelector('#listaProjetos')
const inputNomeCriador = document.querySelector('#nomeCriador')
const inputEmail = document.querySelector('#email')
const inputNomeProjeto = document.querySelector('#nomeProjeto')
const inputProblema = document.querySelector('#problema')
const inputSolucao = document.querySelector('#solucao')
const forms = document.querySelector("#form")

const projetos = [
    {
        nomeCriador: "EcoMarine Solutions Ltda",
        email: "contato@ecomarinesolutions.com",
        nomeProjeto: "MarSaudável",
        problema: "Poluição e degradação dos ecossistemas marinhos.",
        solucao: "O MarSaudável é um projeto inovador que visa combater a poluição e restaurar a saúde dos oceanos. Por meio de tecnologias avançadas de limpeza e monitoramento ambiental, nossa equipe trabalha para remover resíduos plásticos, produtos químicos e outros poluentes dos oceanos, além de promover a conscientização sobre a importância da preservação dos ecossistemas marinhos. Com o uso de embarcações especializadas, drones e dispositivos de coleta, estamos empenhados em criar um futuro onde os oceanos sejam limpos, seguros e habitáveis para todas as formas de vida marinha. Junte-se a nós para proteger e restaurar os pulmões do nosso planeta - nossos oceanos."
    },
    {
        nomeCriador: "AquaGuardians Technologies",
        email: "contato@aquaguardians.com",
        nomeProjeto: "OceanoLimpo",
        problema: "Acidificação e aquecimento dos oceanos, prejudicando a vida marinha.",
        solucao: "O OceanoLimpo é uma iniciativa dedicada a mitigar os efeitos da acidificação e do aquecimento dos oceanos, que têm impactos devastadores na vida marinha. Desenvolvemos tecnologias sustentáveis de controle de pH e resfriamento dos oceanos, visando restaurar o equilíbrio ecológico e proteger as espécies marinhas vulneráveis. Por meio de métodos inovadores, como a dispersão controlada de minerais alcalinos e a instalação de dispositivos de resfriamento oceânico, estamos trabalhando para criar um ambiente marinho mais saudável e resiliente às mudanças climáticas. Junte-se a nós para preservar a beleza e a biodiversidade dos nossos oceanos para as gerações futuras."
    },
    {
        nomeCriador: "OceanCare Innovations",
        email: "contato@oceancareinnovations.com",
        nomeProjeto: "EcoMarineGuard",
        problema: "Desastres de derramamento de petróleo e seus impactos devastadores nos ecossistemas marinhos.",
        solucao: "O EcoMarineGuard é uma solução avançada para lidar com desastres de derramamento de petróleo e proteger os ecossistemas marinhos. Utilizando tecnologias de ponta, como barreiras de contenção biodegradáveis, dispersantes naturais e sistemas de recuperação de petróleo, nossa equipe está preparada para responder rapidamente a incidentes de derramamento de petróleo e minimizar seus impactos negativos. Além disso, trabalhamos em estreita colaboração com organizações de conservação e agências governamentais para desenvolver estratégias de prevenção e gestão de crises. Junte-se a nós na proteção dos nossos oceanos contra os danos causados pela poluição por petróleo e na promoção de um futuro mais limpo e sustentável para os ecossistemas marinhos."
    }
]

btnCadastrar.addEventListener('click', function(e){
    e.preventDefault();

    // Chamar a função cadastrarProjeto
    cadastrarProjeto()

    // Alert
    alert("Projeto Cadastrado!")

    // Limpa formulário
    forms.reset();
})


// CREATE -> Criando/cadastrando novo projeto
function cadastrarProjeto(){
    // 1 - Pega os dados do projeto
    let cadastrarNovoProjeto = {
        nomeCriador: inputNomeCriador.value,
        email: inputEmail.value,
        nomeProjeto: inputNomeProjeto.value,
        problema: inputProblema.value,
        solucao: inputSolucao.value
    }

    // 2 - Armazena os dados
    projetos.unshift(cadastrarNovoProjeto)

    // 3 - Atualiza o DOM
    renderizarNaTela()
}

// READ -> Lê os dados e atualiza na tela
window.onload = renderizarNaTela()
function renderizarNaTela(){
    listaProjetos.innerHTML = ""

    projetos.forEach(
        projeto => {
            let novoProjeto = document.createElement('li')
            novoProjeto.innerHTML = `
                <div class="projeto">
                    <h2 class="nomeProjeto">${projeto.nomeProjeto}</h2>
                    <p class="nomeProjeto"><strong>Nome do criador/empresa:</strong> ${projeto.nomeCriador}</p>
                    <p class="email"><strong>Email para contato:</strong> ${projeto.email}</p>
                    <p class="problema"><strong>Problema: </strong>${projeto.problema}</p>
                    <p class="solucao"><strong>Solução: </strong>${projeto.solucao}</p>
                </div>
            `
            // indexOF procura a posição do objeto dentro do array 
            listaProjetos.append(novoProjeto)
        }
    )
}