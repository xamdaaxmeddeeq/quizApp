const questions = [
    {
        question: "waa maxay micnahah Erayga gaagax",
        answers:[
           { text: "Marka reeerku u guuro ban cido ah" , correct: false },
           { text: "Marka neefka xoolahaa caanuhu ka gudhaan" , correct: false },
           { text: "Marka neefka la lisaayo caanuhu kala yacan" , correct: true },
           { text: "Marka neefka wax laga liso la hayn" , correct: false },
           { text: "Marka reeerku u guuro ban cido ah" , correct: false },
        ]
    },
    {
        question: "waa maxay micnaha erayga Heerin",
        answers:[
           { text: "marka Inantu u safarto deegan kale si loo guursado" , correct: true },
           { text: "marka gabadhu guurka ka raago ee " , correct: false },
           { text: "marka neefka la lisaayo caanuhu kala yacan" , correct: false },
           { text: "marka neefka wax laga liso la hayn" , correct: false },
           { text: "marka reeerku u guuro ban cido ah" , correct: false },
        ]
    },
]

const questionElement = document.getElementById("question")
const answerBottons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

// console.log(answerBotton);
// console.log( questionElement);
// console.log( nextButton);

let currectQuestionInex = 0;
let score = 0;

function startQuiz(){
   currectQuestionInex = 0;
   score = 0;
   nextButton.innerHTML = "Next";
   shawQuestion();
}
// console.log(nextButton);

function shawQuestion(){
    resetState();
    let currectQuestion = questions [currectQuestionInex]
    let questionNo = currectQuestionInex + 1 ;
    questionElement.innerHTML = questionNo + ". "  + currectQuestion.
    question;
    
    currectQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBottons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState() {
    nextButton.style.display = "none"
    while (answerBottons.firstChild){
        answerBottons.removeChild(answerBottons.firstChild)
    } 
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBottons.children).forEach(button =>{
        if(button.dataset.correct === true){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
};

startQuiz();

function name(params) {
    
}


