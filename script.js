        
        
        
// Ensure the DOM is fully loaded before running script
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuIcon = mobileMenuButton.querySelector('i'); // Get the icon element
            
            // Check if elements exist before adding listeners
            if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
                const mobileMenuLinks = mobileMenu.querySelectorAll('a');

                // Toggle mobile menu visibility and icon
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('active');
                    mobileMenuButton.classList.toggle('active'); // Toggle class on button for icon change

                    if (mobileMenuButton.classList.contains('active')) {
                        mobileMenuIcon.classList.remove('fa-bars');
                        mobileMenuIcon.classList.add('fa-times'); // Change to close icon
                    } else {
                        mobileMenuIcon.classList.remove('fa-times');
                        mobileMenuIcon.classList.add('fa-bars'); // Change back to hamburger icon
                    }
                });

                // Close mobile menu when a link is clicked
                mobileMenuLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('active');
                        mobileMenuButton.classList.remove('active'); // Ensure button state is updated
                        mobileMenuIcon.classList.remove('fa-times');
                        mobileMenuIcon.classList.add('fa-bars'); // Change back to hamburger icon
                    });
                });
            }

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // FAQ Accordion functionality
            const faqQuestions = document.querySelectorAll('.faq-question');

            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const faqItem = question.closest('.faq-item');
                    faqItem.classList.toggle('active'); // Toggle active class on parent
                });
            });

            // Scroll to Top Button functionality
            const scrollToTopBtn = document.getElementById('scrollToTopBtn');

            if (scrollToTopBtn) {
                // Show/hide button based on scroll position
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) { // Show button after scrolling 300px
                        scrollToTopBtn.classList.add('show');
                    } else {
                        scrollToTopBtn.classList.remove('show');
                    }
                });

                // Scroll to top on button click
                scrollToTopBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        });