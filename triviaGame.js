const apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean`;
    $.ajax({
        url: apiUrl
    }).then((data)=> {
      console.log(JSON.stringify(data,null,3))
      console.log(data.results[0].question)
        
});