document.addEventListener("DOMContentLoaded", () => {

    /* --- 1. PRELOADER LOGIC --- */
    let progress = 0;
    const barElement = document.getElementById('preloader-bar');
    const preloader = document.getElementById('preloader');

    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                document.body.style.overflow = 'auto';
            }, 400);
        }
        if (barElement) {
            barElement.style.width = progress + '%';
        }
    }, 40);


    /* --- 2. MAGNETIC BUTTON MICRO-INTERACTION --- */
    const magnets = document.querySelectorAll('.magnetic-wrap');
    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const position = magnet.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            magnet.children[0].style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        magnet.addEventListener('mouseleave', () => {
            magnet.children[0].style.transform = `translate(0px, 0px)`;
            magnet.children[0].style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        });
        magnet.addEventListener('mouseenter', () => {
            magnet.children[0].style.transition = 'none';
        });
    });


    /* --- 3. SCROLL REVEAL (Intersection Observer) --- */
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


    /* --- 4. ACTIVE NAV STATE (Spy Scroll) --- */
    const sections = document.querySelectorAll('.section-spy, #hero');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-zinc-500');
                });
                const activeLink = document.querySelector(`.nav-link[data-section="${id}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-zinc-500');
                    activeLink.classList.add('text-white');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    });

    sections.forEach(section => navObserver.observe(section));


    /* --- 5. FOOTER YEAR --- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    /* --- 6. INITIALIZE DEFAULT LANGUAGE (EN) --- */
    setLanguage('en');
});


/* --- 7. LANGUAGE SWITCHER --- */
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;

    document.getElementById('lang-en').className = lang === 'en'
        ? 'text-white font-bold transition-all'
        : 'text-zinc-500 hover:text-white transition-all';
    document.getElementById('lang-id').className = lang === 'id'
        ? 'text-white font-bold transition-all'
        : 'text-zinc-500 hover:text-white transition-all';

    const translatableElements = document.querySelectorAll('[data-id][data-en]');
    translatableElements.forEach(el => {
        const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = targetText;
            return;
        }

        el.style.opacity = 0;
        setTimeout(() => {
            // Only replace pure text nodes to preserve child icon elements
            el.childNodes.forEach(child => {
                if (child.nodeType === 3) {
                    child.nodeValue = targetText;
                }
            });
            if (el.childNodes.length === 0 || (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3)) {
                el.textContent = targetText;
            }
            el.style.opacity = 1;
        }, 200);
        el.style.transition = 'opacity 0.2s ease-in-out';
    });
}
