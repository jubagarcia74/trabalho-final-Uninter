// ============================================
// CIÊNCIA DE DADOS AO ALCANCE DOS JOVENS
// JavaScript Principal
// ============================================

// NAVBAR TOGGLE (mobile)
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Highlight nav link ativo baseado no scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(function(section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .stat-card, .tutorial-content, .exercise-box, .chart-container').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});

// VERIFICAÇÃO DE EXERCÍCIOS
function checkAnswer(exerciseId, correctAnswer, explanation) {
    var input = document.getElementById(exerciseId + '-input');
    var feedback = document.getElementById(exerciseId + '-feedback');
    var userAnswer = input.value.trim().toLowerCase().replace(',', '.');

    correctAnswer = correctAnswer.toLowerCase().replace(',', '.');

    feedback.style.display = 'block';

    if (userAnswer === correctAnswer) {
        feedback.className = 'exercise-feedback feedback-correct';
        feedback.innerHTML = '<strong>Correto!</strong> ' + explanation;
    } else {
        feedback.className = 'exercise-feedback feedback-wrong';
        feedback.innerHTML = '<strong>Tente novamente.</strong> Dica: ' + explanation;
    }
}

// SMOOTH SCROLL para links internos
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
