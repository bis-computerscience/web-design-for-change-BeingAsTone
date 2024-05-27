const questions = [
    { question: "The population of Jaguars are showing an increase trend", answer: "X" },
    { question: "Mainly, the reason that the Amazon is disappearing is mostly because deforestation", answer: "O" },
    { question: "Even Jaguars disappear, the food chain will easily be balanced again", answer: "X" },
    { question: "The wood and paper consumption are keep showing a high use", answer: "O" },
    { question: "You can help reducing the oil consumption by taking public transportation", answer: "O" }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('question-page').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question-text');
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    document.getElementById('next-button').style.display = 'none';
}

function submitAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
    }
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-page').style.display = 'none';
    document.getElementById('final-page').style.display = 'block';
    document.getElementById('result-text').textContent = `You got ${score} out of ${questions.length} correct!`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('final-page').style.display = 'none';
    document.getElementById('start-page').style.display = 'block';
}
