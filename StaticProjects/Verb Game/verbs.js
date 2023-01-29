import { verbsNotRandom } from "./verbsData.js"



// add verbsNotRandom.participle to each verbsNotrandom.alternative property that is blank to avoid errors. 
for(let i = 0; i < verbsNotRandom.length; i++){
    if(verbsNotRandom[i].alternative === ""){
        verbsNotRandom[i].alternative = verbsNotRandom[i].participle;
    }
}

// initalise a variable to capture user input for how many words they want. 
let noOfWords = "";

// ask user how many words and ask again if it's not within the number of words in the array
do {
    noOfWords = prompt("How many words do you want to show?: (Max verbs is: " + verbsNotRandom.length + ") ");
} while (noOfWords > verbsNotRandom.length);

// shuffle array and then slice the array at how many words the user wants, thus only showing how many words the user wants
const verbs = shuffleArray(verbsNotRandom).slice(0, noOfWords);

// get container from DOM to append children to it 
const container = document.querySelector(".container");

// create all the lements with the correct attributes for the user's words 
for(let i = 0; i < verbs.length; i++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "word-container");
    container.appendChild(newDiv);
    let word1Div = document.createElement("div");
    word1Div.setAttribute("class", "word1");
    newDiv.appendChild(word1Div);
    let word2Input = document.createElement("input");
    let word3Input = document.createElement("input");
    word2Input.setAttribute("class", "word2");
    word2Input.setAttribute("type", "text");
    word2Input.setAttribute("placeholder", "past verb!");
    word3Input.setAttribute("class", "word3");
    word3Input.setAttribute("type", "text");
    word3Input.setAttribute("placeholder", "past participle!");
    newDiv.appendChild(word2Input);
    newDiv.appendChild(word3Input);
}

//  get the elements from the DOM that were added in the above "function"
const wordContainers = document.querySelectorAll(".word-container");
const word1 = document.querySelectorAll(".word1");
const word2 = document.querySelectorAll(".word2");
const word3 = document.querySelectorAll(".word3");
const score2 = document.querySelector(".score2");
const score3 = document.querySelector(".score3");
const totalVerbs = document.querySelector(".no-verbs");

// initialise variable to be used later 
totalVerbs.textContent = "Total Verbs: " + verbs.length;
let word2Score = 0;
let word3Score = 0;

let word2ScoreTracker = [];
let word3ScoreTracker = [];

// EventListener for past verbs
    for(let i = 0; i < verbs.length; i++){ 
        word2[i].addEventListener("input", () => {
            if(word2[i].value.toLowerCase() === verbs[i].past.toLowerCase() || word2[i].value.toLowerCase() === verbs[i].alternative.toLowerCase()){
                if(!word2ScoreTracker[i]){
                    word2ScoreTracker[i] = true;
                    word2Score++;
                    score2.textContent = "Past Verbs: " + word2Score;
                    verbs[i].pastDone = true;
                }
                
                word2[i].style.backgroundColor = "#3fbb29";
                word2[i].disabled = true;
                word2[i].style.color = "white";
                word2[i].style.textTransform = "uppercase";

                if(word2Score === verbs.length){
                    score2.style.backgroundColor = "blue";
                    score2.style.color = "white";
                    alert("You got all the past verbs!! congrats!!");
                    
                }

                if(verbs[i].participleDone && verbs[i].pastDone ){
                    word2[i].parentElement.style.backgroundColor = "#a9e7b3";
                }
            } else {
                word2[i].style.backgroundColor = "red";
            }
        }
    )}

// EventListener for past participle verbs
    for(let i = 0; i < verbs.length; i++){ 
        word3[i].addEventListener("input", () => {
            if(word3[i].value.toLowerCase() === verbs[i].participle.toLowerCase() || word3[i].value.toLowerCase() === verbs[i].alternative.toLowerCase()){
                if(!word3ScoreTracker[i]){
                    word3ScoreTracker[i] = true;
                    word3Score++;
                    score3.textContent = "Past Participle Verbs: " + word3Score;
                    verbs[i].participleDone = true; 
                }
                
                word3[i].style.backgroundColor = "#3fbb29";
                word3[i].disabled = true;
                word3[i].style.color = "white";
                word3[i].style.textTransform = "uppercase";

                if(word3Score === verbs.length){
                    score3.style.backgroundColor = "blue";
                    score3.style.color = "white";
                    alert("You got all the past participle verbs!! congrats!!");
                }
                
                if(verbs[i].participleDone && verbs[i].pastDone){
                    word3[i].parentElement.style.backgroundColor = "#a9e7b3";
                }
            } else {
                word3[i].style.backgroundColor = "red";
            }
        }
    )}

for(let i = 0; i < verbs.length; i++){
        word1[i].textContent = verbs[i].present.toUpperCase();
}

// shuffle array function
function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  