/*
 * js file for quiz logic
 * symptoms array has active/inactive options for each test type
*/

// variable declarations
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let seasons = ["Spring", "Summer", "Winter", "Fall"];

// building questions
// response types
let responseType = { // an object with distinct types
    yesNo: [{text: "Yes", score: 1}, {text: "No", score: 0}],
    weekday: weekdays,
    frequency: [
        {text: "Not at all", score: 0},
        {text: "A little bit", score: 1},
        {text: "A couple times a month", score: 2},
        {text: "A couple times a week", score: 3},
        {text: "Every Day", score: 4}],
    userInput: [],
    season: seasons
}
/*  Questions in this format
    {question: "",
    response: responseType.frequency},
*/
let depressionQuestions = [ // an array of objects depressionQuestions[0].question, depressionQuestions[1].response PHQ-9
    {question: "Are you having thoughts that you would be better off dead, or of hurting yourself?",
        response: responseType.yesNo},
    {question: "Are you having trouble concentrating on things such as reading the newspaper or watching TV?",
        response: responseType.yesNo},
    {question: "Are you feeling bad about yourself (feel like a failure or let your family down)",
        response: responseType.yesNo},
    {question: "Do you have a poor appetite or are you overeating?",
        response: responseType.yesNo},
    {question: "Are you feeling tired or having little energy?",
        response: responseType.yesNo},
    {question: "Are you having trouble falling or staying asleep, or sleeping too much?",
        response: responseType.yesNo},
    {question: "Are you feeling down, depressed, or hopeless?",
        response: responseType.yesNo},
    {question: "Do you have little interest or pleasure in doing things?",
        response: responseType.yesNo},
] // 8 questions

let ptsdQuestions = [
    {question: "Are you having nightmares about a distressing event(s) or thought about the event(s) when you did not want to?",
        response: responseType.yesNo},
    {question: "Are you trying hard not to think about a distressing event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
        response: responseType.yesNo},
    {question: "Do you feel constantly on guard, watchful, or easily startled?",
        response: responseType.yesNo},
    {question: "Do you feel numb or detached from people, activities, or your surroundings?",
        response: responseType.yesNo},
    {question: "Do you feel guilty or unable to stop blaming yourself or others for a distressing events(s) or any problems the event(s) may have caused?",
        response: responseType.yesNo},
] // 5 questions

let schQuestions = [ // an array of objects
    // thought disorder
    {question: "Are you experiencing any brain fog?", response: responseType.yesNo},
    {question: "Are you struggling to remember to eat or drink water?", response: responseType.yesNo},
    {question: "Are your thoughts jumbled or are you unable to think clearly?", response: responseType.yesNo},
    {question: "Are you having trouble seeing things or are you seeing things that aren't there?", response: responseType.yesNo},
    {question: "Are you having trouble hearing things or are you hearing things that aren't there?", response: responseType.yesNo},
    {question: "Do you feel extremely tired?", response: responseType.yesNo},
    // mood disorder
    {question: "Are the happy thoughts speeding up your thought process?", response: responseType.yesNo},
    {question: "Are the sad thoughts slowing down your thought process?", response: responseType.yesNo},
    {question: "Are you having any grandiose thoughts?", response: responseType.yesNo},
];

let impairmentQuestions = [ // an array of objects -
    {question: "What is the Weekday?", response: responseType.weekday},
    {question: "Type in the first three things you see", response: responseType.userInput},
    {question: "What is the year?", response: responseType.userInput},
    {question: "What is the season?", response: responseType.season},
    {question: "Spell 'WORLD' backwards", response: responseType.userInput},
    {question: "What were the three things you typed in before", response: responseType.userInput},

]; // these questions have right or wrong answers - ICEBOX

let addictionQuestions = [
    {question: "Are you using substances to numb any physical or emotional pain?", response: responseType.yesNo},
    {question: "Do you feel like you should cut down on your substance use?", response: responseType.yesNo},
    {question: "Are you feeling guilty about using substances?", response: responseType.yesNo},
    {question: "Is anyone annoying you by criticizing your substance use?", response: responseType.yesNo},
    {question: "Do you feel that your substance use significantly decreases your ability to function?", response: responseType.yesNo},
    {question: "Are you using substances as soon as you wake up in the morning?", response: responseType.yesNo}
] // 6 questions

let anxietyQuestions = [  // an array of objects GAD-7
    {question: "Are you feeling nervous, anxious, or on edge?",
        response: responseType.yesNo},
    {question: "Are you feeling unable to stop or control worrying?",
        response: responseType.yesNo},
    {question: "Are you worrying too much about different things?",
        response: responseType.yesNo},
    {question: "Are you having trouble relaxing?",
        response: responseType.yesNo},
    {question: "Are you so restless that it is hard to sit still?",
        response: responseType.yesNo},
    {question: "Are you feeling easily annoyed or irritable?",
        response: responseType.yesNo},
    {question: "Are you feeling as if something awful might happen?",
        response: responseType.yesNo},
]; // 7 questions

let questionBank = [
    depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions
]

function radioQuestion(questionObj) { // takes {question, response}
    let contentDivEl = document.querySelector("#content");
    let questionTextDivEl = document.createElement("div")
    // let questionSpanEl = document.createElement("span") todo span element
    // questionSpanEl.className = "radio-wrapper";
    let questionTextEl = document.createElement("h3")
    questionTextEl.textContent = questionObj.question;
    questionTextDivEl.appendChild(questionTextEl)
    contentDivEl.appendChild(questionTextDivEl)

    let questionResponseDivEl = document.createElement("div")
    for (let i = 0; i < questionObj.response.length; i++) {
        let questionResponseInputEl = document.createElement("input")
        questionResponseInputEl.setAttribute("type", "radio")
        questionResponseInputEl.setAttribute("name", questionObj.question)
        questionResponseInputEl.setAttribute("id", questionObj.response[i].text)
        // questionResponseInputEl.setAttribute()

        let questionResponseLabelEl = document.createElement("label")
        questionResponseLabelEl.setAttribute("for", questionObj.question)
        questionResponseLabelEl.textContent = questionObj.response[i].text

        questionResponseDivEl.appendChild(questionResponseInputEl)
        questionResponseDivEl.appendChild(questionResponseLabelEl)
    }
    contentDivEl.appendChild(questionResponseDivEl)


} // displays single radio question and answers

function textAreaQuestion(questionObj) {
    let contentDivEl = document.querySelector("#content");
    let questionTextDivEl = document.createElement("div")
    let questionTextEl = document.createElement("h3")
    questionTextEl.textContent = questionObj.question;
    questionTextDivEl.appendChild(questionTextEl)
    contentDivEl.appendChild(questionTextDivEl)

    let questionResponseDivEl = document.createElement("div")
    let questionResponseTextAreaEl = document.createElement("textarea")
    questionResponseDivEl.appendChild(questionResponseTextAreaEl)
    contentDivEl.appendChild(questionResponseDivEl)
} // displays single textarea question and answers

function questionParser(questionObj) {
    if(questionObj.response === responseType.userInput) {
        textAreaQuestion(questionObj)
    } else {
        radioQuestion(questionObj)
    }

} // takes a question object and parses its response type

function displayAll() {
    /*for (let i = 0; i < impairmentQuestions.length; i++) {
        questionParser(impairmentQuestions[i])
    }*/
    for (let i = 0; i < schQuestions.length; i++) {
        questionParser(schQuestions[i])
    }
    for (let i = 0; i < depressionQuestions.length; i++) {
        questionParser(depressionQuestions[i])
    }
    for (let i = 0; i < anxietyQuestions.length; i++) {
        questionParser(anxietyQuestions[i])
    }
    for (let i = 0; i < ptsdQuestions.length; i++) {
        questionParser(ptsdQuestions[i])
    }
    for (let i = 0; i < addictionQuestions.length; i++) {
        questionParser(addictionQuestions[i])
    }


} // TEST FUNCTION displays all questions TODO remove

function questionDisplay(questionObj) {
    let currentQuestion = document.querySelector("#current-question")
    questionParser(questionObj)
}

questionOptions = [];     // array of question objects
symptoms = [] // symptoms[i] returns active symptoms for each quiz type


function depressionQuiz() {
    let score = 0;
    let counter = 0;
    let checker = false;
    for (let i = 0; i < userQuestions.length; i++) {
        if (userQuestions[i] === "depression") {
            checker = true;
        }
    }
    if (checker) {
        questionDisplay(depressionQuestions[counter])
    } else {
        anxietyQuiz()
    }

}

function anxietyQuiz() {
    let score = 0;
    let counter = 0;
    let checker = false;
    for (let i = 0; i < userQuestions.length; i++) {
        if (userQuestions[i] === "anxiety") {
            checker = true;
        }
    }
    if (checker) {
        questionDisplay(anxietyQuestions[counter])
        let a = document.querySelector("#answerYes")
        let b = document.querySelector("#answerNo")
        a.addEventListener("click", function () {
            counter++
            score++
            console.log(score)
            console.log(counter)
            if (counter < anxietyQuestions.length) {
                questionDisplay(anxietyQuestions[counter])
                console.log(score)
                console.log(counter)
            } else {
                if (score > 3) {
                    symptoms.push({"anxiety": true})
                    console.log(symptoms)
                    ptsdQuiz()

                } else {
                    symptoms.push({"anxiety": false})
                    console.log(symptoms)
                    ptsdQuiz()
                }
            }
        })
        b.addEventListener("click", function () {
            counter++
            if (counter < anxietyQuestions.length) {
                questionDisplay(anxietyQuestions[counter])
                console.log(score)
                console.log(counter)
            } else {
                if (score > 3) {
                    symptoms.push({"anxiety": true})
                    console.log(symptoms)
                    ptsdQuiz()
                } else {
                    symptoms.push({"anxiety": false})
                    console.log(symptoms)
                    ptsdQuiz()
                }
            }
        })
    } else {
        ptsdQuiz()
    }

}

function ptsdQuiz() {
    let score = 0;
    let counter = 0;
    let checker = false;
    for (let i = 0; i < userQuestions.length; i++) {
        if (userQuestions[i] === "ptsd") {
            checker = true;
        }
    }
    if (checker) {
        questionDisplay(ptsdQuestions[counter])
        let a = document.querySelector("#answerYes")
        let b = document.querySelector("#answerNo")
        a.addEventListener("click", function () {
            counter++
            score++
            console.log(score)
            console.log(counter)
            if (counter < ptsdQuestions.length) {
                questionDisplay(ptsdQuestions[counter])
                console.log(score)
                console.log(counter)
            } else {
                if (score > 3) {
                    symptoms.push({"ptsd": true})
                    console.log(symptoms)
                    schQuiz()
                } else {
                    symptoms.push({"ptsd": false})
                    console.log(symptoms)
                    schQuiz()
                }
            }
            return score;
        })
        b.addEventListener("click", function () {
            counter++
            if (counter < ptsdQuestions.length) {
                questionDisplay(ptsdQuestions[counter])
                console.log(score)
                console.log(counter)
            } else {
                if (score > 3) {
                    symptoms.push({"ptsd": true})
                    console.log(symptoms)
                    schQuiz()
                } else {
                    symptoms.push({"ptsd": false})
                    console.log(symptoms)
                    schQuiz()
                }
            }
            return score;
        })
    } else {
        schQuiz()
    }

}

function schQuiz() {
    let score = 0;
    let counter = 0;
    let checker = false;
    for (let i = 0; i < userQuestions.length; i++) {
        if (userQuestions[i] === "sch") {
            checker = true;
        }
    }
    if (checker) {
        questionDisplay(schQuestions[counter])
        let a = document.querySelector("#answerYes")
        let b = document.querySelector("#answerNo")
        a.addEventListener("click", function () {
            counter++
            score++
            console.log(score)
            console.log(counter)
            if (counter < schQuestions.length) {
                questionDisplay(schQuestions[counter])
                console.log(score)
                console.log(counter)
            } else {
                if (score > 3) {
                    symptoms.push({"sch": true})
                    console.log(symptoms)
                    impairmentQuiz()
                } else {
                    symptoms.push({"sch": false})
                    console.log(symptoms)
                    impairmentQuiz()
                }
            }
            return score;
        })
        b.addEventListener("click", function () {
            counter++
            if (counter < schQuestions.length) {
                questionDisplay(schQuestions[counter])
                console.log(score)
                console.log(counter)
            } else {
                if (score > 3) {
                    symptoms.push({"sch": true})
                    console.log(symptoms)
                    impairmentQuiz()
                } else {
                    symptoms.push({"sch": false})
                    console.log(symptoms)
                    impairmentQuiz()
                }
            }
            return score;
        })
    } else {
            impairmentQuiz()
    }

}

function impairmentQuiz() {
    let score = 0;
    let counter = 0;
    let checker = false;
    for (let i = 0; i < userQuestions.length; i++) {
        if (userQuestions[i] === "impairment") {
            checker = true;
        }
    }
    if (checker) {
            questionDisplay(impairmentQuestions[counter])
            let a = document.querySelector("#answerYes")
            let b = document.querySelector("#answerNo")
            a.addEventListener("click", function () {
                counter++
                score++
                console.log(score)
                console.log(counter)
                if (counter < impairmentQuestions.length) {
                    questionDisplay(impairmentQuestions[counter])
                    console.log(score)
                    console.log(counter)
                } else {
                    if (score > 3) {
                        symptoms.push({"impairment": true})
                        console.log(symptoms)
                        addictionQuiz()
                    } else {
                        symptoms.push({"impairment": false})
                        console.log(symptoms)
                        addictionQuiz()
                    }
                }
                return score;
            })
            b.addEventListener("click", function () {
                counter++
                if (counter < impairmentQuestions.length) {
                    questionDisplay(impairmentQuestions[counter])
                    console.log(score)
                    console.log(counter)
                } else {
                    if (score > 3) {
                        symptoms.push({"impairment": true})
                        console.log(symptoms)
                        addictionQuiz()
                    } else {
                        symptoms.push({"impairment": false})
                        console.log(symptoms)
                        addictionQuiz()
                    }
                }
                return score;
            })
    } else {
            addictionQuiz()
        }

}

function addictionQuiz() {
    let score = 0;
    let counter = 0;
    let checker = false;
    for (let i = 0; i < userQuestions.length; i++) {
        if (userQuestions[i] === "anxiety") {
            checker = true;
        }
    }
    if (checker) {
            questionDisplay(addictionQuestions[counter])
            let a = document.querySelector("#answerYes")
            let b = document.querySelector("#answerNo")
            a.addEventListener("click", function () {
                counter++
                score++
                console.log(score)
                console.log(counter)
                if (counter < addictionQuestions.length) {
                    questionDisplay(addictionQuestions[counter])
                    console.log(score)
                    console.log(counter)
                } else {
                    if (score > 3) {
                        symptoms.push({"addiction": true})
                        console.log(symptoms)
                    } else {
                        symptoms.push({"addiction": false})
                        console.log(symptoms)
                    }
                }
                return score;
            })
            b.addEventListener("click", function () {
                counter++
                if (counter < addictionQuestions.length) {
                    questionDisplay(addictionQuestions[counter])
                    console.log(score)
                    console.log(counter)
                } else {
                    if (score > 3) {
                        symptoms.push({"addiction": true})
                        console.log(symptoms)
                    } else {
                        symptoms.push({"addiction": false})
                        console.log(symptoms)
                    }
                }
                return score;
            })
    } else {

    }

}

function questionChooserButtonHandler (userQuestions) {
    console.log(userQuestions)

    depressionQuiz()




    /*
        if (userQuestions[i] === "ptsd") {
            quizzes.push(ptsdQuestions)
        }
        if (userQuestions[i] === "sch") {
            quizzes.push(schQuestions)
        }
        if (userQuestions[i] === "impairment") {
            quizzes.push(impairmentQuestions)
        }
        if (userQuestions[i] === "addiction") {
            quizzes.push(addictionQuestions)
        }*/

        // loop through each quiz, getting score





    /*
    for (let i = 0; i < userQuestions.length; i++) { // loop through selected questions
        if (userQuestions[i] === "anxiety") {
            // run depression quiz return symptom[i]
            anxietyQuiz()
        }
    }*/

    // run depression quiz and get scores

/*
        // need to compare names with objects and create quiz questions
    // compare userQuestions[] with impairment
    for (let i = 0; i < userQuestions.length; i++) { // loop through selected questions
        for (let j = 0; j < impairmentQuestions.length; j++) {
            if (userQuestions[i] === impairmentQuestions[j].question) {
                questionOptions.push(impairmentQuestions[j])
            }
        }
    }
    for (let i = 0; i < userQuestions.length; i++) { // loop through selected questions
        for (let j = 0; j < schQuestions.length; j++) {
            if (userQuestions[i] === schQuestions[j].question) {
                questionOptions.push(schQuestions[j])
            }
        }
    }
    // console.log(questionOptions)

    // loop through selected questions and display them
    for (let i = 0; i < questionOptions.length; i++) {
        // console.log(questionOptions[i])
        questionParser(questionOptions[i])
    }

    // create button for end of quiz
    let submitButtonEl = document.createElement("button")
    submitButtonEl.id = "quizSubmitButton"
    submitButtonEl.textContent = "Submit"
    contentDivEl.appendChild(submitButtonEl)
    submitButtonEl.addEventListener("click", function() {
        // grade quiz todo
        // direct to resources based on grade
        quizSubmitButtonHandler();

    })*/
}


function quizGraderHandler(symptoms) {

}

function quizSubmitButtonHandler() {
    // grade quiz
    // capture quiz responses
    // grade based on illness
    // link to content generator function
    let quizResults = [];
    let quizSubmitButtonEl = document.createElement("button")
    quizSubmitButtonEl.textContent = "submit";
    let contentDivEl = document.querySelector("#content");
    contentDivEl.appendChild(quizSubmitButtonEl)

    quizSubmitButtonEl.addEventListener("click", function() {
        // loop through questions and get selected
        // console.log("click")
        let quizAnswers = document.querySelectorAll("input[type=radio]:checked")
        // giving me the next area element, not the object behind it.



        let score = 0;
        console.log(quizAnswers)
        let quizLength = quizAnswers.length
        for (let i = 0; i < quizLength; i++) {
            // console.log(quizAnswers)
            if (quizAnswers[i].id === "Yes") {
                score++;
            }
        }
        // console.log(quizResults[0].id)
        // console.log(quizResults[0].checked)
        console.log(quizResults)
        console.log(score)
        console.log(quizLength)


        // loop through quiz results, for every yes, add one
        // todo add other quiz categories
        if (score/quizLength > .5) { // simple comparison - if over half questions are marked 'yes', then it's active
            symptoms[0] = "Active";
        } else {
            symptoms[0] = "Inactive";
        }
        console.log(symptoms)

        // Depression 10 questions
        // if 1-4 minimal depression
        // if 5-9 mild depression
        // if 10-14 moderate depression
        // if 15-19 moderately severe depression
        // if 20-27 severe depression
        // Anxiety 7 questions

        quizGraderHandler(symptoms);
    });
} // grades symptoms based on quiz answers

function questionChooser() {
    let contentDivEl = document.querySelector("#content");
    // questionDisplay(impairmentQuestions)
    questionDisplay(depressionQuestions)
    questionDisplay(schQuestions)
    questionDisplay(ptsdQuestions)
    questionDisplay(addictionQuestions)

    // add checked object to array
    let questionChooserSubmitButton = document.createElement("button")
    questionChooserSubmitButton.textContent = "submit"
    let userQuestions = [];
    questionChooserSubmitButton.addEventListener("click", function() {
        let checkbox = document.querySelectorAll("input[type=checkbox]")
        // loop through all checkboxes
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {  // if input element is selected on button click, then save object into questions array
                userQuestions.push(checkbox[i].name)  // save checked boxes into array
            }
        }
        // console.log(userQuestions)
        questionChooserButtonHandler(userQuestions);
    })
    contentDivEl.appendChild(questionChooserSubmitButton)
} // user picks and stores relevant questions

function saveQuestions() {
    localStorage.setItem("questions", JSON.stringify(questionOptions))
}

function loadQuestions() {
    let questionList = JSON.parse(localStorage.getItem("questions"));
    if (!questionList) {
        questionList = [];
    }
}

function main() {
    // displayAll()
    // questionChooser()
    // quizSubmitButtonHandler()



    // saveQuestions();
    // questionChooser();
    // console.log(questionOptions)
}

main();