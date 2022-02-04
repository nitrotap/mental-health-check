/*
 * js file for quiz
*/

// variable declarations
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// building questions
// response types
let responseType = { // an object with distinct types
    yesNo: ["Yes", "No"],
    weekday: weekdays,
    frequency: ["Not at all", "Not frequently", "A couple times a month", "A couple times a week", "Every Day"],
    userInput: [],
}
/*  Questions in this format
    {question: "",
    response: responseType.frequency},
*/
let depressionQuestions = [ // an array of objects depressionQuestions[0].question, depressionQuestions[1].response
    {question: "How often are you having thoughts that you would be better off dead, or of hurting yourself?",
        response: responseType.frequency},
    {question: "How often are you moving or speaking so slowly that other people have noticed",
        response: responseType.frequency},
    {question: "How often are you having trouble concentrating on things such as reading the newspaper or watching TV?",
        response: responseType.frequency},
    {question: "How often are you feeling bad about yourself (feel like a failure or let your family down)",
        response: responseType.frequency},
    {question: "How often do you have a poor appetite or overeating?",
        response: responseType.frequency},
    {question: "How often are you feeling tired or having little energy?",
        response: responseType.frequency},
    {question: "How often are you having trouble falling or staying asleep, or sleeping too much?",
        response: responseType.frequency},
    {question: "How often are you feeling down, depressed, or hopeless?",
        response: responseType.frequency},
    {question: "Do you have little interest or please in doing things?",
        response: responseType.frequency},
    {question: "How difficult have these problems made it for you to work, at home, or with others?",
        response: responseType.frequency}
]

let otherQuestions = [ // an array of objects
    {question: "Are the happy thoughts speeding up your thought process?", response: responseType.yesNo},
    {question: "Are the sad thoughts slowing down your thought process?", response: responseType.yesNo},
    {question: "How much brain fog are you experiencing?", response: responseType.frequency},
    {question: "Have you had any grandiose thoughts?", response: responseType.frequency}
];

let impairmentQuestions = [ // an array of objects
    {question: "What is the Weekday?", response: responseType.weekday},
    {question: "Type in the first three things you see", response: responseType.userInput},
    {question: "What is the year?", response: responseType.userInput}
];

let anxietyQuestions = [  // an array of objects
    {question: "How often have you been feeling nervous, anxious, or on edge",
        response: responseType.frequency},
    {question: "How often have you been not able to stop or control worrying",
        response: responseType.frequency},
    {question: "How often have you been worrying too much about different things",
        response: responseType.frequency},
    {question: "How often have you been having trouble relaxing",
        response: responseType.frequency},
    {question: "How often have you been so restless that it is hard to sit still",
        response: responseType.frequency},
    {question: "How often have you been easily annoyed or irritable",
        response: responseType.frequency},
    {question: "How often have you been feeling as if something awful might happen?",
        response: responseType.frequency},
];

function radioQuestion(questionObj) { // takes {question, response}
    let contentDivEl = document.querySelector("#content");
    let questionTextDivEl = document.createElement("div")
    let questionTextEl = document.createElement("h3")
    questionTextEl.textContent = questionObj.question;
    questionTextDivEl.appendChild(questionTextEl)
    contentDivEl.appendChild(questionTextDivEl)

    let questionResponseDivEl = document.createElement("div")
    for (let i = 0; i < questionObj.response.length; i++) {
        let questionResponseInputEl = document.createElement("input")
        questionResponseInputEl.setAttribute("type", "radio")
        questionResponseInputEl.setAttribute("id", questionObj.response[i])
        questionResponseInputEl.setAttribute("value", questionObj.response[i])
        questionResponseInputEl.setAttribute("name", questionObj.question)

        let questionResponseLabelEl = document.createElement("label")
        questionResponseLabelEl.setAttribute("for", questionObj.response[i])
        questionResponseLabelEl.textContent = questionObj.response[i]


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

} // takes a question object and parses its type

function displayAll() {
    for (let i = 0; i < impairmentQuestions.length; i++) {
        questionParser(impairmentQuestions[i])
    }
    for (let i = 0; i < otherQuestions.length; i++) {
        questionParser(otherQuestions[i])
    }
    for (let i = 0; i < depressionQuestions.length; i++) {
        questionParser(depressionQuestions[i])
    }
    for (let i = 0; i < anxietyQuestions.length; i++) {
        questionParser(anxietyQuestions[i])
    }

} // TEST FUNCTION displays all questions TODO remove

function questionDisplay(questionObj) {
    let contentDivEl = document.querySelector("#content");

    for (let i = 0; i < questionObj.length; i++) {
        let questionDivEl = document.createElement("div")
        let questionSpanEl = document.createElement("span")
        questionSpanEl.className = "checkbox-wrapper"
        let questionInputEl = document.createElement("input")
        questionInputEl.setAttribute("type", "checkbox")
        questionInputEl.setAttribute("name", questionObj[i].question)
        let questionLabelEl = document.createElement("label")
        questionLabelEl.setAttribute("for", questionObj[i].question)
        questionLabelEl.textContent = questionObj[i].question
        questionSpanEl.appendChild(questionInputEl)
        questionSpanEl.appendChild(questionLabelEl)
        questionDivEl.appendChild(questionSpanEl)
        contentDivEl.appendChild(questionDivEl)

    }
}

questionOptions = [];

function questionChooserButtonHandler (userQuestions) {
    let contentDivEl = document.querySelector("#content");

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
        for (let j = 0; j < depressionQuestions.length; j++) {
            if (userQuestions[i] === depressionQuestions[j].question) {
                questionOptions.push(depressionQuestions[j])
            }
        }
    }
    for (let i = 0; i < userQuestions.length; i++) { // loop through selected questions
        for (let j = 0; j < otherQuestions.length; j++) {
            if (userQuestions[i] === otherQuestions[j].question) {
                questionOptions.push(otherQuestions[j])
            }
        }
    }
    // console.log(questionOptions)

    // loop through selected questions and display them
    for (let i = 0; i < questionOptions.length; i++) {
        console.log(questionOptions[i])
        questionParser(questionOptions[i])
    }

    // create button for end of quiz
    let submitButtonEl = document.createElement("button")
    submitButtonEl.textContent = "Submit"
    contentDivEl.appendChild(submitButtonEl)
    submitButtonEl.addEventListener("click", function() {
        // grade quiz todo
        // direct to resources based on grade
        quizSubmitButtonHandler();

    })
}

function quizSubmitButtonHandler() {
    // grade quiz
    // capture quiz responses
        // grade based on illness
        // link to content generator function

    
}

function questionChooser() { // user picks and stores relevant questions
    let contentDivEl = document.querySelector("#content");
    questionDisplay(impairmentQuestions)
    questionDisplay(depressionQuestions)
    questionDisplay(otherQuestions)

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
}

function quizGrader() {  // takes quiz results and grades
    // get quiz selected radio
    //todo multiple radio groups selected
    let quizSubmitButtonEl = document.querySelector("#quizSubmitButton")
    quizSubmitButtonEl.addEventListener("click", function() {

    })

}


function main() {
    // displayAll()


    questionChooser();
    // console.log(questionOptions)
    /*
    for (let i = 0; i < questionOptions.length; i++) {
        questionParser(questionOptions[i])
    }*/

}

main();