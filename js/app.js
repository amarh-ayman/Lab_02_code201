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

alert(ask01_Q + "NO \n" + ask02_Q + "NO\n" + ask03_Q + "YES \n" + ask04_Q + "NO \n" + ask05_Q + "YES")

alert("ohhh😍 thank you " + user + " for your time")