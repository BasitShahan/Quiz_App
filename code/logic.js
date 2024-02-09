
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { option: "Paris"},
            { option: "Berlin" },
            { option: "Rome" },
            { option: "Madrid" }
        ],
        ans:"Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { option: "William Shakespeare"},
            { option: "Jane Austen" },
            { option: "Charles Dickens" },
            { option: "Mark Twain" }
        ],
        ans:"William Shakespeare"
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { option: "Nucleus" },
            { option: "Mitochondria"},
            { option: "Ribosome" },
            { option: "Endoplasmic Reticulum" }
        ],
        ans:"Mitochondria"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { option: "Leonardo da Vinci"},
            { option: "Pablo Picasso" },
            { option: "Vincent van Gogh" },
            { option: "Claude Monet" }
        ],
      ans:"Leonardo da Vinci"
    },
    {
        question: "What is the tallest mammal?",
        answers: [
            { option: "Elephant" },
            { option: "Giraffe"},
            { option: "Whale" },
            { option: "Horse" }
        ],
        ans:"Giraffe"
        
    }
];

const questionElement = document.querySelector(".question h1");
const answerButtons = document.querySelector(".answer");
const nextButton = document.querySelector(".next");
const div=document.createElement("div");
const  timediv=document.createElement("div");


div.className="time";
div.className="popup";

let index=0;
let  score=0; 
let total = 5;
let  timer=20;

// let timerInterval; 

// Timer ka interval

const load = () => {
    const question = quizQuestions[index];
    questionElement.textContent = question.question;
    answerButtons.innerHTML = ''; // Clear previous answer buttons
    
    question.answers.forEach((val) => {
        const button = document.createElement("button");
        button.className = "button";
        button.innerText = val.option;
        answerButtons.appendChild(button);

        button.addEventListener("click", () => {
            if (button.innerText === question.ans) {
                button.style.backgroundColor = "green";
                score++;
            } else {
                button.style.backgroundColor = "red";
            }
        });
    });
    timediv.classList.add("time")
    timer = 20; // Reset timer


    startTimer(); // Start timer
}


function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
         timediv.textContent=timer
        if (timer <= 1) {
            clearInterval(timerInterval); // Stop timer if it reaches 0
            index++;
            if (index < quizQuestions.length) {
                load();
            } else {
                showScore();
            }
        }
  
    }, 1000);
}


nextButton.addEventListener("click", () => {
    clearInterval(timerInterval); // Stop timer when next button clicked
    index++;
    if (index < quizQuestions.length) {
        load();
    } else {
        showScore();
    }
});

function showScore() {
    div.textContent=`Score  ${score} out of ${total}`;
    answerButtons.appendChild(div);
}

document.body.appendChild(timediv); // Add timer display to the document
load(); // Initial load

 


    






