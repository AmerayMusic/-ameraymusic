// ============================================================
// AmerayMusic — Interaccions de la pàgina principal
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------
    // 1. MENÚ DE NAVEGACIÓ MÒBIL
    // --------------------------------------------------------

    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {

        // Obrir i tancar el menú
        navToggle.addEventListener('click', () => {

            const isOpen = mainNav.classList.toggle('open');

            navToggle.setAttribute(
                'aria-expanded',
                isOpen ? 'true' : 'false'
            );

            navToggle.setAttribute(
                'aria-label',
                isOpen ? 'Tancar menú' : 'Obrir menú'
            );

        });

        // Tancar el menú quan es selecciona un enllaç
        mainNav.querySelectorAll('a').forEach(link => {

            link.addEventListener('click', () => {

                mainNav.classList.remove('open');

                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Obrir menú');

            });

        });

        // Tancar el menú amb la tecla Escape
        document.addEventListener('keydown', event => {

            if (event.key === 'Escape') {

                mainNav.classList.remove('open');

                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Obrir menú');

            }

        });

    }


    // --------------------------------------------------------
    // 2. BOTÓ «CARREGAR MÉS»
    // --------------------------------------------------------

    const loadMoreBtn = document.getElementById('load-more');

    if (loadMoreBtn) {

        loadMoreBtn.addEventListener('click', () => {

            const hiddenCards = document.querySelectorAll('.hidden-card');

            hiddenCards.forEach(card => {
                card.classList.remove('hidden-card');
            });

            loadMoreBtn.hidden = true;

        });

    }


    // --------------------------------------------------------
    // 3. ANY AUTOMÀTIC AL PEU DE PÀGINA
    // --------------------------------------------------------

    const yearElement = document.getElementById('year');

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    // --------------------------------------------------------
    // 4. NAVEGACIÓ AMB ÀNCORA
    // --------------------------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener('click', event => {

            const targetId = link.getAttribute('href');

            // Ignorar enllaços buits com href="#"
            if (!targetId || targetId === '#') {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Actualitzar l'adreça sense recarregar la pàgina
                history.replaceState(null, '', targetId);

            }

        });

    });


    // --------------------------------------------------------
    // 5. TANCAR EL MENÚ EN CANVIAR A PANTALLA GRAN
    // --------------------------------------------------------

    const desktopBreakpoint = window.matchMedia('(min-width: 769px)');

    const resetMobileMenu = event => {

        if (event.matches && mainNav && navToggle) {

            mainNav.classList.remove('open');

            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Obrir menú');

        }

    };

    if (desktopBreakpoint.addEventListener) {

        desktopBreakpoint.addEventListener('change', resetMobileMenu);

    } else {

        // Compatibilitat amb navegadors antics
        desktopBreakpoint.addListener(resetMobileMenu);

    }

});
