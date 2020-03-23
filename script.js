$(document).ready(function(){





// save button function //
$("savBtn").on("click",function(){

    // variables //
    var value =$(this).siblings(".description").val();
    var time =$(this).parent().attr("id");

// save to local storage //
localStorage.setItem(time, value);

})

// hourUpdater function//

function hourUpdater(){
var currentHour = moment().hours();
console.log(currentHour);

$(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
    console.log(blockHour);
    if ( blockHour < currentHour) {
        
        $(this).addClass("past");
}
    else if(blockHour === currentHour){

$(this).removeClass("past");
$(this).addClass("present");
    }

else 
{
    
$(this).removeClass("past");
$(this).addClass("present");
$(this).addClass("future");


}
});
}

hourUpdater()

var interval= setInterval(hourUpdater,15000);

// local sorage //
$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11.description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-13 .description').val(localStorage.getItem("hour-13"));
$('#hour-14.description').val(localStorage.getItem("hour-14"));
$('#hour-15.description').val(localStorage.getItem("hour-15"));
$('#hour-16 .description').val(localStorage.getItem("hour-16"));
$('#hour-17.description').val(localStorage.getItem("hour-17"));





});
