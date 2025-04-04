// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor link behavior
        
        // Hide all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('hidden'); // Hide all sections
        });

        // Get the target section ID
        const targetId = this.getAttribute('href').substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);

        // Show the target section
        targetSection.classList.remove('hidden');

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


