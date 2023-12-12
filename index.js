document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetSectionId = this.getAttribute('href').substring(1);
            showSection(targetSectionId);
        });
    });

    showSection("intro"); // Show an initial section, e.g., "intro"

    function showSection(sectionId) {
        document.querySelectorAll('section').forEach(function(section) {
            section.style.display = 'none';
        });

        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Always show the navbar
        var navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.display = 'block';
        }
    }
});
