$(document).ready(function () {





    //    Make object to hold questions, wrong answers, correct answer, picture.
    var QandA = [
        {
            question: "Which of these AVAs is in both Napa and Sonoma County?", choices: ["Carneros", "Knights Valley", "All of these", "None of these"], correct: 0, imagefile: "assets.images.AVA-Map1.jpg",
        },
        {
            question: "Question2 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.Buds.jpg",
        },
        {
            question: "Question3 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question4 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question5 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question6 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question7 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question8 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question9 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },
        {
            question: "Question10 here", choices: ["choice1", "choice2", "choice3", "choice4"], correct: 1, imagefile: "assets.images.800px-Grapes.jpg",
        },

    ];
    // console.log(QandA.choices[0]);

    //    Global Variable:
    var correct = 0
    var incorrect = 0
    var unanswered = 0

    var index;
    var pick = [];
    var timeRemaining = 20;
    var timerRunning;
    var userChoicesIndex = [];
    // ---------------Functions----------------------------

    // Start-game button is clicked to begin questions.
    $("#startButton").on("click", function () {
        $("#startButton").hide();
        timerGenerator();
        startNewQuest();

        function timerGenerator() {
            timerRunning = setInterval(function(){
                if(timeRemaining === 0){
                    clearInterval(timerRunning);
                    //Move on to wrong answer
                }
                $("#timedisplay").text(timeRemaining);
                timeRemaining--;

            }, 1000);

        }
        // console.log("timer");

        // Make function to ask questions in a random order and includes all the questions each round.
        // if question has been asked then 
        // for loop to loop through questions and if/else to verify question
        function startNewQuest() {
            randomQandA = Math.floor(Math.random() * QandA.length);
            // check to see if randonQandA is in new array hold questions asked
            // then let pick be a new question not in array.
            pick = QandA[randomQandA];
            console.log(pick);

            // Display "pick" in jumbotron
            $("#question").text(pick.question);


            var ulEl = $('<ul>').addClass('list-group');

            for (var i = 0; i < pick.choices.length; i++) {
                var userChoice = $("<li>");
                userChoice.addClass("answerchoice")
                          .addClass("list-group-item")
                          .attr('id', 'choice' + (i + 1))
                          .attr("data-guessvalue", i);
                userChoice.text(pick.choices[i]);
                ulEl.append(userChoice)
                //assign array position to it so can check answer
            }
            $("#answerBlock").append(ulEl);
            
            //click function to select answer and outcomes
            $(".answerchoice").on("click", function () {
                console.log('I Work')
                //Clear timer interval so we do not get unwanted results
                clearInterval(timerRunning);
                //grab array position from userGuess
                userGuess = parseInt($(this).attr("data-guessvalue"));

                if (userChoice === pick.correct[i]) {
                    correct++;
                    // display imagefile for 7 secs then display next question;
                    // $("#imgDiv").html(src, "imagefile");
                }
                else if (userChoice !== pick.correct[i]) {
                    incorrect++;
                    // display imagefile for 7 secs then display next question;
                    // $("#imgDiv").html(src, "imagefile");
                }
                else {
                    unanswered++;
                    // display imagefile for 7 secs then display next question (function startNewQuest);
                    // $("#imgDiv").html(src, "imagefile");
                }


            });
        };
        if (pick === null) {
            //Display final page
            $("#").empty();
            $("#").html("<h2>Game Over!  Let's see how you did.</h2>");
            $("#").append("<h4> Correct: " + correct + "</h4>" );
            $("#").append("<h4> Correct: " + incorrect + "</h4>" );
            $("#").append("<h4> Correct: " + unanswered + "</h4>" );
            // Show Start-Game button again.
        }



    });
});