$(document).ready(function () {

    // AJAX
    axios.get("api/all").then(response => 
        response.data.forEach(item => $("#items")
            .append(`<p>${item.text} - ${item.category}</p>`))
    );
    $(".btn-success").click(function () {
        axios.post("api/new", {
            text: $("#Textbox").val(),
            category: $("#TextCategory").val()
        }).then(response => $("#items").append(`<p>${response.data.text} - ${response.data.category}</p>`));

        // Export for analyzer
        let userInput = $("#Textbox").val();
        exports.userInput = userInput;
    });
});