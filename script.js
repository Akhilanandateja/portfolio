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




document.getElementById('menu-icon').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show'); // Toggle the 'show' class
});