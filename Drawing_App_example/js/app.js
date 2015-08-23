//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

// tldr - siblings(), addClass(), removeClass(), toggle(), css("background-color")
  // toggle will show and hide on click..


// 1.  lets select our li in controls class.. to listen for a click..

  // $(".controls li").click(function(){

  // })

  // now lets store the color -- this is the initial color when page first loads..
       // var color = $(".selected").css("background-color");

      // in our function lets cache the current color of the li..
          // color = $(this).css("background-color");

  //   deselect sibling elements
     // $(this).siblings().removeClass("selected");



  //    select clicked element
      // $(this).addClass("selected");

  // so program looks like this:

   // var color = $(".selected").css("background-color");

    // $(".controls li").click(function(){
      // $(this).siblings().removeClass("selected");
       // $(this).addClass("selected");
       // color = $(this).css("background-color");
    // })


// this is the css for selected class.. it puts white border around it..
// .selected {
//   border: 7px solid #fff;
//   width: 40px;
//   height: 40px;
// }

// --so this so far when we click an li.. will remove the class .selected from every sibling li.. and add the class .selected to the clicked li... then cache its background color in a var called color.



// 2. Lets reveal the color select when we select new color button
   // new color button should reveal and hide the color select div.
   // so     $("#colorSelect").toggle();



// now when we change the slider lets see the new color

   // so When "New Color" is pressed button, it will set the new color w changeCOlor function, then show or hide with the toggle colorselect..

// $("#revealColorSelect").click(function(){
//   //Show color select or hide the color select

//   changeColor(); //this will set the new color

//   $("#colorSelect").toggle();

// });



// //update the new color span .. this functino updates the new color..
// function changeColor() {

//   var r = $("#red").val();
//   // value comes from this: <input id="red" name="red" type="range" min=0 max=255 value=0>

//   var g = $("#green").val();

//   var b = $("#blue").val();

//   $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
// }

// //When color sliders change...call changeColor function : which sets the new color.. it sees where the range slider is at , gets teh value, returns it for each rgb and then sets background color of the newColor div to show the color..
// $("input[type=range]").change(changeColor);




// 3. Now lets click on add color and have it add to the li's up top.. append to red green or blue selected.

// so first select the add color button.. and create a new li element to append to other li's
// so  ....

  // $("#addNewColor").click(function(){  ---this is our function on click selecting the add button

  // var $newColor = $("<li></li>");   ---this is our dom element added to var new color

  // $newColor.css("background-color", $("#newColor").css("background-color"));
      // ---here we are setting the background color of this li element to whatever the newColor div is in our slider area.. but only when we click on add color button..

// now we want to append our #newColor var li to the controls ul..
  // $(".controls ul").append($newColor);


  // //Select the new color
  // $newColor.click();

//the li is appended now, but doesnt get the white border to show it is selected.. we need a way to dynamically add the click handler to new appended li's .. bc by def when page loads the click handler is added to it but not when we add new ones.
  //  there is and its the on click..
   //   $(".controls").on("click", "li", function(){
      // we have to add "on" to the controls class. and bind click event.. it looks for if ur clicking on li's and then runs the function which changes that li to selected.. its dynamic for newly added li's

      // ??? kind of confusing but seems we are defining what click is in the first controls click, but not sure why it calls it auto when using click()..


// 4. now lets use the html canvas element to create a square to draw in on screen.
  // document.getElementByTagName("canvas")[0]  is same as:$("canvas")[0]
    // we are selecting the first element in the array of canvas elements
    // we need to select the specifc html element bc its got a special method on that object called: getContext() -- which lets pc know where to draw..

      // var context = $canvas[0].getContext("2d");

      // now we can do drawing code:
        // lets draw a square starting in top left corner of page......

        // context.beginPath() -- start path within this context..
        //context.moveTo(10,10)  --- 10px's .. telling virtual pen to move
        // context.lineTo(20 10)--now draw a line
        // context.lineTo(20 20)--now draw a line
        // context.closePath()--closes the remainng path .. which draws a square
        // context.stroke() --- will tell it to actualy draw the line


      // now lets draw using coordinates..
        // and implement using a drag feature..
        // first set mouseDown var to false..
        // and create a lastEvent var

            // var lastEvent;
            // var mouseDown = false;


            // we are act creating a mousedrag drawing feature here..

                // $canvas.mousedown(function(e){
                //   lastEvent = e;  -- so here we are capturing the mousedown and setting to lastEvent
                //   mouseDown = true;
                // }).mousemove(function(e){
                //   //Draw lines
                //   if(mouseDown) {
                //     context.beginPath();
                //     context.moveTo(lastEvent.offsetX, lastEvent.offsetY); --wher we pressdown
                //     context.lineTo(e.offsetX, e.offsetY); --draw line to the mousemove
                //     context.strokeStyle = color; - sets it to color we cached at top.
                //     context.stroke();
                //     lastEvent = e;
                //   }

                  // so when mouse is down on the cnavas.. set your lastEvent to the event and mouseDown to true..
                  // now when u move the mouse, if the mouseDown is true, its almost as if we are saying start from the x and y where our mouse went down..
                  // and draw a line to where we move our mouse to.. i think..

                  // }).mouseup(function(){
                  //   mouseDown = false;
                  // }).mouseleave(function(){
                  //   $canvas.mouseup();
                  // });




var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When "New Color" is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select

  changeColor(); //this will set the new color

  $("#colorSelect").toggle();

});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  // value comes from this: <input id="red" name="red" type="range" min=0 max=255 value=0>

  var g = $("#green").val();

  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change...call changeColor function : which sets the new color.. it sees where the range slider is at , gets teh value, returns it for each rgb and then sets background color of the newColor div to show the color..
$("input[type=range]").change(changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});

//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});











