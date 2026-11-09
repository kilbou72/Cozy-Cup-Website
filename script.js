
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// DAILY SPECIALS BUTTON

const specialsButton = document.getElementById("specialsButton");
const specialsList = document.getElementById("specialsList");

specialsButton.addEventListener("click", function() {

    specialsList.classList.toggle("hidden");

    if (specialsList.classList.contains("hidden")) {

        specialsButton.textContent = "Show Weekly Specials +";
        specialsButton.setAttribute("aria-expanded", "false");

    } else {

        specialsButton.textContent = "Hide Weekly Specials −";
        specialsButton.setAttribute("aria-expanded", "true");

    }

});


// CONTACT FORM SUBMISSION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Display a confirmation message
    formMessage.textContent =
        "Thanks for reaching out! Cozy Cup Café will get back to you soon.";

    // Clear the form fields
    contactForm.reset();

});


// NAVIGATION LINK HIGHLIGHTING

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        // Remove active class from all links
        navigationLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        // Highlight the selected link
        link.classList.add("active");

    });

});
