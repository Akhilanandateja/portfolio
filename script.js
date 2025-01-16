window.addEventListener('DOMContentLoaded', () => {
    const lines = [
        "FrontEnd Development.",
        "BackEnd Development.",
        "DSA.",
        "Problem Solving.",
        "Machine Learning & AI."
       
    ];
    const typedLine = document.getElementById('typed-line');
    let lineIndex = 0;
    function typeText(text, callback) {
        let charIndex = 0;
        typedLine.style.width = "0"; // Reset width for typing effect
        // Typing effect
        const typingInterval = setInterval(() => {
            typedLine.textContent = text.slice(0, charIndex + 1);
            charIndex++;
            typedLine.style.width = `${charIndex}ch`; // Dynamically set width based on characters
            if (charIndex === text.length) {
                clearInterval(typingInterval);
                setTimeout(callback, 1500); // Pause before replacing with next line
            }
        }, 100); // Typing speed
    }
    function startTypingEffect() {
        typeText(lines[lineIndex], () => {
            lineIndex = (lineIndex + 1) % lines.length; // Loop back to the first line
            startTypingEffect(); // Recursively call the next typing effect
        });
    }
    // Start the typing effect
    startTypingEffect();
});

//menu

    document.getElementById('menu-icon').addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
    });

// Get the "Go to Top" button element
const goToTopButton = document.getElementById('go-to-top');

// Function to show or hide the button based on scroll position
window.onscroll = function() {
    // Check if the user has scrolled down more than 100 pixels
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.classList.add('show'); // Add class to show button
    } else {
        goToTopButton.classList.remove('show'); // Remove class to hide button
    }
};

// Add click event listener to the button
goToTopButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
let navbar = document.getElementById("navbar");
let timeoutId = null;

// Function to show the navbar
function showNavbar() {
    navbar.style.top = "0"; // Bring the navbar into view
}

// Function to hide the navbar
function hideNavbar() {
    navbar.style.top = "-100px"; // Move the navbar out of view
}

// Function to handle scroll activity
function handleScroll() {
    showNavbar(); // Show the navbar on scroll
    clearTimeout(timeoutId); // Clear any existing timeout
    timeoutId = setTimeout(hideNavbar, 2000); // Set timeout to hide navbar after 2 seconds
}

// Add event listener to track scroll activity
window.addEventListener("scroll", handleScroll);


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Show the button when the user scrolls down
window.onscroll = function() {
    const upButton = document.getElementById("upButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        upButton.style.display = "flex";
    } else {
        upButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
