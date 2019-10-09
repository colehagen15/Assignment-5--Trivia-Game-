let questionLbl = $(`#questionLbl`);
let questionNumber = $(`#questionNumber`);
let guessBtn = $(`#check`);
let feedBack = $(`#feedBack`);
let nextQBtn = $(`#nextQuestion`);
let userGuess = $(`#userGuess`);
let count = $(`#count`);

guessBtn.attr("disabled", true);
questionLbl.text("Press \"Start\" button to begin");

var correctAnswers = 0;
count.text(`Score: ` + correctAnswers)
nextQBtn.text("Start");
const apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean`;
    $.ajax({
        url: apiUrl
    }).then((data)=> {
      console.log(JSON.stringify(data,null,3))
    
    var i = 0;
    nextQBtn.click(function() {
        questionNumber.text("Question "+ (i+1)+":");
        guessBtn.attr("disabled", false);
        nextQBtn.text("Next Question");
        nextQBtn.hide();
        feedBack.hide();
        console.log(data.results[i].question)
        //questionLbl.hide();
        questionLbl.html(`${data.results[i].question}`);
        //questionLbl.fadeIn("slow");
        userGuess.val('');
        
      });   
    
      guessBtn.click(function() {
        nextQBtn.fadeIn("slow");
        feedBack.fadeIn("slow");
        console.log(i);
        console.log(data.results[i].correct_answer)
        if (userGuess.val() == (data.results[i].correct_answer)){
            feedBack.text(`Correct!`);
            correctAnswers += 1;
            ++i;
        }
        else if (userGuess.val() != (data.results[i].correct_answer) && userGuess.val() == "True" || userGuess.val() == "False"){
            feedBack.text(`Wrong.`);
            ++i;
        }
        else if (userGuess.val() != 'True' || userGuess.val() != 'False'){
            feedBack.text("Guess must be True or False (Capitalization is important)");
        }
        count.text("Score: "+ correctAnswers +"/"+(i));
        if (i == 10) {
            $("#finalScore").text("Total Score: "+ correctAnswers + "/" + "10");
            nextQBtn.attr("disabled", true);
            guessBtn.attr("disabled", true);
        }
    });
    



    });
