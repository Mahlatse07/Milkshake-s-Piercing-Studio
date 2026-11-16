
const contactForm = document.getElementById("contactForm");
const contactResponse = document.getElementById("contactResponse");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    contactResponse.textContent = "Sending your message...";

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            contactResponse.textContent =
                "Thank you! Your message has been sent successfully.";

            contactForm.reset();

        } else {
            contactResponse.textContent =
                "Sorry, your message could not be sent. Please try again.";
        }

    } catch (error) {
        contactResponse.textContent =
            "Connection error. Please check your internet and try again.";
    }
});