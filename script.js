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
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let usedFiftyFifty = false;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const fiftyFiftyButton = document.getElementById('lifeline1');
const phoneFriendButton = document.getElementById('lifeline3');
const switchQuestionButton = document.getElementById('lifeline4');

fiftyFiftyButton.addEventListener('click', useFiftyFifty);
phoneFriendButton.addEventListener('click', phoneAFriend);
switchQuestionButton.addEventListener('click', switchQuestion);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    usedFiftyFifty = false;
    fiftyFiftyButton.disabled = false;
    phoneFriendButton.disabled = false;
    switchQuestionButton.disabled = false;
    updateProgressBar();
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
    startTimer();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.style.display = 'block'; // Ensure button is displayed
        button.addEventListener('click', selectAnswer);
    });
    updateProgressBar();
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
    clearInterval(timer);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score += 1000;
    } else {
        selectedButton.classList.add('wrong');
    }
    scoreElement.textContent = `$${score}`;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            alert('Congratulations! You completed the game! Final score: $' + score);
        }
    }, 1000);
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

    const answersToRemove = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 2);
    answersToRemove.forEach(index => {
        answerButtons[index].style.display = 'none';
    });
}

function phoneAFriend() {
    phoneFriendButton.disabled = true;
    alert("Your friend thinks the answer is: " + questions[currentQuestionIndex].answers.find(a => a.correct).text);
}

function switchQuestion() {
    switchQuestionButton.disabled = true;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert('No more questions to switch to!');
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex + 1) / questions.length * 100;
    progressBar.style.width = progress + '%';
}
const usernameInput = document.getElementById('username');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const profileContainer = document.getElementById('profile-container');
const loginContainer = document.getElementById('login-container');
const userNameDisplay = document.getElementById('user-name');

function login() {
    const username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        showProfile();
    }
}

function logout() {
    localStorage.removeItem('username');
    showLogin();
}

function showProfile() {
    const username = localStorage.getItem('username');
    if (username) {
        userNameDisplay.textContent = username;
        profileContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    }
}

function showLogin() {
    profileContainer.style.display = 'none';
    loginContainer.style.display = 'block';
}

// Set up login and logout event listeners
loginButton.addEventListener('click', login);
logoutButton.addEventListener('click', logout);

// Show profile if already logged in
showProfile();
const leaderboardKey = 'leaderboard';

function saveScore(name, score) {
    let leaderboard = JSON.parse(localStorage.getItem(leaderboardKey)) || [];
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    if (leaderboard.length > 10) leaderboard.pop(); // Keep top 10 scores
    localStorage.setItem(leaderboardKey, JSON.stringify(leaderboard));
    updateLeaderboard();
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard');
    let leaderboard = JSON.parse(localStorage.getItem(leaderboardKey)) || [];
    leaderboardList.innerHTML = leaderboard.map(entry => `<li>${entry.name}: $${entry.score}</li>`).join('');
}

// Call updateLeaderboard on page load
updateLeaderboard();

startGame();
