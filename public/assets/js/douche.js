$(function() {
  $("#submit").on("click", function() {
    let userInput = $("#userInput").val();
    console.log(userInput);
    let params = {
      documents: [
        {
          language: "en",
          id: "1",
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

    // Need to add on button press here
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
      // Request body
      data: JSON.stringify(params)
    })
      .done(function(response) {
        alert("success");
        console.log(response.documents[0].score);
      })
      .fail(function() {
        alert("error");
      });
  });
});
