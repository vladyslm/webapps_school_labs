// Oppgave 1
const removeBtn = document.getElementById("remove-btn");

function taskOneFunc() {
    document.getElementById("remove").remove();
}

removeBtn.addEventListener("click", taskOneFunc);

// Oppgave 2
const changeTo = `<a href="https://ukraine.ua/?before_the_war">Ukraine before the war</a>
<br/>
<a href="https://war.ukraine.ua/">Please, don't look away from the war</a>
<br/>
<p>More <a href="https://u24.gov.ua/">here</a></p>
<p>Thank you for your attention</p>`;
const changeBtn = document.getElementById("change-btn");

function taskTwoFunc() {
    document.getElementById("change").innerHTML = changeTo;
}

changeBtn.addEventListener("click", taskTwoFunc);

// Oppgave 3
const inputTaskThree = document.getElementById("input");
const inputTextTaskThree = document.getElementById("input-text");

function handleInputTaskThree(event) {
    inputTextTaskThree.innerText = event.target.value;
}

inputTaskThree.addEventListener("input", handleInputTaskThree);

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const writeListBtn = document.getElementById("write-list");
const list = document.getElementById("ul");

function writeList() {
    myList.forEach((el) => {
        const li = document.createDocumentFragment()
            .appendChild(
                document.createElement("li")
            );
        li.textContent = el;
        list.appendChild(li);
    })
}

writeListBtn.addEventListener("click", writeList);

// Oppgave 5
const placeholder = document.getElementById("placeholder");
const selectList = document.getElementById("select");
const createBtn = document.getElementById("create");
const inputText = document.getElementById("text");

function createElementHandler() {
    const selectedVal = selectList.options[selectList.selectedIndex].value;
    const htmlEl = document.createElement(selectedVal);
    htmlEl.textContent = inputText.value !== "" ? inputText.value : "[empty]";
    placeholder.appendChild(htmlEl);
}

createBtn.addEventListener("click", createElementHandler);

// Oppgave 6
const removeLiBtn = document.getElementById("remove-li");
const ulEl = document.getElementById("list");

function removeLi() {
    const children = ulEl.children;
    if (children.length > 0) {
        children.item(children.length - 1).remove();
    }
}

removeLiBtn.addEventListener("click", removeLi)

// Oppgave 7
const orderBtn = document.getElementById("order");
const nameInput = document.getElementById("name");
const LIMIT = 4;

function orderHandler(event) {
    orderBtn.disabled = event.target.value.length > LIMIT;
}

nameInput.addEventListener("input", orderHandler)

// Oppgave 8
const colorBtn = document.getElementById("color");

function handleColor() {
    const ul = document.getElementsByClassName("children");
    const liElements = ul.item(0).children;

    const liElementsArr = Array.from(liElements);

    liElementsArr.forEach((el, index) => {
        if ((index + 1) % 2 === 0){
            el.style.border="2px solid pink";
            return;
        }
        el.style.border="2px solid green";
    })
}

colorBtn.addEventListener("click", handleColor);

