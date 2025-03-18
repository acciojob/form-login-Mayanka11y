function getFormvalue(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Retrieve the form element
  const form = document.getElementById("form1");

  // Get the values of the first name and last name fields
  const firstName = form.elements["fname"].value.trim();
  const lastName = form.elements["lname"].value.trim();

  // Check if either field is empty
  if (!firstName || !lastName) {
    alert("Please fill in both First Name and Last Name fields.");
    return; // Exit the function if fields are empty
  }

  // Concatenate the first name and last name
  const fullName = `${firstName} ${lastName}`;

  // Display the full name in an alert
  alert(fullName);
}