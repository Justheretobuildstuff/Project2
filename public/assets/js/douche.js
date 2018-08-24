$(function () {
  console.log("hello");
  $("#submit").on("click", function () {
    let userInput = $("#userInput").val();
    console.log(userInput);
    let params = {
      documents: [{
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

    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" +
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
      .done(function (response) {
        console.log("success");
        console.log(response.documents[0].score);
        var x = response.documents[0].score;
        var y = Math.round(x * 100)
        console.log(y);
        myObj.series[0].data[0].y = y
        myObj.series[0].data[1].y = 100 - y
 
        Highcharts.chart('container', myObj);

        // location.assign("/mypage/" + y);
      })
      .fail(function () {
        console.log("error");
      });
  });

  // Highcharts.chart('container', {
  //   chart: {
  //     plotBackgroundColor: null,
  //     plotBorderWidth: null,
  //     plotShadow: false,
  //     type: 'pie'
  //   },
  //   title: {
  //     text: 'Rude Dude Breakdown'
  //   },
  //   tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //   },
  //   plotOptions: {
  //     pie: {
  //       allowPointSelect: true,
  //       cursor: 'pointer',
  //       dataLabels: {
  //         enabled: true,
  //         format: '<b>{point.name}</b>: {point.percentage:.1f} %',
  //         style: {
  //           color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
  //         }
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Rude Dude',
  //     colorByPoint: true,
  //     data: [{
  //       name: 'Neutral',
  //       y: y,
  //       sliced: true,
  //       selected: true
  //     }, {
  //       name: 'Rude',
  //       y: 100 - y
  //     },]
  //   }]
  // });

  // var graph = response.documents[0].score
  // let graph = 22;
  // export {graph};
  // console.log(graph)


  // Function for retrieving scores and getting them ready to be rendered to the page
  function getScores() {
    $.get("/api/new", function (data) {
      //   var rowsToAdd = [];
      //   for (var i = 0; i < data.length; i++) {
      //     rowsToAdd.push(createAuthorRow(data[i]));
      //   }
      //   renderAuthorList(rowsToAdd);
      //   nameInput.val("");
    });
  }
  // Send scores over to post route - once it's in the post route, response.this reassign to num and num2
  // $.post()

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData).then(getAuthors);
  }


  var myObj = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Rude Dude Breakdown'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      name: 'Rude Dude',
      colorByPoint: true,
      data: [{
        name: 'Neutral',
        y: 50,
        sliced: true,
        selected: true
      }, {
        name: 'Rude',
        y: 100
      },]
    }]
  }
});




// module.exports = "y";