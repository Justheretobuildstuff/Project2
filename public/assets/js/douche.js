$(function() {
  let newScore;
  $("#submit").on("click", function() {
    let userInput = $("#userInput").val();
    let params = {
      documents: [
        {
          language: "en",
          id: 1,
          text: "'" + userInput + "'"
        }
        // {
        //   language: "en",
        //   id: "2",
        //   text: "This is my first test. All is not good"
        // },
        // {
        //   language: "en",
        //   id: "3",
        //   text: "Why is this not working as expected?"
        // },
        // {
        //   language: "en",
        //   id: "4",
        //   text: "You got to be kidding me like this"
        // },
        // {
        //   language: "en",
        //   id: "5",
        //   text: "I hope this will finally work. I hope it will"
        // }
      ]
    };

    $.ajax({
      url:
        "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" +
        $.param(params),
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "a609ad2478ad44b284543dd4397cf74e",
        Accept: "application/json"
      },
      type: "POST",
      data: JSON.stringify(params)
    })
      .done(function(response) {
        console.log(JSON.stringify(response));
        newScore = response.documents.score;

        // After obtaining data from external API, will send this information to our database using createItem function. Currently function is running twice??
        createItem(userInput, newScore);
      })
      .fail(function() {
        alert("error");
      });
  });

  // Function for retrieving scores and getting them ready to be rendered to the page
  function getScores() {
    $.get("/api/new", function(data) {
      // Dave may put code in here to render the data/graphs
      // CODE GOES HERE
    });
  }

  // This function will add the data to database
  function createItem(userInput, score) {
    $.ajax({
      method: "POST",
      url: "/api/new",
      data: {
        text: userInput,
        score: score
      }
    }).then(function() {
      window.location.href = "/";
    });
  }
});
