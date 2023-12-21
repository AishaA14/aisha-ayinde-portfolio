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
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.display = 'block';
        }
    }
        // const carousel = document.getElementById('controls-carousel');

        // // Set a higher z-index for the navbar
        // navbar.style.zIndex = '2';

        // // Set a lower z-index for the carousel
        // carousel.style.zIndex = '1';

    // var toggleButton = document.getElementById("toggleButton");
    // var menuContainer = document.querySelector(".menu-container");

    // toggleButton.addEventListener("click", function() {
    //     menuContainer.classList.toggle("active");
    // });


    const backToTopButton = document.getElementById("back-to-top");
    // Show or hide the button based on the scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
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
   
    const titleElement = document.getElementById('title');
    const subtitleElement = document.getElementById('subtitle');
    const text1 = "Hi, I'm Aisha";
    const text2 = "I'm a Software Developer based in London";
    const speed = 100; // typing speed in milliseconds

    function typeWriter(element, text, i, cb) {
        if (i < text.length) {
            if (text.substring(i, i + 5).toUpperCase() === 'AISHA') {
                // If the current substring is 'AISHA', add it with a class for styling
                element.innerHTML += '<span class="pink-text">' + text.substring(i, i + 5) + '</span>';
                i += 4; // Skip the next four characters
            } else {
                // For other characters, add them normally
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(function() {
                typeWriter(element, text, i, cb);
            }, speed);
        } else {
            setTimeout(cb, speed * 2);
        }
    }

    // Start the typewriter effect
    typeWriter(titleElement, text1, 0, function() {
        // Add a cursor element
        titleElement.insertAdjacentHTML('beforeend', '<span class="cursor"></span>');
        typeWriter(subtitleElement, text2, 0, function() {
            // Remove the cursor after typing
            document.querySelector('.cursor').remove();
        });
    });
// gsap animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: '35% 80%',
        // where to start the animation in relation to the element 
        // i.e. start at the top of the animated element, or 35% from the top
        // start at the center of the viewport
        end: 'bottom 80%',
        // end at end of view port of around 80% of the view port
        // position of start and end can determine how long it takes
        scrub: true,
        markers: false
    }
})

tl.to('.animated-element',{
    x: 800
    // 800 pixels
} )
        // smooth scroll
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  });

  
