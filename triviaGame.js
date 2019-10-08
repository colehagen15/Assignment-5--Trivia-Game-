let questionLbl = $(`#questionLbl`);
let questionNumber = $(`#questionNumber`);
let guessBtn = $(`#check`);
let feedBack = $(`#feedBack`);
let nextQBtn = $(`#nextQuestion`);
let userGuess = $(`#userGuess`);


const apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean`;
    $.ajax({
        url: apiUrl
    }).then((data)=> {
      console.log(JSON.stringify(data,null,3))
    
    var i = -1;
    nextQBtn.click(function() {
        i += 1;
        console.log(data.results[i].question)
        questionLbl.text(`${data.results[i].question}`);
        
    guessBtn.click(function(){
        console.log(data.results[i].correct_answer)
        if (userGuess.val() == (data.results[i].correct_answer)){
            feedBack.text(`Correct!`);
        }

        });
    });




    });
