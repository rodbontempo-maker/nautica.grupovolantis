// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    // Random Hero Image
    const heroImages = [
        'assets/images/yacht-2.jpg',
        'assets/images/yacht-4.jpg',
        'assets/images/yacht-5.jpg',
        'assets/images/yacht-8.jpg'
    ];

    
    const heroImgElement = document.getElementById('hero-img');
    if (heroImgElement) {
        const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
        heroImgElement.src = randomImage;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-volantis-blue/95', 'backdrop-blur-md', 'shadow-lg', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('bg-volantis-blue/95', 'backdrop-blur-md', 'shadow-lg', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Change icon based on state
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        } else {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        }
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Select elements to animate (we need to add classes to them in HTML or do it dynamically)
    // For simplicity, let's add the classes to sections or major blocks dynamically here
    const animatedElements = document.querySelectorAll('section > div, .service-card');
    
    // Add initial state classes to these elements manually here for robustness if not in HTML
    // But let's look for specifically marked items or just main section children
    document.querySelectorAll('section h2, section p, .grid > div, section form').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    // Form Handling (Mock)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerHTML = '<i class="ph ph-spinner animate-spin"></i> Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="ph ph-check-circle"></i> Enviado com Sucesso!';
            btn.classList.remove('bg-slate-900');
            btn.classList.add('bg-green-600');
            
            setTimeout(() => {
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                btn.classList.remove('bg-green-600');
                btn.classList.add('bg-slate-900');
            }, 3000);
        }, 1500);
    });
});
