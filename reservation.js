"use strict";

$(document).ready(function () {
  // Focus on the "Arrival date" text box
  $("#arrival_date").focus();

  // Form submit event handler
  $("#reservation_form").submit(function (event) {
    // Clear any previous error messages and styles
    $(".error-message").remove();
    $(".error-field").removeClass("error-field");

    // Validate each entry
    const arrivalDate = $("#arrival_date").val().trim();
    const nights = $("#nights").val().trim();
    const email = $("#email").val().trim();
    const name = $("#name").val().trim();
    const phone = $("#phone").val().trim();

    let hasError = false;

    // validation for arrival date  field
    if (arrivalDate === "") {
      displayError("arrival_date", "Please enter a valid Arrival date.");
      hasError = true;
    }

    // validation for number of nights field
    if (isNaN(nights) || nights === "") {
      displayError("nights", "Number of nights must be numeric.");
      hasError = true;
    }

    // validation for email field
    if (!emailPattern.test(email)) {
      displayError("email", "Please enter a valid email address.");
      hasError = true;
    }
    // validation for name field
    if (name === "") {
      displayError("name", "Please type your name.");
      hasError = true;
    }
    // validation for phone number  field
    if (phone === "") {
      displayError("phone", "Please enter your phone number.");
      hasError = true;
      // validation for phone number field must be numeric
    } else if (isNaN(phone)) {
      displayError("phone", "Phone number must be numeric.");
      hasError = true;
    }

    if (hasError) {
      // Cancel form submission
      event.preventDefault();
    } else {
    }
  });

  // Email pattern for validation
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // Function to display error message
  function displayError(fieldId, errorMessage) {
    const errorDiv = $("<div>").text(errorMessage).addClass("error-message");
    $(`#${fieldId}`).after(errorDiv);
    $(`#${fieldId}`).addClass("error-field");
  }
});
