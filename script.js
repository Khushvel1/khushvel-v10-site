document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        const lerp = (start, end, amt) => (1 - amt) * start + amt * end;
        cursorX = lerp(cursorX, mouseX, 0.2);
        cursorY = lerp(cursorY, mouseY, 0.2);
        
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .os-card, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(4)';
            cursor.style.background = 'rgba(255, 255, 255, 0.1)';
            cursor.style.border = '1px solid #fff';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(4)', '');
            cursor.style.background = '#fff';
            cursor.style.border = 'none';
        });
    });

    // 2. Smooth Scroll Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section, .os-card, .project-card, h1, h2, footer');
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 1.2s cubic-bezier(0.19, 1, 0.22, 1) ${index * 0.05}s, transform 1.2s cubic-bezier(0.19, 1, 0.22, 1) ${index * 0.05}s`;
        revealObserver.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 3. Dynamic Interference
    const interferenceText = document.querySelector('.interference p');
    const quotes = [
        "CLARITY AT THE BEGINNING SAVES TIME AT THE END",
        "MOAT DENSITY IS THE ONLY DEFENSE",
        "STRUCTURE BEATS SPEED",
        "TRUST IS A REVENUE ENGINE",
        "SYSTEMS OVER INDIVIDUALS",
        "REVENUE IS A BYPRODUCT OF LOGIC"
    ];
    let quoteIndex = 0;

    setInterval(() => {
        interferenceText.style.opacity = '0';
        setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            interferenceText.textContent = quotes[quoteIndex];
            interferenceText.style.opacity = '1';
        }, 500);
    }, 4000);

    // 5. System Status Clock
    const clock = document.getElementById('live-clock');
    const updateClock = () => {
        const now = new Date();
        clock.textContent = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
    };
    setInterval(updateClock, 1000);
    updateClock();

    // 6. Logic Log Content Rotation
    const logContent = document.getElementById('log-content');
    const logEntries = [
        { tag: 'Revenue Logic', text: 'NRR is a lagging indicator of product-market fit. Expansion triggers are the leading indicator.' },
        { tag: 'Moat Engineering', text: 'Moat Density = Data Exclusivity + Integration Depth + Workflow Embed Score.' },
        { tag: 'Systems Architecture', text: 'Structure beats speed in high-ambiguity domains. Clarity at the beginning saves time at the end.' },
        { tag: 'Hiring Playbook', text: 'Hiring is not a talent search; it is a decision-risk management problem.' },
        { tag: 'Enterprise GTM', text: 'Reduced enterprise sales cycle from 180 to 85 days via procurement compression.' },
        { tag: 'AI Infrastructure', text: 'Autonomous AI infrastructure is the bridge between raw models and revenue-generating workflows.' }
    ];

    let logIndex = 0;
    const rotateLog = () => {
        logContent.style.opacity = '0';
        setTimeout(() => {
            logIndex = (logIndex + 1) % logEntries.length;
            const entry = logEntries[logIndex];
            logContent.innerHTML = `
                <div class="log-entry">
                    <span class="repo-tag">${entry.tag}</span>
                    <p>"${entry.text}"</p>
                </div>
            `;
            logContent.style.opacity = '1';
        }, 500);
    };
    // 7. OpenClaw AI Chatbot Logic
    const bot = document.getElementById('openclaw-bot');
    const botInput = document.getElementById('bot-input');
    const botMessages = document.getElementById('bot-messages');
    const closeBot = document.getElementById('close-bot');

    const addMessage = (text, type = 'bot') => {
        const msg = document.createElement('div');
        msg.className = type === 'bot' ? 'bot-msg' : 'bot-msg user-msg';
        msg.textContent = type === 'bot' ? `OPENCLAW: ${text}` : `USER: ${text}`;
        botMessages.appendChild(msg);
        botMessages.scrollTop = botMessages.scrollHeight;
    };

    botInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && botInput.value.trim() !== '') {
            const input = botInput.value.trim();
            addMessage(input, 'user');
            botInput.value = '';

            setTimeout(() => {
                const response = getBotResponse(input);
                addMessage(response, 'bot');
            }, 600);
        }
    });

    const getBotResponse = (input) => {
        const query = input.toLowerCase();
        if (query.includes('arr')) return "To scale from £4M to £20M, focus on deal velocity compression and ACV multipliers. ARR is the output of logic, not luck.";
        if (query.includes('moat')) return "Moat density is engineered through data exclusivity and workflow integration. It is the only defense against commoditization.";
        if (query.includes('hiring')) return "Hiring is decision-risk management. Use the Freelancer Playbook to filter for strategic integrators.";
        if (query.includes('systems')) return "Structure beats speed. Autonomous infrastructure is the bridge to revenue-generating workflows.";
        return "Inquiry noted. Strategic alignment required for deeper data access. Consult the V10 OS for further logic.";
    };

    closeBot.addEventListener('click', () => {
        bot.classList.toggle('minimized');
    });
});
