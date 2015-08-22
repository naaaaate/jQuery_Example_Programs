//Hide Warning
//Show Warning Slowly
// we dont need document.ready(myCode) bc page is ready as JS links are at bottom of the body html
$(".warning").hide().show("slow");


// this is passing in the anonymous function
$(document).ready(function(){
  $(.warning).hide().show("slow");
})


//this is just passing in the function handler
$(function() {
  $(.warning).hide().show("slow");
});