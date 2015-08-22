//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction


// $(".spoiler span") -- selects the span element within spoiler class
  // .hide() -- will hide the span on the page
  // .append() -- can add html elements like a button to it.
//$("button") -- select all button elements on page
  // .click() -- can pass in a function with an eventObject argument..
//$(this) --refers to the object being clicked.. so since button is being clicked.. this represents button.
// $(this).prev().show(); -- this shows the spoiler.. bc the span is the previous element of the button.

// we did: manipulation of dom -hide, show, append, remove elements,
// click handler to trigger code for events,
// traversing - using prev to move to buttons prev element when button is clicked..



//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, When button pressed
$("button").click(function(){
  //3.1, Show spoiler next to the button clicked
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});


//note: in a click event handler, the 'this' keyword is special and points to the element u are clicking on.