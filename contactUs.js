// Get elements
const contactModal = document.getElementById("contactModal");
const helpButton = document.getElementById("contact");
const closeContactModal = document.getElementById("closeContactModal");
const sendMessageButton = document.getElementById("sendMessageButton");

// Open Contact Modal when Help button is clicked
helpButton.addEventListener("click", () => {
  contactModal.classList.remove("hidden");
  contactModal.classList.add("flex");
});

// Close Contact Modal
closeContactModal.addEventListener("click", () => {
  contactModal.classList.add("hidden");
  contactModal.classList.remove("flex");
});

// Send Message and Show Notification
sendMessageButton.addEventListener("click", () => {
  alert("Your message has been sent successfully!");
  contactModal.classList.add("hidden");
  contactModal.classList.remove("flex");

  // Clear form fields
  document.getElementById("contactForm").reset();
});
