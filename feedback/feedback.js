const openBtn = document.getElementById("open-popup");
const popup = document.getElementById("popup");
const feedbackForm = document.getElementById("feedback-form");

openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

/*feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const feedbackText = document.getElementById('feedback-text').value;
  const recipientEmail = "jayoabs72@gmail.com"; // Replace with your email address

  const emailSubject = "Feedback from website";
  const emailBody = `Feedback: ${feedbackText}`;
  const mailToLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailToLink; // Open email client pre-populated

  function sendEmail() {
    window.location.href = mailToLink;
  }
});



function send() {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const feedbackText = document.getElementById('feedback-text').value;
    const recipientEmail = "jayoabs72@gmail.com"; // Replace with your email address
  
    const emailSubject = "Feedback from website";
    const emailBody = `Feedback: ${feedbackText}`;
    const mailToLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;
  
    window.location.href = mailToLink; // Open email client pre-populated
  });
}*/


function send() {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const feedbackText = document.getElementById('feedback-text').value;
    const recipientPhoneNumber = "+256772615135"; // Replace with recipient's phone number

    const whatsappMessage = `Feedback: ${feedbackText}`;
    const whatsappLink = `https://wa.me/${recipientPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank'); // Open WhatsApp with pre-filled message
  });
}


