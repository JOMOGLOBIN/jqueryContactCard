$('#submitButton').click(function () {
  if ( $('#firstName').val() === "") {
    $('#output').text(`First Name is Required`);
  }
  else if ( $('#lastName').val() === "") {
    $('#output').text(`Last Name is Required`);
  }
  else if ( $('#phone').val() === "") {
    $('#output').text(`Phone number is required`);
  }
  else {
    $('#output').text(`Thank you ${$('#firstName').val()}
    ${$('#lastName').val()}. We will contact you soon at
    ${$('#phone').val()}`);
  }
})

// line 12 Using backticks to insert javascript inside of a string
// lines 2,5,8 Using .val() to access the value instead of grabbing entire string
// else if will roll through each failed check

// for last else, use .val()