

// ======================================
// MILKSHAKE'S PIERCING STUDIO
// GALLERY FILTERS AND LIGHTBOX
// ======================================

// Get gallery elements
const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("closeLightbox");
const previousButton = document.getElementById("prevImage");
const nextButton = document.getElementById("nextImage");

let currentImageIndex = 0;
let visibleImages = [];

// ======================================
// 1. GALLERY FILTERS
// ======================================

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const selectedCategory = this.dataset.filter;

        // Highlight the selected button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        // Show or hide gallery pictures
        galleryItems.forEach(item => {

            const category = item.dataset.category;

            if (selectedCategory === "all" ||
                category === selectedCategory) {

                item.hidden = false;

            } else {

                item.hidden = true;
            }
        });

    });

});

// ======================================
// 2. GET VISIBLE GALLERY IMAGES
// ======================================

function updateVisibleImages() {

    visibleImages = Array.from(galleryItems)
        .filter(item => !item.hidden)
        .map(item => item.querySelector("img"))
        .filter(img => img !== null);

}

// ======================================
// 3. OPEN LIGHTBOX
// ======================================

galleryItems.forEach(item => {

    const image = item.querySelector("img");

    image.addEventListener("click", function () {

        updateVisibleImages();

        currentImageIndex = visibleImages.indexOf(this);

        showImage();

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

    });

});

// ======================================
// 4. DISPLAY SELECTED IMAGE
// ======================================

function showImage() {

    if (visibleImages.length === 0) return;

    lightboxImage.src = visibleImages[currentImageIndex].src;
    lightboxImage.alt = visibleImages[currentImageIndex].alt;

}

// ======================================
// 5. NEXT IMAGE
// ======================================

nextButton.addEventListener("click", function () {

    currentImageIndex++;

    if (currentImageIndex >= visibleImages.length) {
        currentImageIndex = 0;
    }

    showImage();

});

// ======================================
// 6. PREVIOUS IMAGE
// ======================================

previousButton.addEventListener("click", function () {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = visibleImages.length - 1;
    }

    showImage();

});

// ======================================
// 7. CLOSE LIGHTBOX
// ======================================

function closeLightbox() {

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

}

closeButton.addEventListener("click", closeLightbox);

// Close when clicking outside the image
lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});

// ======================================
// 8. KEYBOARD CONTROLS
// ======================================

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        nextButton.click();
    }

    if (event.key === "ArrowLeft") {
        previousButton.click();
    }

});
// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("show");
    });
}