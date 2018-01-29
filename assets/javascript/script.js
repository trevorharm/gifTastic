$(document).ready(function () {
    // array of sports i like
    var sports = ["skateboarding", "football", "weightlifting", "mountain climbing"];

    // display buttons, add classes, write name on button
    function createButton() {
        $("#buttonArea").empty();
        for (var i = 0; i < sports.length; i++) {
            var sportButton = $("<button>");
            sportButton.addClass("sport");
            sportButton.addClass("btn btn-primary");
            sportButton.attr("data-name", sports[i]);
            sportButton.text(sports[i]);
            $("#buttonArea").append(sportButton);
        };
    }
    // create listener for adding a sport, call createButton
    function addSport() {
        $("#add").on("click", function () {
            var sport = $("#sport-input").val().trim();
            if ($("#sport-input").val() == "") {
                alert("Input can not be left blank");
            };
            sports.push(sport);
            createButton();
        });
    };
    // "Display Sports Gifs by querying API, create jquery object to display returned responses
    function displaySports() {
        var sport = $(this).attr("data-name");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=5cXAcgvWQhMbpP482Ze97TD5mpY2mSSm&limit=10"; 
        $.ajax({
            url: queryUrl,
            method: "GET",
        })
        .done(function(response){
            $("#gifDisplay").empty();
            var remoteData = response.data;
            for (var i = 0; i < remoteData.length; i++){
                var displayElement = $("<div>");
                displayElemnt.addClass("displayElement");
                var sportsRating = $("<p>").text("Rating" + remoteData[i].rating);
                displayElement.append(sportsRating);
                var sportsImage = $("<img");
                sportsImage.attr("src", remoteData[i].images.fixed_height_small_still.url);
                sportsImage.attr("data-still", remoteData[i].images.fixed_height_small_still.url);
                sportsImage.attr("data-animate", remoteData[i].images.fixed_height_small.url);
                sportsImage.attr("data-state", "still");
                sportsImage.addClass("image");
                displayElement.append(sportsImage);
                $("#gifDisplay").prepend(displayElement);
            }
        });
    };

// toggle between still/animated state
$(document).on("click", ".sport", displaySports);
$(document).on("click", ".image", function(){
    var state = $(this).attr("data-state");
    if (state == "still"){
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    }else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }

});




    // call create button
    createButton();
    // call displaySports
    displaySports();
});