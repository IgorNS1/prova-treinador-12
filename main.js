const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_12.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_12[currentQuestionIndex].question
    questions_page_12[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_12.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_12 = [
    {
        question: 'Qual é a função do menu digital e físico nos restaurantes?',
        answer: [
            { text: 'Os menus servem apenas para enfeitar o balcão.', correct: false },
            { text: 'Os menus são utilizados para exibir as nossas ofertas e podem ser vistos pelos clientes quando eles pedem sua refeição. Eles incluem informações sobre preço e informações sobre cada item do menu.', correct: true },
            { text: 'Os menus são usados apenas para treinamentos internos.', correct: false },
            { text: 'Os menus existem apenas para promover os itens mais vendidos.', correct: false },
        ]
    },
    {
        question: 'Qual é a importância da limpeza e sanitização dos utensílios da chapa?',
        answer: [
            { text: 'Lavar e sanitizar utensílios da chapa regularmente impactam na segurança do alimento e experiência do cliente.', correct: true },
            { text: 'Evita apenas que os utensílios enferrujem.', correct: false },
            { text: 'Serve apenas para manter a chapa visualmente limpa.', correct: false },
            { text: 'Não há necessidade de lavar e sanitizar diariamente.', correct: false },
        ]
    },
    {
        question: 'Qual é a ordem correta em relação a noções básicas de Apresentação?',
        answer: [
            { text: 'Cumprimente o cliente e sirva diretamente.', correct: false },
            { text: 'Apresente o pedido primeiro e depois cumprimente o cliente.', correct: false },
            { text: 'Cumprimente o cliente, verifique, apresente o pedido, espere, agradeça e sirva.', correct: true },
            { text: 'Verifique o pedido após servir.', correct: false },
        ]
    },
    {
        question: 'Qual é a primeira coisa que a pessoa do chão do Salão deve realizar antes de limpar a área com esfregão?',
        answer: [
            { text: 'Pedir permissão ao gerente.', correct: false },
            { text: 'Começar a esfregar imediatamente.', correct: false },
            { text: 'Limpar apenas quando não houver clientes.', correct: false },
            { text: 'Colocar a placa de sinalização de piso molhado.', correct: true },
        ]
    },
    {
        question: 'Qual é a principal causa de uma McFritas com quantidade imprópria de sal?',
        answer: [
            { text: 'Todas as anteriores.', correct: true },
            { text: 'Erro ao salgar.', correct: false },
            { text: 'Uso de sal em excesso.', correct: false },
            { text: 'Falta de treinamento.', correct: false },
        ]
    },
    {
        question: 'Qual é a principal responsabilidade dos funcionários em saúde e segurança?',
        answer: [
            { text: 'Apenas relatar acidentes.', correct: false },
            { text: 'Seguir os procedimentos operacionais e usar Equipamentos de Proteção indicados para cada atividade.', correct: true },
            { text: 'Evitar qualquer esforço físico.', correct: false },
            { text: 'Delegar a responsabilidade ao gerente.', correct: false },
        ]
    },
    {
        question: 'Qual é a quantidade de mostarda nos sanduíches a cada 1 tiro?',
        answer: [
            { text: '1/40 avos.', correct: true },
            { text: '1/20 avos.', correct: false },
            { text: '1/30 avos.', correct: false },
            { text: '1/50 avos.', correct: false },
        ]
    },
    {
        question: 'Qual é a quantidade máxima de carnes 4:1 que devemos ativar?',
        answer: [
            { text: '4 carnes.', correct: false },
            { text: '8 carnes.', correct: false },
            { text: '10 carnes.', correct: false },
            { text: '6 carnes.', correct: true },
        ]
    },
    {
        question: 'Qual é a sua responsabilidade para estar seguro no ambiente de trabalho?',
        answer: [
            { text: 'Apenas seguir as instruções do gerente.', correct: false },
            { text: 'Ignorar pequenas situações de risco.', correct: false },
            { text: 'Cuidar de forma responsável da própria saúde e segurança, assim como da saúde e segurança dos outros.', correct: true },
            { text: 'Usar Equipamentos de Proteção apenas quando solicitado.', correct: false },
        ]
    },
    {
        question: 'Qual é a temperatura de extração do suco?',
        answer: [
            { text: '0 a 4 graus.', correct: false },
            { text: '1 a 7 graus.', correct: true },
            { text: '4 a 6 graus.', correct: false },
            { text: '6 a 10 graus.', correct: false },
        ]
    },
    {
        question: 'Qual é a temperatura do Refrigerador do Balcão?',
        answer: [
            { text: '0°C a 2°C.', correct: false },
            { text: '4°C a 6°C.', correct: false },
            { text: '5°C a 8°C.', correct: false },
            { text: '1°C a 4°C.', correct: true },
        ]
    },
    {
        question: 'Qual é a temperatura mínima interna das carnes de frango e bovina respectivamente?',
        answer: [
            { text: '70 graus e 74 graus.', correct: false },
            { text: '80 graus e 70 graus.', correct: false },
            { text: '74 graus e 70 graus.', correct: true },
            { text: '74 graus e 74 graus.', correct: false },
        ]
    },
    {
        question: 'Qual é o compromisso da Arcos Dourados para o Emprego Jovem?',
        answer: [
            { text: 'Capacitar mais de 2 milhões de jovens até 2025.', correct: true },
            { text: 'Capacitar 1 milhão de jovens até 2030.', correct: false },
            { text: 'Apenas oferecer estágios.', correct: false },
            { text: 'Garantir empregos para 500 mil jovens.', correct: false },
        ]
    },
    {
        question: 'Qual é o conceito de "Fazer Bem"?',
        answer: [
            { text: 'Atuar apenas nos grandes problemas.', correct: false },
            { text: 'Focar apenas em metas de vendas.', correct: false },
            { text: 'Delegar a responsabilidade para os líderes.', correct: false },
            { text: 'Concentrar-se em todos os detalhes, por menores que sejam.', correct: true },
        ]
    },
    {
        question: 'Qual é o conceito de "Fazer Especial"?',
        answer: [
            { text: 'Apenas cumprir as promessas feitas aos clientes.', correct: false },
            { text: 'Manter o básico sem erros.', correct: false },
            { text: 'Fazer tudo o que estiver ao nosso alcance para agregar valor à experiência dos nossos clientes e superar suas expectativas.', correct: true },
            { text: 'Garantir rapidez no atendimento.', correct: false },
        ]
    },
    {
        question: 'Qual é o jeito mais adequado de tratar o entregador?',
        answer: [
            { text: 'Apenas entregar o pedido rapidamente.', correct: false },
            { text: 'Evitar qualquer tipo de comunicação.', correct: false },
            { text: 'Tratar o entregador com indiferença.', correct: false },
            { text: 'De forma clara e objetiva, sendo gentil e hospitaleiro.', correct: true },
        ]
    },
    {
        question: 'Qual é o nosso compromisso quando falamos do pilar de Família & Bem-estar?',
        answer: [
            { text: 'Nosso foco é apenas na rapidez do atendimento.', correct: false },
            { text: 'Mantemos o nosso compromisso com as famílias com opção de cardápio cada vez mais saudável, livre de conservantes e corantes, sempre que possível. E mantendo sempre transparência das informações nutricionais.', correct: true },
            { text: 'Oferecemos um cardápio com o mínimo de informações.', correct: false },
            { text: 'Nosso compromisso é apenas com os produtos mais vendidos.', correct: false },
        ]
    },
];
