// ========================================
// HAMBURGER MENU TOGGLE
// ========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Create overlay element for mobile menu
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function toggleMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// ========================================
// FAQ ACCORDION
// ========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all other items
        faqItems.forEach(other => {
            other.classList.remove('open');
            other.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle current item
        if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ========================================
// FEATURE TABS
// ========================================
const tabBtns = document.querySelectorAll('.tab-btn');
const featurePanels = document.querySelectorAll('.feature-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Remove active from all tabs and panels
        tabBtns.forEach(b => b.classList.remove('active'));
        featurePanels.forEach(p => p.classList.remove('active'));

        // Activate clicked tab and corresponding panel
        btn.classList.add('active');
        document.getElementById('tab-' + targetTab).classList.add('active');
    });
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
