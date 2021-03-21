$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});

function hoursTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlockHour, currentHour)

        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeclass("present");
            $(this).removeclass("future");
        } else if (timeBlockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeclass("past");
            $(this).removeClass("future");
        } else(timeBlockHour > currentHour) {
            $(this).addClass("future");
            $(this).removeclass("past");
            $(this).removeClass("present");
        }

    })
}