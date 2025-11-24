document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Alert sederhana untuk CTA dan Form Kontak (Contoh)
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Terima kasih telah tertarik dengan funtech.id! Silakan cek bagian "Kontak" atau "Layanan" untuk detail lebih lanjut.'); // Disesuaikan
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Di dunia nyata, di sini Anda akan mengirim data ke server
            alert('Pesan Anda telah terkirim! funtech.id akan segera merespons. Terima kasih!'); // Disesuaikan
            this.reset(); // Mengosongkan form
        });
    }

    // 3. Efek saat Scroll (Opsional: Membuat header sedikit berubah)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(106, 27, 154, 0.95)'; // Ungu sedikit transparan
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });

});
