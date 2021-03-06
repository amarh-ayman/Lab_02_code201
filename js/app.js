'use strict';
let scoreofQuestions = 0;

function wrongAnswer_yesNOquestions(userAnswer, Q_sting, trueAnswer1, trueAnswer2) {
    let score = 0;
    while (!(userAnswer === 'Y') && !(userAnswer === 'N') && !(userAnswer === 'YES') && !(userAnswer === 'NO')) {
        alert("PLEASE, answer with y/n , yes/no ")
        userAnswer = prompt(Q_sting).toUpperCase();
    }
    if (userAnswer === trueAnswer1 || userAnswer === trueAnswer2) {
        score++;
        return score;
    } else return score;
}

function trialQuestions(trial, Question, userAnswer, trueanswer, numberofQuestion) {
    let score = 0;
    while (trial) {
        /////////////////////////////////for the question 6 
        if (numberofQuestion === 6)
            if (parseInt(userAnswer) === parseInt(trueanswer)) {
                alert("CORRECT , BRAVIOOO")
                return ++score;
            } else {
                if ((parseInt(userAnswer) - parseInt(trueanswer)) <= 3 || (12 - (parseInt(userAnswer) - parseInt(trueanswer))) <= 3)
                    alert("Your Guess is TOO HIGH, Almost there!!");
                else alert("Your Guess is TOO LOW ,increase your effort !!");
            }
            //////////////////////for the question 7
        if (numberofQuestion === 7)
            for (var i = 0; i < trueanswer.length; i++) {
                if (trueanswer[i] === userAnswer) {
                    alert("CORRECT , BRAVIOOO")
                    return ++score;
                }
            }
            /////////////////////////////    

        if (numberofQuestion === 7) alert("HINT :\n I have 4 favourite food's some of them SPICY other NOODLES \n GUESS ONE ")

        if (trial === 1 && score === 0) {
            alert("SORRY")
            return score;

        } else {
            alert("YOU HAVE " + --trial + " TRIAL's Left")
            userAnswer = prompt(Question).toLowerCase()
        }

    }
}

////////////////////////////////////////////////////
let user = prompt("PLEASE give me your name ..")
while (!user) user = prompt("PLEASE give me your name ..")
alert("Hi " + user + " HOW ARE U?!🤔 \n i will tell u WHO AM I \n GIVE ME few minutes of you time 🥰")
alert("MY name is Amarh abusohyon, i am a Biomedical Informatics Engineer, I am 24 years old \n right now i am taking a courses in software development, and i really love programming.\n and my favourite color is blue")
    /////////////////////////////////////////////////////

let ask01_Q = "MY NAME AMEERA ? 🤨"
let ask01 = prompt(ask01_Q).toUpperCase()
scoreofQuestions += wrongAnswer_yesNOquestions(ask01, ask01_Q, 'NO', 'N');
///////////////////////////////////////////////////////////////
let ask02_Q = "MY age 42 🧐 "
let ask02 = prompt(ask02_Q).toUpperCase()
scoreofQuestions += wrongAnswer_yesNOquestions(ask02, ask02_Q, 'NO', 'N')
if (ask02 === 'YES' || ask02 === 'Y') alert("you r blind 🤬");
///////////////////////////////////////////////////////////////
let ask03_Q = "i love PROGRAMMING?🙄"
let ask03 = prompt(ask03_Q).toUpperCase()
scoreofQuestions += wrongAnswer_yesNOquestions(ask03, ask03_Q, 'YES', 'Y');
///////////////////////////////////////////////////////////
let ask04_Q = "I Studied a biology ?"
let ask04 = prompt(ask04_Q).toUpperCase()
scoreofQuestions += wrongAnswer_yesNOquestions(ask04, ask04_Q, 'NO', 'N');
///////////////////////////////////////////////////////////////////
let ask05_Q = "MY favourite color is blue? 🤗 "
let ask05 = prompt(ask05_Q).toUpperCase()
scoreofQuestions += wrongAnswer_yesNOquestions(ask05, ask05_Q, 'YES', 'Y');
////////////////////////////////////////////////////////////////
let ask06_Q = "what is my month birth ? "
let ask06 = parseInt(prompt("MMMM..  Guessing TIME \n what is my month birth ? use number's \n HINT: you have 4 oppprtunities\n "));
scoreofQuestions += trialQuestions(4, ask06_Q, ask06, '1', 6);
//////////////////////////////////////////////////////////////
let ask07_Q = "What is My favourite FOOd"
let ask07 = prompt("Guess my favourite FOOd \n Hint :you have 6 oppprtunities ").toLowerCase();
let food = ['pasta', 'indomi', 'maftool', 'kabsa']
scoreofQuestions += trialQuestions(6, ask07_Q, ask07, food, 7);

alert("HMMM .. " + user + "  Your Score in the Question's is =  " + scoreofQuestions + " out of 6 \nTHE ANSWER'S :\n" + ask01_Q + "NO \n" + ask02_Q + "NO\n" + ask03_Q + "YES \n" + ask04_Q + "NO \n" + ask05_Q + "YES \n" + ask06_Q + " 1 \n" + ask07_Q + " :  " + food)

alert("Ohhh😍 thank you " + user + " FOR your TIME")