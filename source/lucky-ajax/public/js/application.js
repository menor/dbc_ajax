$(document).ready(function () {
  $('form').submit(function(event){ // waits for click
    event.preventDefault(); // prevents default click
    var diceNumber = Math.round(Math.random() * 5 +1 );   // generate random number in js
    $.ajax({
      type: 'POST',
      url: '/rolls',
      data: { roll: diceNumber },
      success: function(response){
        $("#die img").replaceWith(' ')
        $("#die").append("<img src='/" + response + "'>")
      },
      failure: function(){
        console.log('YOU"RE THE WORST')
      }
    });
  });
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery



});
