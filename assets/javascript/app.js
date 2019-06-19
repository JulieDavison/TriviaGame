
//    Make object to hold questions, wrong answers, correct answer, picture.
var QandA = [
    {
        question: "Which of these AVAs is in both Napa and Sonoma County?", choices: ["Carneros", "Knights Valley", "All of these", "None of these"], correct: 0, imagefile: "assets.images.AVA-Map1.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.Buds-Bacigalupi-oldvines.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },
    {
        question: "Question here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
    },

];
console.log(QandA.choices[0]);

//    Global Variable:
    var correct = 0
    var incorrect = 0
    var unanswered = 0
    


//    Make function to ask questions in a random order and includes all the questions each round.

        // var randomQandA = QandA[Math.floor(Math.random() * QandA.length); 
        // function to make sure all questions get asked
        // for loop to loop through questions and if/else to verify question
    
    // change to random index in Object.

//    Make function that resets timer for each question and the game.  Keeping track of correct, incorrect and unanswered questions for final page.
        // function to start Game
            // start new game
            // start timer
            // display first question

        // function to start each question
            // reset timer
            // display new question
            // record scorefrom the previous question win++ or lose++

//    Create html and css to display questions and 
    // final page scoring plus replay game button.

//    Use if and if/else statements to determine if the questions have been answered correctly.