

// ======================================
// MILKSHAKE'S PIERCING STUDIO
// LIVE SEARCH
// ======================================

const searchInputs = document.querySelectorAll(".site-search");

searchInputs.forEach(searchInput => {

    searchInput.addEventListener("input", function () {

        // Get the search text
        const searchText = this.value.toLowerCase().trim();

        // Find cards on the current page
        const cards = document.querySelectorAll(".searchable-card");

        const resultsMessage = this.parentElement.querySelector(".search-results");

        let matchingCards = 0;

        // Check every card
        cards.forEach(card => {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {

                card.hidden = false;
                matchingCards++;

            } else {

                card.hidden = true;

            }

        });

        // Display search results
        if (searchText === "") {

            resultsMessage.textContent = "";

        } else if (matchingCards === 0) {

            resultsMessage.textContent = "No matching results found.";

        } else {

            resultsMessage.textContent =
                matchingCards + " result(s) found.";

        }

    });

});
