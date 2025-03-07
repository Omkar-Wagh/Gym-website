
refreshInterval = setInterval(() => next.click(), 5000);
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
 
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementBysId('email').value;
    let message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Your message has been sent!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill all fields!');
    }
});

// Toggle menu
// function toggleMenu() {
//     let menu = document.getElementById("menu");
//     menu.classList.toggle("show");
// }

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
    
    document.addEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
    let menu = document.getElementById("menu");
    let hamburger = document.querySelector(".hamburger");

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}


// contact form
document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);
    
    const response = await fetch(form.action, {
        method: form.method,
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        alert("✅ Message sent successfully!");
        form.reset();
    } else {
        alert("❌ Error sending message. Please try again.");
    }
});
