document.addEventListener('DOMContentLoaded', () => {
    console.log('V10 OS Initialized');

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Alignment Gate Submission
    const gateForm = document.querySelector('.gate-form form');
    if (gateForm) {
        gateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = gateForm.querySelector('button');
            submitBtn.textContent = 'Verifying Alignment...';
            submitBtn.disabled = true;

            // Mock submission delay
            setTimeout(() => {
                alert('Strategic Alignment Request Received. Your data is being indexed against the V10 OS.');
                submitBtn.textContent = 'Request Alignment Check';
                submitBtn.disabled = false;
                gateForm.reset();
            }, 2000);
        });
    }

    // Chatbot Trigger Mock
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    if (chatbotTrigger) {
        chatbotTrigger.addEventListener('click', () => {
            alert('AI Strategist (OpenClaw/ZeroClaw) is being initialized in this environment.');
        });
    }

    // Scroll Interference (Wim Method quotes)
    const interference = document.querySelector('.interference');
    const quotes = [
        "Clarity at the beginning saves time at the end.",
        "Moat Density is the only long-term defense.",
        "Structure beats speed in high-ambiguity domains.",
        "Revenue is a byproduct of systems, not individual effort.",
        "Trust is a revenue engine."
    ];

    let quoteIndex = 0;
    setInterval(() => {
        interference.style.opacity = 0;
        setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            interference.querySelector('p').textContent = `"${quotes[quoteIndex]}"`;
            interference.style.opacity = 1;
        }, 500);
    }, 5000);

    // Fade in sections on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
