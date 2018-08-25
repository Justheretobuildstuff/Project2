$(function() {
  let newScore;
  $("#submit").on("click", function() {
    let userInput = $("#userInput").val();
    let params = {
      documents: [{
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
    .done(function (response) {
      // console.log("success");
      // console.log(response.documents[0].score);
      var x = response.documents[0].score;
      var y = Math.round(x * 100)
      console.log(y);
      myObj.series[0].data[0].y = y
      myObj.series[0].data[1].y = 100 - y
      $("#userInput").val('');
      
      Highcharts.chart('container', myObj);

      return;
      
      // location.assign("/mypage/" + y);
    })
      .fail(function() {
        alert("error is happening in AJAX call after submit click");
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
//   function getScores() {
//     $.get("/api/new", function(data) {
//       // Dave may put code in here to render the data/graphs
//       // CODE GOES HERE
//     });
//   }

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
      return;
    });
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