// results.js

document.addEventListener("DOMContentLoaded", () => {
    const resultScoreElement = document.querySelector(".result-score");
    const btnReplay = document.querySelector(".btn-replay");

    const params = new URLSearchParams(window.location.search);
    const score = params.get('score');

    resultScoreElement.textContent = `You got ${score} out of 5 questions right.`;

    btnReplay.addEventListener("click", () => {
        window.location.href = 'index.html'; // Redirect to the main quiz page
    });
});
