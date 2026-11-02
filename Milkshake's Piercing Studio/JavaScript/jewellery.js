
// Jewellery styles data
const jewelleryStyles = [
    { name: "Studs", category: "studs" },
    { name: "Hoops", category: "hoops" },
    { name: "Rings", category: "rings" },
    { name: "Barbells", category: "barbells" },
    { name: "Chains", category: "chains" }
];

// Get the jewellery list from HTML
const jewelleryList = document.getElementById("jewelleryList");

// Display jewellery styles dynamically
function displayJewellery(styles) {
    jewelleryList.innerHTML = "";

    styles.forEach(style => {
        const listItem = document.createElement("li");
        listItem.classList.add("searchable-card");

        listItem.textContent = style.name;
        listItem.dataset.category = style.category;

        jewelleryList.appendChild(listItem);
    });
}

// Display all styles when the page loads
displayJewellery(jewelleryStyles);
// Sort jewellery styles
const jewellerySort = document.getElementById("jewellerySort");

jewellerySort.addEventListener("change", function () {
    const sortOrder = this.value;

    let sortedStyles = [...jewelleryStyles];

    if (sortOrder === "az") {
        sortedStyles.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else if (sortOrder === "za") {
        sortedStyles.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    displayJewellery(sortedStyles);
});

// Jewellery filters
const filterButtons = document.querySelectorAll(".jewellery-filter");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const selectedCategory = this.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        if (selectedCategory === "all") {
            displayJewellery(jewelleryStyles);
        } else {
            const filteredStyles = jewelleryStyles.filter(style =>
                style.category === selectedCategory
            );

            displayJewellery(filteredStyles);
        }
    });
});