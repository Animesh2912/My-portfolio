document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const formData = new FormData(contactForm);
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    alert("Your message has been sent!");
    contactForm.reset();
  });
  function validateForm() {
    let valid = true;
    if (nameInput.value.trim() === "") {
      alert("Name is required.");
      valid = false;
    }
    if (emailInput.value.trim() === "") {
      alert("Email is required.");
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      alert("Invalid email address.");
      valid = false;
    }
    if (messageInput.value.trim() === "") {
      alert("Message is required.");
      valid = false;
    }
    return valid;
  }
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
});
