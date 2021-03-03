'use strict';

let user = prompt("PLEASE give me your name ..")


alert("Hi " + user + " HOW ARE U?!🤔 \n i will tell u WHO AM I \n GIVE ME few minutes of you time 🥰")
alert("MY name is Amarh abusohyon, i am a Biomedical Informatics Engineer, I am 24 years old \n right now i am taking a courses in software development, and i really love programming.\n and my favourite color is blue")

function wrongAnswer(answer, string) {
    while (!(answer === 'Y') && !(answer === 'N') && !(answer === 'YES') && !(answer === 'NO')) {
        alert("PLEASE, answer with y/n , yes/no ")
        answer = prompt(string).toUpperCase()

        //console.log(!(answer === 'Y'))
    }
}



alert("ANSWER the Questions with yes/no ,y/n")

let ask01_Q = "MY NAME AMEERA ? 🤨"
let ask01 = prompt(ask01_Q).toUpperCase()

wrongAnswer(ask01, ask01_Q)
console.log(ask01)
document.getElementById("q1").innerText = ask01
    ///////////////////////////////////////////////////////////////
let ask02_Q = "MY age 42 🧐 "
let ask02 = prompt(ask02_Q).toUpperCase()

wrongAnswer(ask02, ask02_Q)

if (ask02 === 'YES' || ask02 === 'Y') alert("you r blind 🤬")


console.log(ask02)
document.getElementById("q2").innerText = ask02
    ///////////////////////////////////////////////////////////////
let ask03_Q = "i love PROGRAMMING?🙄"
let ask03 = prompt(ask03_Q).toUpperCase()

wrongAnswer(ask03, ask03_Q)
console.log(ask03)
document.getElementById("q3").innerText = ask03
    ///////////////////////////////////////////////////////////
let ask04_Q = "I Studied a biology ?"
let ask04 = prompt(ask04_Q).toUpperCase()
wrongAnswer(ask04, ask04_Q)
console.log(ask04)
document.getElementById("q4").innerText = ask04

///////////////////////////////////////////////////////////////////
let ask05_Q = "MY favourite color is blue? 🤗 "
let ask05 = prompt(ask05_Q).toUpperCase()
wrongAnswer(ask05, ask05_Q)
console.log(ask05)
document.getElementById("q5").innerText = ask05
    //////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////

let ask06_Q = "what is my month birth ? "
let ask06 = prompt("MMMM..  Guessing TIME \n what is my month birth ? use number's \n HINT: you have 4 oppprtunities\n ")
let counter01 = 1


while (counter01 < 5 && ask06 != '1') {

    switch (ask06) {

        case '2':
            alert("TOO HIGH");
            break;
        case '3':
            alert("almost there ");
            break;
        case '4':
            alert("increase your effort");
            break;
        case '5':
            alert("low");
            break;
        case '6':
            alert("TOO low");
            break;
        case '7':
            alert("TOO low");
            break;
        case '8':
            alert("TOO low");
            break;
        case '9':
            alert("TOO low");
            break;
        case '10':
            alert("almost there ,but in oppesite ");
            break;
        case '11':
            alert("almost there");
            break;
        case '12':
            alert("TOO HIGH");
            break;
        default:
            break;
    }

    if (counter01 < 4) {
        alert("u have left  " + (4 - counter01) + "  oppertunities")
        ask06 = prompt("what is my month birth ? ")
    } else
        alert("SORRY!!!")
    counter01 += 1
}
console.log(counter01)

if (ask06 === '1') alert("CORRECT , BRAVIOOO")
document.getElementById("q6").innerText = ask06
    //////////////////////////////////////////////////////////////

let ask07_Q = "my favourite FOOd"
let ask07 = prompt("Guess my favourite FOOd \n Hint :you have 6 oppprtunities ")
let food = ['pasta', 'indomi', 'maftool', 'kabsa']
let counter02 = 1
let userfood = [6]

document.getElementById("answer7").innerText = food
    //console.log(food)
    /*
while (counter02 <= 6 && !food.includes(ask07)) {


    if (counter02 < 6) {
        alert("u have left  " + (6 - counter02) + "  oppertunities")
        ask07 = prompt("Guess my favourite FOOd ")
    } else
        alert("SORRY!!!")
    counter02 += 1
    userfood.push(ask07)
}
if (food.includes(ask07)) alert("CORRECT , BRAVIOOO")
document.getElementById("q7").innerText = userfood
    //console.log(userfood)*/

let correctguess = 0;
while (counter02 <= 6) {
    for (var i = 0; i < food.length; i++) {
        if (food[i] === ask07) {
            alert("CORRECT , BRAVIOOO")
            correctguess++;
            break;

        }
    }
    if (correctguess == 1) break;

    userfood.push(ask07)
    if (counter02 < 6) {
        alert("u have left  " + (6 - counter02) + "  oppertunities")
        ask07 = prompt("Guess my favourite FOOd ")
    } else alert("SORRY!!!")

    counter02++;

}
document.getElementById("q7").innerText = userfood

//////////////////////////////////////////////////


let score = 0

if (ask01 === 'N' || ask01 === 'NO') score++;
if (ask02 === 'N' || ask02 === 'NO') score++;
if (ask03 === 'Y' || ask03 === 'YES') score++;
if (ask04 === 'N' || ask04 === 'NO') score++;
if (ask05 === 'Y' || ask05 === 'YES') score++;
if (ask06 === '1') score++;
if (food.includes(ask07)) score++;

alert("HMMM .. " + user + "  your score in the question's is =  " + score + " out of 6 \nTHE ANSWER'S :\n" + ask01_Q + "NO \n" + ask02_Q + "NO\n" + ask03_Q + "YES \n" + ask04_Q + "NO \n" + ask05_Q + "YES \n" + ask06_Q + " 1 \n" + ask07_Q + " :  " + food.join(','))

alert("ohhh😍 thank you " + user + " for your time")