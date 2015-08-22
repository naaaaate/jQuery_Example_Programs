//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

// tldr - $('<select></select>')  -- creates a select dom element
        // -append() --we are appending to end of some div..



//tldr - media queries - min-width of iphone screen is portrait: 320px  landscape: 568px;



// 1. lets create a $select var and append it to the menu..
  // var $select = $("<select></select>");
  // $("#menu").append($select);


// 2. cycle over menu links..
  // so select $("#menu a")  --we can select a links underneath the menu id
  // to cycle we use .each()  ... so $("#menu a").each(function(){  will cycle over each link and execute a function for EACH link!
    // we want to get the text and the href of each a link to build up our options..
    // lets create an $anchor var for the a link :   var $anchor = $(this)

    // options are literal options in a select menu..
      //  var $option = $("<option></option>");

    // we set the text of the option to be equal to the anchor's text..
      //   $option.text($anchor.text())

    // now we can append our option to the select menu..
      //    $select.append($option)

    // lets set the option's value to be the actual href of the link we are cycling over..
      //   $option.val($anchor.attr("href"))

    // Now if you look at index.html... the select menu's options are filled with the text of the anchor element: Home, about, contact, events, faqs, etc..
      // and if u inspect elements, the VALUE is set to the actual href of links... ie: index.html, support.html, about.html ..


// 3.  Lets create a button now.. append it to menu, and bind a click handler to the button.. and want to navigate to whatever the current location of the select box is.. ie: so if select is Home, we want to go to index.html..
  //use the getter version of the val() method..
    //  $select.val() -- will give you wutever the select option is..ie: like home.. it will give u the value of home which is index.html..
    // the select value changes to the selcted option..

    // now lets change the window's location..
      // u can do this in JS by using window.location to change browser window.. lets set it to value of whatever select option we have so we can change pages..
      //  window.location = $select.val()


// 4. lets use css to hide ul list items when screen is in mobile phone view..
  // mobile view iphone is : 320px portrait, and 568px landscape

//   @media (min-width: 320px) and (max-width: 568px) {
//      #menu ul {
//         display:none;
//      }
//    }

// @media (min-width: 568px) {
//   #menu select, #menu button {
//     display:none;
//   }
// }


// --so we set display of nav links at top to none when it is in mobile view
//  --we set select dropdown to none when its in browser view..


  // now lets see if the a element's parent is selected and if so, set that to be the option shown in the select box... so if the li which is the parent, is selected, then set the option to be selected in select box..
    // so check if the anchors parent is selected by ... parent() method..
      // so parent() --actually returns the parent element, and any method called after is for that parent object..
      //  we can write code to test if that parent element has the class: ".Selected"  with the: hasClass() method

      // ie: $("#myDiv").hasClass("foo")  -- does the div have class of foo?

      //if($anchor.parent().hasClass("selected")) {  --checks if parent element of anchor has the class of selected on it.. if it does, we want to alter the option element to have the selected attribute..

        // selected attribute on OPTION element..  <option selected> </option>
          //  selected is a true or false boolean property
          //  now we can edit a property on an option element by settting it to true or false with the prop() method..

          // so it looks like this:
              //Deal with selected options depending on current page
                // if($anchor.parent().hasClass("selected")) {
                //   $option.prop("selected", true);
                // }
          // --this says if class selected is on the anchors parent element(which is the li) then change the option's selected property that we will append to teh select box, to true..
          // so whatever page we are on that li will have the selected class on it.. and it will change the select box to correspond with taht option..

// 5.  lets put a change listener on select item so that we dont need to click go button anymore..
  //so we got rid of button and put a change event right on the select eleement..

// $select.change(function(){
//   //Go to select's location
//   window.location = $select.val();
// });




//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

// so now u have a select drop down box.. with options.. and each option has a value..
//the only option that has prop of selected to true is home.. all others dont have that.

//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});








