//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times


// tldr - keyup(passwordEvent) , focus(confirmPasswordEvent) , next() , val(),

// 1.  Lets first hide the hints in the index.html.. the hints are
//      inside of spans which are inside of a form..
//    i think best thing to do in projs is build it all.. then hide the things and show on events.
//   $("form span").hide()  -- here we hide span inside the form..

  // now lets put focus on password box when selected..'
  //  $("#password").focus(function(){
        // if pw length is valid.. hide the hint, or else show hint
      //   if($(this).val().length > 8) {
      //     // this = password, next = next element which is the span hint.
      //       // hide if its valid..
      //     $(this).next().hide();
      //       // show if its invalid pw length
      //   }else {
      //     $(this).next().show();
      //   }
      // })



// now lets just create a passwordEvent function that we can pass into the event handler so tht it runs when the password field gets focus.

// function passwordEvent(){
//     //Find out if password is valid
//     if($password.val().length > 8) {
//       //Hide hint if valid
//       $password.next().hide();
//     } else {
//       //else show hint
//       $password.next().show();
//     }
// }

// now $password.focus(passwordEvent).keyup(passwordEvent)
//    --will run everytime password input has focus.. and there is a keyup.


// 2.  now lets create a confirmPasswordEvent function.
  //that finds if passwords are matching..
  // if they are hide hints,
  // if not matching, show hints

// function confirmPasswordEvent() {
//   //Find out if password and confirmation match
//   if(arePasswordsMatching()) {
//     //Hide hint if match
//     $confirmPassword.next().hide();
//   } else {
//     //else show hint
//     $confirmPassword.next().show();
//   }
// }



//  lets create variables: and replace $password and $confirmPassword where needed in the functinos..

  // var $password = $("#password");
  // var $confirmPassword = $("#confirm_password");


// $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent)
  // we only call this function here bc were only concerened with it here.

// now $password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
  // when password input is focused in on , it will run password event and confirmPasswordEvent, same with keyup.. u can run MULTIPLE keyups and focus on one variable



// 3. now lets disable submit if pwords are invalid or dont match..
















var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  // the canSubmit returns true or false.. if it can submit it returns true, but we turn it into a false w the ! .. we want false bc if disabled is false ... then that means its true. and the button can submit.
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();









