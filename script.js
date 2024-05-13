document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var ticketType = document.getElementById('ticketType').value;
  
    // You can perform further validation here before submitting the form
    
    // Example: Checking if email is valid
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Example: Sending data to server (not implemented here)
    console.log('Submitting form...');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Ticket Type:', ticketType);
  
    // Simulating form submission
    alert('Registration Successful!');
    document.getElementById('registrationForm').reset();
  });
  
  function validateEmail(email) {
    // Very basic email validation, you can use a more robust regex pattern
    return /\S+@\S+\.\S+/.test(email);
  }