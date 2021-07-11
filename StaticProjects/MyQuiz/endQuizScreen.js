const startAgainBtn = document.querySelector(".startAgainBtn");


const scoreSpan = document.querySelector(".scoreSpan");

const endScore = JSON.parse(localStorage.getItem("endScore"));
const outOf = JSON.parse(localStorage.getItem("outOf"));

scoreSpan.textContent = `${endScore} out of ${outOf}`;

// Start again button 
startAgainBtn.addEventListener("click", () => {
    window.location.assign("Quiz.html");
});