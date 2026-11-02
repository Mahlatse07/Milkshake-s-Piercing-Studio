
const enquiryForm = document.getElementById("enquiryForm");
const enquiryResponse = document.getElementById("enquiryResponse");

enquiryForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    if (!enquiryForm.checkValidity()) {
        enquiryForm.reportValidity();
        return;
    }

    enquiryResponse.textContent = "Sending your enquiry...";

    const formData = new FormData(enquiryForm);

    try {
        const response = await fetch(enquiryForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            enquiryResponse.textContent =
                "Thank you! Your enquiry has been sent successfully.";

            enquiryForm.reset();

        } else {
            enquiryResponse.textContent =
                "Sorry, your enquiry could not be sent. Please try again.";
        }

    } catch (error) {
        enquiryResponse.textContent =
            "Connection error. Please check your internet and try again.";
    }
});