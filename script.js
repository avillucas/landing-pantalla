document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Recoger datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const cantidad = document.getElementById('cantidad').value;
            
            // Disparar Evento GTM en el dataLayer
            if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'form_submission_pizarra',
                    'form_data': {
                        'nombre': nombre,
                        'email': email,
                        'cantidad': cantidad
                    }
                });
            }

            // Preparar mensaje para WhatsApp
            const numeroWhatsApp = "54911XXXXXXXX"; // Reemplazar con el número real
            const textoMensaje = `Hola! Soy ${nombre} (${email}). Solicito presupuesto universitario por la pizarra Tresolcafe 65. Cantidad estimada: ${cantidad} unidades.`;
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;
            
            // Redirigir a WhatsApp
            window.location.href = urlWhatsApp;
        });
    }

    // Smooth scroll para el botón CTA
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
