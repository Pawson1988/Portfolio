const questionShow = document.querySelector(".question");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const scoreDisplay = document.querySelector(".scoreDisplay");
const resultDisplay = document.querySelector(".resultDisplay");
const rightWrongDisplay = document.querySelector(".rightWrongDisplay");
const startButton = document.querySelector(".startButton");
const answers = document.querySelectorAll(".answer");
const nextButton = document.querySelector(".nextButton");
const gameOverMsg = document.querySelector(".gameOverMsg");
const qNumber = document.querySelector(".Q-Number");



class Question {
    constructor(question, answerA, answerB, answerC, answerD, correctAnswer){
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.correctAnswer = correctAnswer;
    }

    showQuestion(){
        questionShow.textContent = this.question;
        answer1.textContent = this.answerA;
        answer2.textContent = this.answerB;
        answer3.textContent = this.answerC;
        answer4.textContent = this.answerD;
        resultDisplay.textContent = this.correctAnswer;
        
    }
}

const questionsArray = [
new Question(
   "How many seasons are there?",
    1,
    2,
    3,
    4,
    4
),
new Question(
    "What is the capital city of France?",
    "London",
    "Rome",
    "Paris",
    "Madrid",
    "Paris"
),
new Question(
    "How old is james?",
    25,
    45,
    67,
    33,
    33
),
new Question(
    "He _____ eating his lunch at 1pm yesterday",
    "is",
    "was",
    "were",
    "when",
    "was"
),
new Question(
    "Where is La Sagrada Familia?",
    "Paris",
    "Rome",
    "Barcelona",
    "Sabadell",
    "Barcelona"
), 
new Question(
    "Which animal has the an excellent memory?",
    "Cat", 
    "Dog", 
    "Elephant", 
    "Crocodile",
    "Elephant"
)];

let buttonClicked = false;
let questionNumber = 1;
let score = 0;
let questLen = questionsArray.length;

// to move to the next question in the array. 
function goToNextQuestion(){
    if(questionNumber  !== questLen){
    incrementQuestionNumber();
    }

    buttonClicked = false;
    questionsArray[questionNumber - 1].showQuestion();
    resultDisplay.style.display = "hide";
    rightWrongDisplay.style.display = "none"; 
}

nextButton.addEventListener("click", goToNextQuestion);

// to set the quiz up initially

function startQuiz(){
    questionNumber = 1;
    score = 0;
    changeScoreDisplay();
    changeQNumberDisplay();
    resultDisplay.textContent = undefined;
    resultDisplay.style.display = "hide";
    gameOverMsg.textContent = undefined;
    rightWrongDisplay.textContent = undefined;
    questionsArray[questionNumber - 1].showQuestion();
    buttonClicked = false;
}

startButton.addEventListener("click", () => {
    startQuiz();
})

//to check whether the question is correct or not
function checkQuestion(){

        rightWrongDisplay.style.display = "block";

        if(this.textContent === resultDisplay.textContent && buttonClicked === false){
            rightWrongDisplay.textContent = "Well done!";
            incrementScore();
            buttonClicked = true;
            
            if (questionNumber  === questLen){
                gameOverMsg.textContent = `Quiz finished, you scored ${score} out of ${questLen}`;
                buttonClicked = true;
                localStorage.setItem("endScore", score);
                localStorage.setItem("outOf", questLen);
                setTimeout(() => {
                    window.location.assign('endQuizScreen.html');
                }, 2000);
        }

        } else if (questionNumber !== questLen && buttonClicked === false) {
            rightWrongDisplay.textContent = "Nope!";
            buttonClicked = true;    
        }

            if (questionNumber === questLen){
                gameOverMsg.textContent = `Quiz finished, you scored ${score} out of ${questLen}`;
                buttonClicked = true;
                // to go to the end screen to display the final score after 1.5 seconds
                localStorage.setItem("endScore", score);
                localStorage.setItem("outOf", questLen);
                setTimeout(() => {
                window.location.assign('endQuizScreen.html');
                }, 1500);
        }
}


// to loop through the answer, once an answer is clicked it will then be checked by the abover function (checkQuestion)
for(let answer of answers){
    answer.addEventListener("click", checkQuestion);
}


// below: functions to increment the score and question number and then to update their respective displays

function changeScoreDisplay(){
    scoreDisplay.textContent = score;
}

function changeQNumberDisplay(){
    qNumber.textContent = questionNumber;
}

function incrementScore() {
   score = score + 1;
    changeScoreDisplay();
}

function incrementQuestionNumber(){
    questionNumber = questionNumber + 1;
    changeQNumberDisplay();
}

startQuiz();
