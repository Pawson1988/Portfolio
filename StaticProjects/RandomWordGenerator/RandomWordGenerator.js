/* to get the elements from the document to use */
var verbList = document.querySelectorAll('.VerbList');
var verbButton = document.querySelector(".Verb-btn");

var NounList = document.querySelectorAll('.NounList')
var NounButton = document.querySelector(".Noun-btn");

var AdjectiveList = document.querySelectorAll(".AdjectiveList");
var AdjectiveButton = document.querySelector(".Adjective-btn");

var AdverbList = document.querySelectorAll('.AdverbList');
var AdverbButton = document.querySelector('.Adverb-btn');

var LinkerList = document.querySelectorAll('.LinkerList');
var LinkerButton = document.querySelector('.Linker-btn');

var RandomWordList = document.querySelectorAll('.RandomWordList');
var RandomWordButton = document.querySelector('.RandomWord-btn');

var ResetButton = document.querySelector('.Reset-btn');

/* the words arrays to be used */
var verbs = ["like", "run", "walk", "eat", "Drink", "Take", "Sleep", "Play", "Go", "Visit", "See", "Forget"];
var nouns = ["House", "School", "Orange Juice", "Bed", "Football", "School Bag", "Book", "computer", "shop", "street", "light", "space", "fish", "animal", "country", "city", "girl", 
"boy", "man", "woman", "school", "boyfriend", "girlfriend", "mum", "dad", "grandma", "cousin", "grandpa", "hair", "clothes", "shoes", "door", "car", "bike", "science", "school subject"];

var adjectives = ["Good", "Bad", "Ugly", "Nice", "Sensitive", "Large", "Fat", "Slim", "Cuddly", "Slimy", "Skinny", "Beautiful", "dry", "fast", "cuddly", "handsome", "pretty"];
var adverbs = ["fast", "slowly", "Always", "Never", "Sometimes", "Often", "later", "soon", "obviously", "fast", "late", "hard", "well", "daily", "already", "nearby", "close", "far away"];
var linkers = ["but", "so", "However", "though", "although", "even though", "thus", "for example", "too", "besides", "apart from", "in addition to"];
var randomWords = ["House", "Street", "Phone", "beautiful", "Striped", "Spotted", "Animal"];

/* to allow button to be clicked and executed on click with the following function */
verbButton.addEventListener("click", verbsFunction);
NounButton.addEventListener("click", NounsFunction);
AdjectiveButton.addEventListener("click", AdjectivesFunction);
AdverbButton.addEventListener("click", AdverbsFunction);
LinkerButton.addEventListener("click", LinkersFunction);
RandomWordButton.addEventListener("click", RandomWordsFunction);
ResetButton.addEventListener('click', ResetFunction);

function verbsFunction(){
    
        let shuffledVerbs = shuffle(verbs);
        for(i = 0; i < verbList.length; i++) {
                verbList[i].textContent = shuffledVerbs[i].toUpperCase();
        };
}

function NounsFunction(){

        let shuffledNouns = shuffle(nouns);
        for(i = 0; i < NounList.length; i++) {
                NounList[i].textContent = shuffledNouns[i].toUpperCase();
        };
}

function AdjectivesFunction(){

        let shuffledAdjectives = shuffle(adjectives);
        for(i = 0; i < AdjectiveList.length; i++) {
                AdjectiveList[i].textContent = shuffledAdjectives[i].toUpperCase();
        };
       
}

function AdverbsFunction(){

        let shuffledAdverbs = shuffle(adverbs);
        for(i = 0; i < AdverbList.length; i++) {
                AdverbList[i].textContent = shuffledAdverbs[i].toUpperCase();
        };
}

function LinkersFunction(){

        let shuffledLinkers = shuffle(linkers);
        for(i = 0; i < LinkerList.length; i++) {
                LinkerList[i].textContent = shuffledLinkers[i].toUpperCase();
        };
}

function RandomWordsFunction(){

        let shuffledRandomWords = shuffle(randomWords);
        for(i = 0; i < RandomWordList.length; i++) {
                RandomWordList[i].textContent = shuffledRandomWords[i].toUpperCase();
        };
}

function ResetFunction(){
        for (i = 1; i < 5; i++) {

                NounList[0].innerHTML = "<p>Your random nouns will appear here</p>";
                NounList[i].innerHTML = "";

                verbList[0].innerHTML = "<p>Your random verbs will appear here</p>";
                verbList[i].innerHTML = "";

                AdjectiveList[0].innerHTML = "<p>Your random adjectives will appear here</p>";
                AdjectiveList[i].innerHTML = "";
                
                AdverbList[0].innerHTML = "<p>Your random adverbs will appear here</p>";
                AdverbList[i].innerHTML = "";

                LinkerList[0].innerHTML = "<p>Your random linkers will appear here</p>";
                LinkerList[i].innerHTML = "";

                RandomWordList[0].innerHTML = "<p>Your random words will appear here</p>";
                RandomWordList[i].innerHTML = "";
        }
}


function shuffle(arra1) {
        let ctr = arra1.length;
        let temp;
        let index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
