// quiz.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Paris", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Paris", "Berlin", "Rome"],
        answer: "Madrid"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Madrid", "Paris", "Berlin", "Rome"],
        answer: "Berlin"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Madrid", "Paris", "Berlin", "Rome"],
        answer: "Rome"
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Lisbon", "Paris", "Berlin", "Rome"],
        answer: "Lisbon"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.querySelector(".question");
    const optionsElement = document.querySelector(".options");
    const questionCountElement = document.querySelector(".question-count");
    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-prev");
    const resultElement = document.querySelector(".result");
    const resultScoreElement = document.querySelector(".result-score");
    const btnReplay = document.querySelector(".btn-replay");

    function loadQuestion(index) {
        const questionData = questions[index];
        questionElement.textContent = questionData.question;
        optionsElement.innerHTML = "";
        questionCountElement.textContent = `${index + 1} of ${questions.length} questions`;

        questionData.options.forEach(option => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="option" value="${option}">
                ${option}
            `;
            optionsElement.appendChild(label);
        });
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption && selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
    }

    function showResult() {
        resultElement.style.display = 'block';
        resultScoreElement.textContent = `You got ${score} out of ${questions.length} questions right.`;
        btnNext.style.display = 'none';
        btnPrev.style.display = 'none';
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        resultElement.style.display = 'none';
        btnNext.style.display = 'inline-block';
        btnPrev.style.display = 'inline-block';
        loadQuestion(currentQuestionIndex);
    }

    btnNext.addEventListener("click", () => {
        checkAnswer();
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    });

    btnPrev.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    btnReplay.addEventListener("click", () => {
        resetQuiz();
    });

    loadQuestion(currentQuestionIndex);
});
