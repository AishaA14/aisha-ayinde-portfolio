document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            showSection(targetSectionId);
        });
    });

    showSection("about"); // Show an initial section

    function showSection(sectionId) {
        document.querySelectorAll('section').forEach(function(section) {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Always show the navbar
        var navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.display = 'block';
        }
    }


    const backToTopButton = document.getElementById("back-to-top");
    // Show or hide the button based on the scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
    // Add click event to the "Back to Top" button
    // document.getElementById('back-to-top').addEventListener('click', function() {
    //     scrollTo(0); // Scroll to the top of the page
    // });
    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });


    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;

        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
   
  });

