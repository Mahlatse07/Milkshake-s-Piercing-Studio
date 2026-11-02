

// ======================================
// FAQ ACCORDION
// ======================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", function () {

        const answer = this.nextElementSibling;
        const isOpen = this.getAttribute("aria-expanded") === "true";

        // Open or close the selected answer
        this.setAttribute("aria-expanded", !isOpen);

        if (isOpen) {
            answer.style.maxHeight = null;
            this.querySelector("span").textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            this.querySelector("span").textContent = "−";
        }

    });

});
