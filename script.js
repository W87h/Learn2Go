/* JavaScript für interaktive Elemente der Lernplattform */

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menü Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Kontaktformular mit EmailJS senden
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Einfache Validierung
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const title = contactForm.title.value.trim();
            const message = contactForm.message.value.trim();

            if (!name || !email || !title || !message) {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Bitte füllen Sie alle Felder aus.';
                return;
            }

            // E-Mail-Format prüfen (einfacher Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
                return;
            }

            // EmailJS senden
            emailjs.sendForm('service_ffsmspw', 'template_bujayrn', contactForm)
                .then(() => {
                    formMessage.style.color = 'green';
                    formMessage.textContent = 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.';
                    contactForm.reset();
                }, (error) => {
                    formMessage.style.color = 'red';
                    formMessage.textContent = 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
                    console.error('EmailJS Fehler:', error);
                });
        });
    }

    // Interaktive Übungen für Wortarten

function checkAnswer1() {
    const answerRaw = document.getElementById('exercise1').value;

    const result = document.getElementById('result1');

    // Bereinigen: Punkte, Zero-Width-Zeichen, Leerzeichen um Kommas
    let normalizedAnswer = answerRaw
        .replace(/\u200B/g, '')             // Entferne unsichtbare Zeichen
        .replace(/\s*,\s*/g, ',')           // Normiere Kommas
        .replace(/\.+$/, '')                // Entferne Punkt am Ende
        .trim()                             // Entferne Leerzeichen außen
        .toLowerCase();                     // Kleinschreibung

    // Für Debug-Zwecke in der Konsole ausgeben
    console.log('Benutzereingabe (normalisiert):', normalizedAnswer);

    const correctAnswers = [
        'artikel,adjektiv,nomen,verb,adverb'
    ];

    const isCorrect = correctAnswers.includes(normalizedAnswer);

    if (isCorrect) {
        result.textContent = 'Richtig!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Falsch, versuche es noch einmal.';
        result.style.color = 'red';
    }
}


    function checkAnswer2() {
        const answerRaw = document.getElementById('exercise2').value.trim();
        const result = document.getElementById('result2');
        const correctAnswers = ['springt, rennt, lacht', 'springt rennt lacht'];
        const isCorrect = correctAnswers.some(correct => correct === answerRaw);
        if (isCorrect) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal. Achte auf Groß- und Kleinschreibung.';
            result.style.color = 'red';
        }
    }

function checkAnswer3() {
    const answerRaw = document.getElementById('wortarten-exercise3').value.trim();
    const result = document.getElementById('wortarten-result3');
    const correctAnswers = ['interessant', 'adjektiv'];
    const isCorrect = correctAnswers.some(correct => correct.toLowerCase() === answerRaw.toLowerCase());
    if (isCorrect) {
        result.textContent = 'Richtig!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Falsch, versuche es noch einmal.';
        result.style.color = 'red';
    }
}

function checkWortartenAnswer1() {
    const answer = document.getElementById('wortarten-exercise1').value.toLowerCase();
    const result = document.getElementById('wortarten-result1');
    const correctAnswers = ['nomen', 'substantive', 'nomen (substantive)'];
    if (correctAnswers.includes(answer)) {
        result.textContent = 'Richtig!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Falsch, versuche es noch einmal.';
        result.style.color = 'red';
    }
}

function checkWortartenAnswer2() {
    const answer = document.getElementById('wortarten-exercise2').value.toLowerCase();
    const result = document.getElementById('wortarten-result2');
    const correctAnswers = ['adjektive', 'adjektiv'];
    if (correctAnswers.includes(answer)) {
        result.textContent = 'Richtig!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Falsch, versuche es noch einmal.';
        result.style.color = 'red';
    }
}

function checkWortartenAnswer3() {
    const answer = document.getElementById('wortarten-exercise3').value.toLowerCase();
    const result = document.getElementById('wortarten-result3');
    const correctAnswers = ['verben', 'verb'];
    if (correctAnswers.includes(answer)) {
        result.textContent = 'Richtig!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Falsch, versuche es noch einmal.';
        result.style.color = 'red';
    }
}

    // Interaktive Übungen für Satzglieder bestimmen

    function checkAnswer4() {
        const answer = document.getElementById('exercise1').value.toLowerCase();
        const result = document.getElementById('result1');
        const correctAnswers = ['nach dem unterricht spielen die kinder im park fussball', 'nach dem unterricht'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer5() {
        const answer = document.getElementById('exercise2').value.toLowerCase();
        const result = document.getElementById('result2');
        const correctAnswers = ['der vogel fliegt durch die luft', 'der vogel'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer6() {
        const answer = document.getElementById('exercise3').value.toLowerCase();
        const result = document.getElementById('result3');
        const correctAnswers = ['am wochenende besucht anna ihre grosseltern mit dem fahrrad', 'am wochenende'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Zeichensetzung

    function checkAnswer7() {
        const answer = document.getElementById('exercise1').value.toLowerCase();
        const result = document.getElementById('result1');
        const correctAnswers = ['lisa rief, warum bist du so spät dran?', 'lisa rief warum bist du so spät dran?', 'lisa rief, warum bist du so spät dran', 'lisa rief warum bist du so spät dran'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer8() {
        const answer = document.getElementById('exercise2').value.toLowerCase();
        const result = document.getElementById('result2');
        const correctAnswers = ['obwohl es regnete, gingen wir spazieren', 'obwohl es regnete gingen wir spazieren'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer9() {
        const answer = document.getElementById('exercise3').value.toLowerCase();
        const result = document.getElementById('result3');
        const correctAnswers = ['max sagte: ich habe keine lust auf hausaufgaben', 'max sagte ich habe keine lust auf hausaufgaben'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Zeitformen

    function checkAnswer10() {
        const answer = document.getElementById('exercise1').value.toLowerCase();
        const result = document.getElementById('result1');
        const correctAnswers = ['perfekt', 'im perfekt', 'im perfekt tense', 'perfekt tense'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer11() {
        const answer = document.getElementById('exercise2').value.toLowerCase();
        const result = document.getElementById('result2');
        const correctAnswers = ['futur i', 'futur 1', 'futur'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer12() {
        const answer = document.getElementById('exercise3').value.toLowerCase();
        const result = document.getElementById('result3');
        const correctAnswers = ['plusquamperfekt', 'plusquam perfekt'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Mathematik

    function checkAnswer13() {
        const answer = document.getElementById('answer1').value.toLowerCase();
        const result = document.getElementById('feedback1');
        const correctAnswers = ['10'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig! 👍';
            result.style.color = 'green';
        } else {
            result.textContent = 'Leider falsch. Versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer14() {
        const answer = document.getElementById('answer2').value.toLowerCase();
        const result = document.getElementById('feedback2');
        const correctAnswers = ['12'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig! 👍';
            result.style.color = 'green';
        } else {
            result.textContent = 'Leider falsch. Versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer15() {
        const answer = document.getElementById('answer3').value.toLowerCase();
        const result = document.getElementById('feedback3');
        const correctAnswers = ['ja'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig! 👍';
            result.style.color = 'green';
        } else {
            result.textContent = 'Leider falsch. Versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Aktiv und Passiv

    function checkAnswer16() {
        const answer = document.getElementById('exercise1').value.toLowerCase();
        const result = document.getElementById('result1');
        const correctAnswers = ['das auto wird vom mechaniker repariert', 'das auto wird repariert'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer17() {
        const answer = document.getElementById('exercise2').value.toLowerCase();
        const result = document.getElementById('result2');
        const correctAnswers = ['die mutter kocht das essen', 'das essen kocht die mutter'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer18() {
        const answer = document.getElementById('exercise3').value.toLowerCase();
        const result = document.getElementById('result3');
        const correctAnswers = ['aktiv', 'passiv'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Direkte und Indirekte Rede

    function checkAnswer19() {
        const answer = document.getElementById('exercise1').value.toLowerCase();
        const result = document.getElementById('result1');
        const correctAnswers = ['er sagt, er sei krank', 'er sagt, dass er krank sei', 'er sagt, er sei krank.', 'er sagt, dass er krank sei.'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer20() {
        const answer = document.getElementById('exercise2').value.toLowerCase();
        const result = document.getElementById('result2');
        const correctAnswers = ['die lehrerin sagt, dass morgen der test beginnt', 'die lehrerin sagt, morgen beginnt der test', 'die lehrerin sagt, dass morgen der test beginnt.', 'die lehrerin sagt, morgen beginnt der test.'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer21() {
        const answer = document.getElementById('exercise3').value.toLowerCase();
        const result = document.getElementById('result3');
        const correctAnswers = ['er fragt, was ich am wochenende mache', 'er fragt, was ich am wochenende mache?', 'er fragt, was ich am wochenende mache.'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Satzglieder bestimmen

    function checkAnswer4() {
        const answer = document.getElementById('exercise4').value.toLowerCase();
        const result = document.getElementById('result4');
        const correctAnswers = ['adverbiale bestimmung der zeit', 'adverbiale bestimmung zeit', 'adverbiale zeit', 'am morgen'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer5() {
        const answer = document.getElementById('exercise5').value.toLowerCase();
        const result = document.getElementById('result5');
        const correctAnswers = ['prädikat', 'praedikat', 'pradikat'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer6() {
        const answer = document.getElementById('exercise6').value.toLowerCase();
        const result = document.getElementById('result6');
        const correctAnswers = ['adverbiale bestimmung der art und weise', 'adverbiale art und weise', 'adverbiale bestimmung art und weise', 'adverbiale bestimmung', 'adverbiale'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Interaktive Übungen für Zeichensetzung

    function checkAnswer7() {
        const answer = document.getElementById('exercise7').value.toLowerCase();
        const result = document.getElementById('result7');
        const correctAnswers = ['.', 'punkt', 'punkt (.)'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer8() {
        const answer = document.getElementById('exercise8').value.toLowerCase();
        const result = document.getElementById('result8');
        const correctAnswers = [',', 'komma', 'komma (,)'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    function checkAnswer9() {
        const answer = document.getElementById('exercise9').value.toLowerCase();
        const result = document.getElementById('result9');
        const correctAnswers = ['„“', 'anführungszeichen', 'anführungszeichen („ “)'];
        if (correctAnswers.includes(answer)) {
            result.textContent = 'Richtig!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Falsch, versuche es noch einmal.';
            result.style.color = 'red';
        }
    }

    // Pythagoras Übungsantworten prüfen
    document.querySelectorAll('.check-btn').forEach(button => {
        button.addEventListener('click', () => {
            const userAnswer = button.previousElementSibling.value.trim().toLowerCase();
            const correctAnswer = button.getAttribute('data-answer').toLowerCase();
            const feedbackId = button.getAttribute('data-feedback');
            const feedbackElement = document.getElementById(feedbackId);

            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = "Richtig! 👍";
                feedbackElement.style.color = "green";
            } else {
                feedbackElement.textContent = "Leider falsch. Versuche es noch einmal.";
                feedbackElement.style.color = "red";
            }
        });
    });
});
