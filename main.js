// DOM Get
let inOne = document.getElementById("one");
let inTwo = document.getElementById("two");
let inThree = document.getElementById("three");
let btn = document.querySelector(".btn");
let count = document.getElementById("spanOne");
let chance = document.getElementById("spanTwo");
let container = document.querySelector(".container")
let parent = document.querySelector(".parent")

// DOM Create
let mainJoke = document.createElement("div");
let textJoke = document.createElement("p");
let mainJokeBtn = document.createElement("button");
let valueJokeLoose = document.createTextNode("...🐧شكلك مش نافع");
let valueBtn = document.createTextNode("Try Again");
let endScore = document.createElement("span");
let finalScore = document.createElement("span")
let finaScoreText = document.createTextNode("Final Score :")

// Random Value When Onlaod
let passIndexOne = Math.floor(Math.random() * 10);
let passIndexTwo = Math.floor(Math.random() * 10);
let passIndexThree = Math.floor(Math.random() * 10);

// Initial Value
count.textContent = 0;
chance.textContent = 10;

// Increment && Decrement
let countNum = +count.innerHTML;
let chanceNum = +chance.innerHTML;

// input[1] focus on the page load
window.onload = function () {
    inOne.focus();
}

inOne.oninput = function () {
    if (inOne.value.length === 1) {
        inTwo.focus();

        inTwo.oninput = function () {
            if (inTwo.value.length === 1) {
                inThree.focus();
            }
        }
    }
}

inThree.oninput = function () {
    if (inThree.value.length === 0) {
        inTwo.focus();

        inTwo.oninput = function () {
            if (inTwo.value.length === 0) {
                inOne.focus();
            }
        }
    }
}


btn.onclick = function (e) {
    let newOne = +inOne.value;
    let newTwo = +inTwo.value;
    let newThree = +inThree.value;

    if (inOne.value === "" || inTwo.value === "" || inThree.value === "") {
        e.preventDefault()
    } else if (isNaN(newOne) === true || isNaN(newTwo) === true || isNaN(newThree) === true) {
        e.preventDefault()
    } else {
        if (parseInt(inOne.value) === passIndexOne && parseInt(inTwo.value) === passIndexTwo && parseInt(inThree.value) === passIndexThree) {
            for (i = 0; i < 3; i++) {
                document.getElementsByTagName("input")[i].classList.add("colorRight");
            }
            countNum += 1;
            count.textContent = countNum;
            passIndexOne = Math.floor(Math.random() * 10);
            passIndexTwo = Math.floor(Math.random() * 10);
            passIndexThree = Math.floor(Math.random() * 10);
        } else {
            for (i = 0; i < 3; i++) {
                document.getElementsByTagName("input")[i].classList.add("colorWrong");
            }
            chanceNum -= 1;
            chance.textContent = chanceNum;
            if (chanceNum === 0) {

            }
        }

        setTimeout(function () {
            for (i = 0; i < 3; i++) {
                document.getElementsByTagName("input")[i].value = "";
                document.getElementsByTagName("input")[i].classList.remove("colorRight", "colorWrong")
            }
            inOne.focus();
        }, 1000)

        if (chanceNum === 0) {
            endScore.innerHTML = countNum;
            parent.classList.add("parentHide")
            textJoke.appendChild(valueJokeLoose)
            textJoke.classList.add("mainText")
            mainJoke.prepend(textJoke);
            mainJokeBtn.appendChild(valueBtn);
            mainJokeBtn.classList.add("mainBtn", "mainBtn:hover")
            finalScore.appendChild(finaScoreText)
            finalScore.classList.add("scoreAddvertise")
            mainJoke.append(finalScore)
            endScore.classList.add("scoreValue")
            mainJoke.append(endScore)
            mainJoke.append(mainJokeBtn);
            mainJoke.classList.add("mainEnd");
            document.body.appendChild(mainJoke);
        }
    }
}

mainJokeBtn.addEventListener("click", function () {
    mainJoke.remove();
    parent.classList.remove("parentHide")
    chanceNum = 10;
    chance.textContent = chanceNum;
})
