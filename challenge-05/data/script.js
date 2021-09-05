  var todaysDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todaysDate);


$(".saveBttn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, text);
});
$("#hour-8 .task").val(localStorage.getItem("hour-8"));
$("#hour-9 .task").val(localStorage.getItem("hour-9"));
$("#hour-10 .task").val(localStorage.getItem("hour-10"));
$("#hour-11 .task").val(localStorage.getItem("hour-11"));
$("#hour-12 .task").val(localStorage.getItem("hour-12"));
$("#hour-13 .task").val(localStorage.getItem("hour-13"));
$("#hour-14 .task").val(localStorage.getItem("hour-14"));
$("#hour-15 .task").val(localStorage.getItem("hour-15"));
$("#hour-16 .task").val(localStorage.getItem("hour-16"));
$("#hour-17 .task").val(localStorage.getItem("hour-17"));

function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();
console.log(currentHour);
    // loop over time blocks
    $(".show-time").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log( blockHour)

        //check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
setInterval( hourTracker, 15000)