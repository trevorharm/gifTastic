$(document).ready(function(){
// array of sports i like
var sports = ["skateboarding", "football", "weightlifting", "mountain climbing"];

// display buttons, add classes, write name on button
function createButton(){
    $("#buttonArea").empty();
    for (var i = 0; i < sports.length; i++){
       var sportButton = $("<button>");
       sportButton.addClass("sport");
       sportButton.addClass("btn btn-primary");
       sportButton.attr("data-name", sport[i]);
       sportButton.text(sport[i]);
       $("#buttonArea").append(sportButton);
    };
}









// call create button
createButton();
});