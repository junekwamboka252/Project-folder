
// script.js

function downloadApp() {
    alert("Downloading the MindSpace app...");
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function validateForm(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
}
