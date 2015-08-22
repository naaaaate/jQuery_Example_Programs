//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// tldr - attr("href"), this, id="imageGallery", event.preventDefault();
// tldr - $overlay - jquery repres of an object get $
//        u can create dom elements w $('<div id="banana"></div>')
// tldr - css: display:none, width/height: 100% , position:absolute , rgba(0,0,0,0.7)
// tldr - $image = $('<img>'') -- create dom element assign to a jquery var..
//        $image.attr("src", imageLocation) --update an attr of an element like img w attr method! setter!
// tldr - attr("alt", captionText), children("img"), text(<p></p>)
//        hide(), show(), click(function(){}) , append() -- $overlay.append($image);








// 1. lets give id to the ul caled imageGallery now we can call all li's or a's within this id
// now we can do $("#imageGallery a").click()
  //and we want the href atribute of the a element.
  //  var imageLocation = $(this).attr("href"); -- gets the href attr of the a link we click on.

// 2. event.preventDefault() --stops default click behavior
  // we can console.log(href) that we click on.. to test.


// 3. lets add the overlay to body.. append to end.. use css to use z-index to bring above all other elements.
  // var $overlay = $('<div id="overlay"></div>');  --create a var for the overlay which is a div
  // $("body").append($overlay); -- append it somewhere.

  // now we have an overlay appended to body that isnt hidden.. but we can style it, give it height dimensions and display it to none at first in the css..
// #overlay {
//   background:rgba(0,0,0,0.7);
//   width:100%;
//   height:100%;
//   position:absolute;
//   top:0;
//   left:0;
//   display:none;
//   text-align:center;
// }


// 4. now lets add an image to an overlay..

  // create an $image variable:
     //  var $image = $("<img>");

  // append an image to the overlay:
   // $overlay.append($image);
  // then the overlay gets appeneded to the body:  $("body").append($overlay);

  // now lets add an img src with jquery.. in our function..
    //   var imageLocation = $(this).attr("href");
    // //Update overlay with the image linked in the link
    // $image.attr("src", imageLocation);
// so here we are getting the image location which is the href of the link we click..
// then we are updating the $image variable's src attribute by setting it to whatever the href we stored in var imageLocation..


  // now lets style the overlay image in css..
    // like margin-top: 10%;


  // now lets hide the overlay when it is clicked..
    // $overlay.click(function(){
      //Hide the overlay
      // $overlay.hide();

// 5. lets create a caption and add it to the end of the overlay..

  // create the var --
    // var $caption = $("<p></p>");

    //  $overlay.append($caption);  --lets now append this caption to the overlay after we append the image to the overlay.. so it looks like this:

      // overlay - image - caption.

  // now lets get the img's alt attribute and use that as the caption..
  // remember that the image is a child element of the a link ..
    //  so use children method to grab it..

      // $(this).children("img").attr("alt");
          //  -- this is the a link; children("img") is the child element we specify img of a ; then we call attr method and get the "alt" attribute of the img child.
      //  set this to a var called captionText
          //   var captionText = $(this).children("img").attr("alt");
      // Then use the .text method to set $caption 's inner text to this alt attribute caption.







var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the overlay.
  $overlay.show();

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});










