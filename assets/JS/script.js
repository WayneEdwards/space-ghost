$(document).ready(function() {


    // workDay function in header
    workdayTime();

    function workdayTime() {
        var workday = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"))
        setTimeout(workdayTime, 1000);
    };

    var currentHour = moment().hour();

    $(".saveBtn").on("click", function() {
        var textData = $(this).siblings("textarea").val();
        var timeClock = $(this).parent().attr('id');
        console.log(textData, timeClock);

        localStorage.setItem(timeClock, textData);
    })

    // // localStorage
    // $("#9 .description").val(localStorage).getItem("9");
    // $("#10 .description").val(localStorage).getItem("10");
    // $("#11 .description").val(localStorage).getItem("11");
    // $("#12 .description").val(localStorage).getItem("12");
    // $("#13 .description").val(localStorage).getItem("13");
    // $("#14 .description").val(localStorage).getItem("14");
    // $("#15 .description").val(localStorage).getItem("15");
    // $("#16 .description").val(localStorage).getItem("16");
    // $("#17 .description").val(localStorage).getItem("17");
    // $("#18 .description").val(localStorage).getItem("18");


    for (let i = 9; i <= 18; i++) {
        $('#' + i).children('textarea').val(localStorage.getItem(i))
        if (i < currentHour) {
            $('#' + i).children('textarea').addClass("past")
        } else if (currentHour === i) {
            $("#" + i).children('textarea').addClass("present")
        } else {
            $("#" + i).children('textarea').addClass("future")
        }
    }


})