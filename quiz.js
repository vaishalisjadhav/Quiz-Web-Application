// quiz.js

const questions = [
    {
        question: "Which built-in method returns the character at the specified index?",
        options: ["characterAt()", "getCharAt()", "charAt()", "None of the above"],
        answer: "charAt()"
    },
    {
        question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
        options: ["slice()", "split()", "substr()", "substring()"],
        answer: "substring()"
    },
    {
        question: "JavaScript file has an extension of?",
        options: [".java", ".js", ".javascript", ".xml"],
        answer: ".js"
    },
    {
        question: "Which function is used to parse a String to Int?",
        options: ["integer.parse", "int.parse", "parse.int", "None"],
        answer: "int.parse"
    },
    {
        question: "Which event is used to check an empty text box?",
        options: ["onClick()", "onFocus()", "onBlur()", "None"],
        answer: "onBlur()"
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
        window.location.href = `results.html?score=${score}`;
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

    loadQuestion(currentQuestionIndex);
});
