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
        { tag: 'Revenue Logic', text: 'Most NRR problems are created at the point of sale—not post-sale.' },
        { tag: 'Moat Engineering', text: 'Moat Density = the degree to which revenue, product, and operations reinforce each other.' },
        { tag: 'Systems Architecture', text: 'At £4M–£20M ARR, headcount is rarely the constraint. System design is.' },
        { tag: 'Hiring Playbook', text: 'Hiring is not a talent search; it is a decision-risk management problem.' },
        { tag: 'Enterprise GTM', text: 'If your CRM doesn’t encode decision structure, it’s just a logging tool.' },
        { tag: 'AI Infrastructure', text: 'Autonomous infrastructure is the bridge between raw models and revenue-generating workflows.' }
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
    // 7. OpenClaw AI Chatbot Logic (Deterministic Constraint Engine)
    const bot = document.getElementById('openclaw-bot');
    const botInput = document.getElementById('bot-input');
    const botMessages = document.getElementById('bot-messages');
    const closeBot = document.getElementById('close-bot');
    const stateEl = document.getElementById('oc-state');
    const alignEl = document.getElementById('oc-alignment');
    const accessEl = document.getElementById('oc-access');

    let hasProvidedSchema = false;

    const setStatus = (state, alignText, accessText) => {
        stateEl.textContent = state;
        if(alignText) alignEl.textContent = alignText;
        if(accessText) accessEl.textContent = accessText;
    };

    const addMessage = (htmlContent, type = 'bot') => {
        const msg = document.createElement('div');
        msg.className = type === 'bot' ? 'bot-msg output-block' : 'bot-msg user-msg';
        msg.innerHTML = htmlContent;
        botMessages.appendChild(msg);
        botMessages.scrollTop = botMessages.scrollHeight;
    };

    const typeResponse = async (htmlContent, delay = 800) => {
        setStatus('PROCESSING...');
        addMessage('<span class="blink">SYSTEM: PROCESSING...</span>', 'bot');
        const processingNode = botMessages.lastChild;
        
        return new Promise(resolve => {
            setTimeout(() => {
                processingNode.innerHTML = htmlContent;
                resolve();
            }, delay);
        });
    };

    const processInput = async (input) => {
        setStatus('VALIDATING...');
        
        if (!hasProvidedSchema) {
            hasProvidedSchema = true;
            await typeResponse(`INPUT DETECTED: <br>Unstructured Query.<br><br>SYSTEM REJECTED.<br>MALFORMED INPUT. REQUIRED SCHEMA NOT SATISFIED.<br><br>FORMAT REQUIRED:<br>ARR:<br>ACV:<br>SALES_CYCLE:<br>TEAM_STRUCTURE:<br>PRIMARY_CONSTRAINT:`);
            setStatus('IDLE', 'LOW SIGNAL', 'RESTRICTED');
            return;
        }

        const hasArr = /ARR:/i.test(input);
        const hasAcv = /ACV:/i.test(input);
        const hasCycle = /SALES_CYCLE:/i.test(input);

        if (!hasArr && !hasAcv && !hasCycle) {
            await typeResponse(`INPUT VALIDATION: FAILED.<br>No decision structure detected. Provide deal architecture.`);
            setStatus('REJECTED', 'LOW SIGNAL', 'RESTRICTED');
            return;
        }

        // Constraint Mapping Logic
        let constraint = 'EXPANSION_FAILURE';
        let diagnosis = 'Expansion not systemized at point-of-sale.';
        let actions = `- Engineer usage, contract, and stakeholder triggers<br>- Embed logic directly into billing system<br>- Forward-model account expansion paths`;
        let impact = `- NRR: +15-30%<br>- Expansion velocity: +2x`;

        if (/velocity|cycle|slow|drag/i.test(input)) {
            constraint = 'DEAL_VELOCITY';
            diagnosis = 'Decision structure not encoded across stakeholders.';
            actions = `- Map stakeholder decision hierarchy per deal<br>- Insert procurement pre-alignment step<br>- Encode influence graph in CRM`;
            impact = `- Sales cycle: -30-45%<br>- Close probability: +15-25%`;
        }

        const responseHtml = `INPUT VALIDATION: SUCCESS<br><br>` + 
            `PRIMARY CONSTRAINT:<br>${constraint}<br>(${diagnosis})<br><br>` +
            `SYSTEM ACTIONS:<br>${actions}<br><br>` +
            `EXPECTED IMPACT:<br>${impact}`;

        await typeResponse(responseHtml, 1500);
        setStatus('OUTPUT_READY', 'VERIFIED (0.85)', 'FULL');
        
        setTimeout(() => setStatus('IDLE'), 3000);
    };

    botInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && botInput.value.trim() !== '') {
            const input = botInput.value.trim();
            addMessage(`> ${input}`, 'user');
            botInput.value = '';
            processInput(input);
        }
    });

    // 8. Alignment Gate Form Submission
    const alignmentForm = document.getElementById('alignment-form');
    const submitBtn = document.getElementById('submit-btn');

    if (alignmentForm) {
        alignmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                arr: document.getElementById('arr').value,
                acv: document.getElementById('acv').value,
                goal: document.getElementById('goal').value,
            };

            submitBtn.textContent = "VERIFYING ALIGNMENT...";
            submitBtn.disabled = true;

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                
                if (data.success) {
                    submitBtn.textContent = data.message;
                    submitBtn.style.background = "#0070f3";
                    alignmentForm.reset();
                } else {
                    submitBtn.textContent = "ALIGNMENT FAILED. RE-INITIALIZING...";
                    submitBtn.disabled = false;
                }
            } catch (err) {
                console.error('Contact Form Error:', err);
                submitBtn.textContent = "SYSTEM ERROR. RETRY LATER.";
                submitBtn.disabled = false;
            }
        });
    }

    closeBot.addEventListener('click', () => {
        bot.classList.toggle('minimized');
    });
});
