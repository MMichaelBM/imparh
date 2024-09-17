let currentQuestionIndex = 0;
const questions = [
    { question: "Digite 'quarenta e cinco'? em inglês", answer: "forty five" },
    { question: "Digite 'cinquenta'? em inglês", answer: "fifty" },
    { question: "Como você diz 'canadense' em inglês?", answer: "Canadian" },
    { question: "Qual é o adjetivo que descreve algo pequeno?", answer: "small" },
    { question: "Como você diz 'francês' em inglês?", answer: "French" },
    { question: "Qual é o termo em inglês para o membro da família que é a mãe do pai?", answer: "grandmother" },
    { question: "Qual é o número de 0 a 10 em inglês para 'nove'?", answer: "nine" },
    { question: "Como você diz 'italiano' em inglês?", answer: "Italian" },
    { question: "Como você diz 'Peruano' em inglês?", answer: "Peruvian" },
    { question: "Qual é o adjetivo que descreve algo muito rápido?", answer: "fast" },
    { question: "Como você diz 'tio' em inglês?", answer: "uncle" },
    { question: "Digite 'doze' em inglês", answer: "twelve" },
    { question: "Qual é a nacionalidade de alguém que vem do Japão?", answer: "Japanese" },
    { question: "Qual é o termo em inglês para o membro da família que é a esposa do meu pai?", answer: "stepmother" },
    { question: "Digite 'trinta' em inglês", answer: "thirty" },
    { question: "Digite 'Sessenta e dois' em inglês.", answer: "sixty two" },
    { question: "Como você diz 'mexicano' em inglês?", answer: "Mexican" },
    { question: "Qual é o adjetivo que descreve algo muito antigo?", answer: "old" },
    { question: "Como você diz 'irmã' em inglês?", answer: "sister" },
    { question: "Qual é o número de 0 a 10 em inglês para 'sessenta e cinco'?", answer: "sixty five" },
    { question: "Como você diz 'argentino' em inglês?", answer: "Argentine" },
    { question: "Qual é o termo em inglês para o membro da família que é o pai da mãe?", answer: "grandfather" },
    { question: "Digite 'vinte e cinco' em inglês", answer: "twenty five" },
    { question: "Como você diz 'inglês' em inglês?", answer: "English" },
    { question: "Qual é o adjetivo que descreve algo confortável?", answer: "comfortable" },
    { question: "Como você diz 'cachorro' em inglês?", answer: "dog" },
    { question: "Digite 'oitenta' em inglês", answer: "eighty" },
    { question: "Como você diz 'espanhol' em inglês?", answer: "Spanish" },
    { question: "Qual é o termo em inglês para o membro da família que é o irmão da minha mãe?", answer: "uncle" },
    { question: "Digite 'cinquenta' em inglês?", answer: "fifty" },
    { question: "Como você diz 'português' em inglês?", answer: "Portuguese" },
    { question: "Qual é o adjetivo que descreve algo novo?", answer: "new" },
    { question: "Como você diz 'avô' em inglês?", answer: "grandfather" },
    { question: "Digite'noventa e cinco' em inglês?", answer: "ninety five" },
    { question: "Como você diz 'suiço' em inglês?", answer: "Swiss" },
    { question: "Qual é o termo em inglês para o membro da família que é a mãe do meu pai?", answer: "grandmother" },
    { question: "Digite 'trinta e dois' em inglês", answer: "thirty two" },
    { question: "Como você diz 'brasileiro' em inglês?", answer: "Brazilian" },
    { question: "Qual é o adjetivo que descreve algo bonito?", answer: "beautiful" },
    { question: "Como você diz 'irmão' em inglês?", answer: "brother" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(index) {
    const question = questions[index];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('confirm-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Resposta correta!';
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('confirm-btn').style.display = 'none';
    } else {
        document.getElementById('feedback').innerHTML = `Resposta incorreta. A resposta correta é: <strong>${questions[currentQuestionIndex].answer}</strong>`;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').textContent = 'Parabéns, você completou o quiz!';
}

document.addEventListener('DOMContentLoaded', () => {
    shuffleArray(questions); // Embaralha as perguntas
    showQuestion(currentQuestionIndex);
});
