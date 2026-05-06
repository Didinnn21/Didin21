/**
 * Didin | Informatics Engineering Portfolio JS
 * Fokus: Efisiensi, Smooth Interaction, & UI Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selektor Elemen
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // 2. Scroll Effects (Navbar Transformation)
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.classList.add('shadow-lg', 'navbar-scrolled');
            // Menambahkan blur lebih tebal saat di-scroll
            navbar.style.background = 'rgba(5, 8, 16, 0.95)';
        } else {
            navbar.style.padding = '18px 0';
            navbar.classList.remove('shadow-lg', 'navbar-scrolled');
            navbar.style.background = 'rgba(5, 8, 16, 0.7)';
        }
    };

    // 3. Active Link Switcher (Menandai menu sesuai posisi scroll)
    const activeMenuOnScroll = () => {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && 
                scrollPosition < section.offsetTop + section.offsetHeight) {
                
                navLinks.forEach(link => {
                    link.classList.remove('active', 'text-primary');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active', 'text-primary');
                    }
                });
            }
        });
    };

    // 4. Smooth Scroll for Navigation Links
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    
                    // Menutup menu mobile otomatis setelah klik (untuk Bootstrap)
                    const navCollapse = document.querySelector('.navbar-collapse');
                    if (navCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navCollapse);
                        bsCollapse.hide();
                    }

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // 5. Event Listeners
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        activeMenuOnScroll();
    });

    // Jalankan Smooth Scroll
    setupSmoothScroll();

    // Jalankan fungsi sekali saat load untuk cek posisi awal
    handleNavbarScroll();
});

// Ganti Typed JS Effect di script.js
var typed = new Typed('.typed-text', {
    strings: [
        'Kode & Jaringan', 
        'Laravel & MySQL', 
        'CCNA Network Architect', 
        'Full-stack Solutions'
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000, // Waktu tunggu sebelum menghapus teks
    loop: true,
    cursorChar: '|', // Karakter kursor modern
});

/**
 * Tips: Jika kamu menggunakan Typed.js atau AOS seperti saran sebelumnya, 
 * pastikan inisialisasinya ditaruh di bawah kode ini.
 */