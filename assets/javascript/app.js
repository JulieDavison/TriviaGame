$(document).ready(function () {





    //    Make object to hold questions, wrong answers, correct answer, picture.
    var QandA = [
        {
            question: "Which of these AVAs is in both Napa and Sonoma County?", choices: ["Carneros", "Knights Valley", "All of these", "None of these"], correct: 0, imagefile: "assets.images.AVA-Map.jpg",
        },
        {
            question: "Which of these is a type of wine cork?", choices: ["Synthetic Cork", "Screw Cap", "Glass Cork", "All of these"], correct: 3, imagefile: "assets.images.Buds.jpg",
        },
        {
            question: "Why is there mustard growing in the vineyards?", choices: ["Franciscan missionaries walked the fields with sacks on their backs having smalls holes to distribute the seeds", "It is turned into mulch and provides valuable nutrients and phosphorus for the emerging grape plants.", "It grows wild!", "All of these"], correct: 3, imagefile: "assets.images.Grapes.jpg",
        },
        {
            question: "What makes a red wine red?", choices: ["Juice from the inside of the grape", "The skins of the grape during fermentation ", "Food coloring", "Beet juice"], correct: 1, imagefile: "assets.images.Grapes.jpg",
        },
        {
            question: "What event put California wines to the attention of the world's stage?", choices: ["World's Fair", "Chronicle Wine Competition", "1976 Judgment of Paris", "Do they make wine in California?"], correct: 2, imagefile: "assets.images.Grapes.jpg",
        },
        {
            question: "Which of these is a good thing in wine?", choices: ["Cat Pee", "Wet Dog", "Noble Rot", "Brettanomyces"], correct: 2, imagefile: "assets.images.Grapes.jpg",
        },
        {
            question: "What is the best winery in Sonoma County?", choices: ["Martin Ray", "Carlisle", "Bedrock", "All of these"], correct: 3, imagefile: "assets.images.Grapes.jpg",
        },
        {
            question: "Which of these does not produce red wine?", choices: ["Viognier", "Syrah", "Mourvedre", "Malbec"], correct: 0, imagefile: "assets.images.Grapes.jpg",
        },
        {
            question: "In which months does bud break usually happen in Sonoma County?", choices: ["December", "July", "March", "January"], correct: 2, imagefile: "assets.images.Grapes.jpg",
        },

    ];
    // console.log(QandA.choices[0]);

    //    Global Variable:
    var correct = 0
    var incorrect = 0
    // var unanswered = 0

    // Global Flag
    var timeUp = false


    var pick = [];
    var timeRemaining = 60;
    var timerRunning;

    var askedQuest = [];

    // ---------------Functions----------------------------
    function timerGenerator() {
        timerRunning = setInterval(function () {
            if (timeRemaining === 0) {
                clearInterval(timerRunning);
                timeUp = true;
                gameOver();
            }
            $("#timedisplay").text(timeRemaining);
            timeRemaining--;

        }, 1000);

    }
    function resetData() {

        timeUp = false

        pick = [];
        timeRemaining = 60;
        timerRunning = false;

        askedQuest = [];

    }
    function gameOver() {
        $("#answerBlock").empty();
        $("#answerBlock").html("<h2>Game Over!  Let's see how you did.</h2>");
        $("#answerBlock").append("<h4> Correct: " + correct + "</h4>");
        $("#answerBlock").append("<h4> Incorrect: " + incorrect + "</h4>");
        // $("#answerBlock").append("<h4> Unanswered: " + unanswered + "</h4>");
        $("#startButton").show();
        resetData();
        $("#timeDisplayWrap").hide();
        $("#timerWrap").hide();
        $("#question").hide();

    }
    // Start-game button is clicked to begin questions.
    $("#startButton").on("click", function () {
        $("#startButton").hide();
        timerGenerator();
        startNewQuest();



        function pickRandonQandA() {
            randomQandAIndex = Math.floor(Math.random() * QandA.length);
            //check if asked this question before
            if (askedQuest.indexOf(randomQandAIndex) == -1) {
                askedQuest.push(randomQandAIndex)
                pick = QandA[randomQandAIndex];
            }
            else if (askedQuest.length === QandA.length) {
                gameOver();
            }
            else {
                pickRandonQandA()
            }
            $("#question").text(pick.question);


            var ulEl = $('<ul>').addClass('list-group');

            for (var i = 0; i < pick.choices.length; i++) {
                var questChoice = $("<li>");
                questChoice.addClass("answerchoice")
                    .addClass("list-group-item")
                    .attr('id', 'choice' + (i + 1))
                    .attr("data-guessvalue", i);
                questChoice.text(pick.choices[i]);
                ulEl.append(questChoice)

            }
            $("#answerBlock").empty();
            $("#answerBlock").append(ulEl);

            console.log(pick);
            //click function to select answer and outcomes
            $(".answerchoice").on("click", function () {
                console.log('I Work')
                //Clear timer interval so we do not get unwanted results
                // clearInterval(timerRunning);
                //grab array position from userGuess
                userGuess = parseInt($(this).attr("data-guessvalue"));

                if (userGuess === pick.correct) {
                    correct++;
                    $("#message").text("Good Job, you picked the right answer!");
                    $("#imgDiv").attr("src", pick.imagefile);


                }
                else if (userGuess !== pick.correct) {
                    incorrect++;
                    $("#message").text("Wrong answer :( ");

                    // $("#imgDiv").attr("src", pick.imagefile);
                }

                setTimeout(function () {
                    $("#message").empty();
                    pickRandonQandA();
                }, 500);
            });


        }

        // Make function to ask questions in a random order and includes all the questions each round.
        // if question has been asked then 
        // for loop to loop through questions and if/else to verify question
        function startNewQuest() {
            // randomQandA is a integer
            // randomQandA = Math.floor(Math.random() * QandA.length);
            // check to see if randonQandA is in new array hold questions asked
            // then let pick be a new question not in array.
            // pick = QandA[randomQandA];
            // pick is now the question object
            pickRandonQandA();
            console.log(pick);

            // Display "pick" in jumbotron



        };
        // if (pick === null) {
        //     //Display final page
        //     $("#").empty();
        //     $("#").html("<h2>Game Over!  Let's see how you did.</h2>");
        //     $("#").append("<h4> Correct: " + correct + "</h4>");
        //     $("#").append("<h4> Correct: " + incorrect + "</h4>");
        //     $("#").append("<h4> Correct: " + unanswered + "</h4>");
        //     // Show Start-Game button again.
        // }



    });
});