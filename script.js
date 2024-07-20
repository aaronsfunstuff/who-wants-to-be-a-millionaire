const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const fiftyFiftyButton = document.getElementById('lifeline1');
const askAudienceButton = document.getElementById('lifeline2');

fiftyFiftyButton.addEventListener('click', useFiftyFifty);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    usedFiftyFifty = false;
    fiftyFiftyButton.disabled = false;
    showQuestion();
}

function startTimer() {
    let timeLeft = 30;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    alert('Time is up!');
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert('Game over! Final score: $' + score);
    }
}

function showQuestion() {
    resetState();
    startTimer(); // Start the timer for the new question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    clearInterval(timer);
    answerButtons.forEach(button => {
        button.classList.remove('correct');
        button.classList.remove('wrong');
        button.style.display = 'block';
        button.removeEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    clearInterval(timer); // Stop the timer when an answer is selected
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score += 1000;
    } else {
        selectedButton.classList.add('wrong');
    }
    scoreElement.textContent = `$${score}`;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(showQuestion, 1000);
    } else {
        setTimeout(() => alert('Congratulations! You won!'), 1000);
    }
}

function useFiftyFifty() {
    if (usedFiftyFifty) return;
    usedFiftyFifty = true;
    fiftyFiftyButton.disabled = true;

    const currentQuestion = questions[currentQuestionIndex];
    const incorrectAnswers = [];
    currentQuestion.answers.forEach((answer, index) => {
        if (!answer.correct) {
            incorrectAnswers.push(index);
        }
    });

    // Remove two random incorrect answers
    const answersToRemove = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 2);
    answersToRemove.forEach(index => {
        answerButtons[index].style.display = 'none';
    });
}

startGame();
