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
   {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Jane Austen", correct: true },
            { text: "Charlotte Brontë", correct: false },
            { text: "Emily Dickinson", correct: false },
            { text: "Mary Shelley", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        answers: [
            { text: "Gold", correct: true },
            { text: "Silver", correct: false },
            { text: "Copper", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Diamond", correct: true },
            { text: "Iron", correct: false },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Who is the author of the 'Harry Potter' series?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George R.R. Martin", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "What year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1918", correct: false },
            { text: "1923", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Hiroshima", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Nile River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "African Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Tomato", correct: false },
            { text: "Avocado", correct: true },
            { text: "Onion", correct: false },
            { text: "Pepper", correct: false }
        ]
    },
    {
        question: "Which famous scientist developed the laws of motion?",
        answers: [
            { text: "Isaac Newton", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Rome", correct: true },
            { text: "Florence", correct: false },
            { text: "Venice", correct: false },
            { text: "Milan", correct: false }
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Carbon", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Marseille", correct: false },
            { text: "Lyon", correct: false },
            { text: "Nice", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which famous artist is known for cutting off his own ear?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
            { text: "Salvador Dalí", correct: false }
        ]
    },
    {
        question: "What is the main language spoken in Brazil?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "Portuguese", correct: true },
            { text: "English", correct: false },
            { text: "French", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pb", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        answers: [
            { text: "China", correct: false },
            { text: "Canada", correct: true },
            { text: "United States", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yuan", correct: false },
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "Which organ in the human body is primarily responsible for pumping blood?",
        answers: [
            { text: "Lung", correct: false },
            { text: "Liver", correct: false },
            { text: "Heart", correct: true },
            { text: "Kidney", correct: false }
        ]
    },
    {
        question: "Which famous physicist developed the theory of electromagnetism?",
        answers: [
            { text: "Michael Faraday", correct: true },
            { text: "James Clerk Maxwell", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "Who was the 16th President of the United States?",
        answers: [
            { text: "Abraham Lincoln", correct: true },
            { text: "George Washington", correct: false },
            { text: "Thomas Jefferson", correct: false },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Pluto", correct: false }
        ]
    },
    {
        question: "Which vitamin is primarily obtained from sunlight?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true },
            { text: "Vitamin E", correct: false }
        ]
    },
    {
        question: "Which element is represented by the symbol 'O' on the periodic table?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false }
        ]
    },
    {
        question: "What is the largest island in the world?",
        answers: [
            { text: "Australia", correct: false },
            { text: "Greenland", correct: true },
            { text: "New Guinea", correct: false },
            { text: "Borneo", correct: false }
        ]
    },
    {
        question: "Which is the only continent with no desert?",
        answers: [
            { text: "Europe", correct: true },
            { text: "South America", correct: false },
            { text: "Australia", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "Who was the first human to journey into outer space?",
        answers: [
            { text: "Yuri Gagarin", correct: true },
            { text: "Neil Armstrong", correct: false },
            { text: "Buzz Aldrin", correct: false },
            { text: "John Glenn", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        answers: [
            { text: "Norway", correct: true },
            { text: "Sweden", correct: false },
            { text: "Finland", correct: false },
            { text: "Iceland", correct: false }
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            { text: "Madrid", correct: true },
            { text: "Barcelona", correct: false },
            { text: "Seville", correct: false },
            { text: "Valencia", correct: false }
        ]
    },
    {
        question: "Which famous scientist developed the theory of evolution?",
        answers: [
            { text: "Charles Darwin", correct: true },
            { text: "Gregor Mendel", correct: false },
            { text: "Louis Pasteur", correct: false },
            { text: "Richard Dawkins", correct: false }
        ]
    },
    {
        question: "What is the name of the longest river in Africa?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Congo", correct: false },
            { text: "Zambezi", correct: false },
            { text: "Niger", correct: false }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
            { text: "Lion", correct: true },
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the currency used in the United Kingdom?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Pound Sterling", correct: true },
            { text: "Dollar", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "What is the capital of Egypt?",
        answers: [
            { text: "Cairo", correct: true },
            { text: "Alexandria", correct: false },
            { text: "Giza", correct: false },
            { text: "Luxor", correct: false }
        ]
    },
    {
        question: "Who is known for his theory of gravity?",
        answers: [
            { text: "Isaac Newton", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Stephen Hawking", correct: false }
        ]
    },
    {
        question: "Which ocean is located between Africa and Australia?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: true },
            { text: "Pacific Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Bangalore", correct: false }
        ]
    },
    {
        question: "Who painted the Sistine Chapel ceiling?",
        answers: [
            { text: "Michelangelo", correct: true },
            { text: "Raphael", correct: false },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Caravaggio", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            { text: "Berlin", correct: true },
            { text: "Munich", correct: false },
            { text: "Frankfurt", correct: false },
            { text: "Hamburg", correct: false }
        ]
    },
    {
        question: "Which planet is known for its prominent ring system?",
        answers: [
            { text: "Saturn", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "Ada Lovelace", correct: false },
            { text: "Bill Gates", correct: false }
        ]
    },
    {
        question: "What is the name of the largest desert in the world?",
        answers: [
            { text: "Sahara", correct: false },
            { text: "Arabian", correct: false },
            { text: "Antarctic", correct: true },
            { text: "Gobi", correct: false }
        ]
    },{
        question: "Which ocean is the smallest in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: true },
            { text: "Pacific Ocean", correct: false }
        ]
    },
    {
        question: "Which famous inventor is known for the light bulb?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Alexander Graham Bell", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "James Watt", correct: false }
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Rosalind Franklin", correct: false },
            { text: "Ada Lovelace", correct: false },
            { text: "Helen Keller", correct: false }
        ]
    },
    {
        question: "Which U.S. state is known as the Sunshine State?",
        answers: [
            { text: "California", correct: false },
            { text: "Florida", correct: true },
            { text: "Texas", correct: false },
            { text: "Arizona", correct: false }
        ]
    },
    {
        question: "What is the name of the galaxy that contains our Solar System?",
        answers: [
            { text: "Andromeda", correct: false },
            { text: "Milky Way", correct: true },
            { text: "Triangulum", correct: false },
            { text: "Sombrero", correct: false }
        ]
    },
    {
        question: "Which famous explorer is credited with discovering America?",
        answers: [
            { text: "Christopher Columbus", correct: true },
            { text: "Ferdinand Magellan", correct: false },
            { text: "Vasco da Gama", correct: false },
            { text: "James Cook", correct: false }
        ]
    },
    {
        question: "What is the name of the largest volcano in the world?",
        answers: [
            { text: "Mount St. Helens", correct: false },
            { text: "Kilauea", correct: false },
            { text: "Mauna Loa", correct: true },
            { text: "Mount Fuji", correct: false }
        ]
    },
    {
        question: "What is the capital city of Thailand?",
        answers: [
            { text: "Bangkok", correct: true },
            { text: "Chiang Mai", correct: false },
            { text: "Phuket", correct: false },
            { text: "Krabi", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Ice Giant'?",
        answers: [
            { text: "Uranus", correct: true },
            { text: "Neptune", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who is the Greek goddess of wisdom?",
        answers: [
            { text: "Athena", correct: true },
            { text: "Aphrodite", correct: false },
            { text: "Hera", correct: false },
            { text: "Artemis", correct: false }
        ]
    },
    {
        question: "What is the longest river in South America?",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Paraná River", correct: false },
            { text: "Orinoco River", correct: false },
            { text: "São Francisco River", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Robert Koch", correct: false },
            { text: "Joseph Lister", correct: false }
        ]
    },
    {
        question: "Which element is essential for the production of thyroid hormones?",
        answers: [
            { text: "Iodine", correct: true },
            { text: "Calcium", correct: false },
            { text: "Iron", correct: false },
            { text: "Magnesium", correct: false }
        ]
    },
    {
        question: "What is the capital of Greece?",
        answers: [
            { text: "Athens", correct: true },
            { text: "Thessaloniki", correct: false },
            { text: "Patras", correct: false },
            { text: "Heraklion", correct: false }
        ]
    },
    {
        question: "Which artist is famous for his work 'Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
            { text: "Edvard Munch", correct: false }
        ]
    },
    {
        question: "What is the currency used in Mexico?",
        answers: [
            { text: "Peso", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Which famous battle took place in 1066?",
        answers: [
            { text: "Battle of Hastings", correct: true },
            { text: "Battle of Waterloo", correct: false },
            { text: "Battle of Trafalgar", correct: false },
            { text: "Battle of Gettysburg", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Giant Planet'?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the largest species of shark?",
        answers: [
            { text: "Great White Shark", correct: false },
            { text: "Hammerhead Shark", correct: false },
            { text: "Whale Shark", correct: true },
            { text: "Tiger Shark", correct: false }
        ]
    },
    {
        question: "What is the capital of Turkey?",
        answers: [
            { text: "Istanbul", correct: false },
            { text: "Ankara", correct: true },
            { text: "Izmir", correct: false },
            { text: "Antalya", correct: false }
        ]
    },
    {
        question: "Which scientist is known for his work on the theory of relativity?",
        answers: [
            { text: "Albert Einstein", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: [
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "Which fruit is known for having its seeds on the outside?",
        answers: [
            { text: "Strawberry", correct: true },
            { text: "Blueberry", correct: false },
            { text: "Apple", correct: false },
            { text: "Orange", correct: false }
        ]
    },
    {
        question: "What is the name of the sea between Europe and Africa?",
        answers: [
            { text: "Mediterranean Sea", correct: true },
            { text: "Red Sea", correct: false },
            { text: "Black Sea", correct: false },
            { text: "Caspian Sea", correct: false }
        ]
    },
    {
        question: "Which famous playwright wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Christopher Marlowe", correct: false },
            { text: "Ben Jonson", correct: false },
            { text: "George Bernard Shaw", correct: false }
        ]
    },
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
