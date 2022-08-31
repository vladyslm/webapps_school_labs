// import './styles.css';

const NUMBER_OF_EL = 5;
const MIN = 0;
const MAX = 10;

const CORRECT_MSG = "Correct!";
const FAILED_MSG = "Wrong!";

function generateRandomNumbersInRange(num, from, to) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * (to - from)) + from);
    }
    return arr;
}

const generatedNumbers = generateRandomNumbersInRange(NUMBER_OF_EL, MIN, MAX);

const mainHtml = document.getElementById("main");
const submitBtn = document.querySelector("button");
const guessUl = document.getElementById("guess");
const numbers = document.getElementById("numbers");

numbers.style.display = "flex";
numbers.style.flexDirection = "column"
numbers.style.width = "50px"


function displayNumbers() {
    generatedNumbers.forEach((el) => {
        const li = document.createElement("li");
        li.textContent = el;
        guessUl.appendChild(li);

        const fragment = document.createDocumentFragment();
        const inputLi = fragment.appendChild(
            document.createElement("input")
        )
        numbers.appendChild(inputLi);
    })

}


function renderApp() {
    displayNumbers(generatedNumbers);
}


function compareAnswers(users, correct) {
    let isCorrect = false;
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== users[i]) {
            return isCorrect;
        }
    }
    return !isCorrect;
}

function handleAnswers() {
    const correctAnswers = generatedNumbers.sort().map((el) => `${el}`);
    const numberEl = Array.from(numbers.children);
    const userAnswers = [];
    numberEl.forEach((el) => {
        userAnswers.push(el.value);
    })


    const isCorrect = compareAnswers(userAnswers, correctAnswers);
    const msg = isCorrect ? CORRECT_MSG : FAILED_MSG;

    const msgEl = document.createElement("p");
    msgEl.textContent = msg;
    mainHtml.appendChild(msgEl);
}

submitBtn.addEventListener("click", handleAnswers);

renderApp();
