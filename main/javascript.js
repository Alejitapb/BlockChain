// Navegación responsive
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle menu móvil
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Cerrar menu al hacer click en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Cerrar menu al hacer click fuera
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
});

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Efectos de scroll - Header transparente
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrolled = window.pageYOffset;

  if (scrolled > 100) {
    header.style.background = 'rgba(86, 7, 12, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(86, 7, 12, 0.3)';
  } else {
    header.style.background = 'rgba(86, 7, 12, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';

      // Añadir animación especial para cards
      if (entry.target.classList.contains('tech-card') ||
        entry.target.classList.contains('product-card') ||
        entry.target.classList.contains('vision-card')) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll(
    '.tech-card, .product-card, .vision-card, .timeline-item, .premise, .conclusion-box'
  );

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});

// Animación de los bloques en el hero
document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.block');

  blocks.forEach((block, index) => {
    block.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotateY(10deg)';
      this.style.boxShadow = '0 10px 30px rgba(86, 7, 12, 0.3)';
    });

    block.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotateY(0deg)';
      this.style.boxShadow = '0 4px 20px rgba(86, 7, 12, 0.1)';
    });

    // Animación de pulso periódica
    setInterval(() => {
      block.style.transform = 'scale(1.05)';
      setTimeout(() => {
        block.style.transform = 'scale(1)';
      }, 200);
    }, 3000 + (index * 1000));
  });
});

// Efecto de escritura para el título del hero
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid #e8c39e';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        // Parpadeo del cursor
        setInterval(() => {
          heroTitle.style.borderRight = heroTitle.style.borderRight === 'none' ?
            '2px solid #e8c39e' : 'none';
        }, 500);
      }
    };

    setTimeout(typeWriter, 1000);
  }
});

// Contador animado para estadísticas (si se agregan en el futuro)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start).toLocaleString();

    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    }
  }, 16);
}

// Efecto parallax suave
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-visual');

  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Resaltado de navegación activa
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  let currentSection = '';
  const scrollPos = window.pageYOffset + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Efecto de hover en los nodos de la red blockchain
document.addEventListener('DOMContentLoaded', function() {
  const nodes = document.querySelectorAll('.node');
  const centralNode = document.querySelector('.node.central');

  nodes.forEach(node => {
    if (!node.classList.contains('central')) {
      node.addEventListener('mouseenter', function() {
        // Destacar conexión con el nodo central
        centralNode.style.background = 'linear-gradient(45deg, #7a5c3c, #b08e6b)';

        // Crear línea de conexión visual (simulada con efectos)
        this.style.boxShadow = '0 0 20px rgba(86, 7, 12, 0.5)';
        centralNode.style.boxShadow = '0 0 20px rgba(122, 92, 60, 0.5)';
      });

      node.addEventListener('mouseleave', function() {
        centralNode.style.background = 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))';
        this.style.boxShadow = '0 4px 20px rgba(86, 7, 12, 0.1)';
        centralNode.style.boxShadow = '0 4px 20px rgba(86, 7, 12, 0.1)';
      });
    }
  });
});

// Animación de entrada para las tarjetas de tecnología
document.addEventListener('DOMContentLoaded', function() {
  const techCards = document.querySelectorAll('.tech-card');

  techCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;

    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotateX(0deg)';
    });
  });
});

// Funcionalidad de modo nocturno (opcional)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia de modo nocturno
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// Efecto de partículas en el background (sutil)
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(232, 195, 158, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
    hero.appendChild(particle);
  }
});

// Smooth scroll para todos los enlaces internos
document.addEventListener('DOMContentLoaded', function() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
});

// Función para mostrar tooltip informativos
function showTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  tooltip.style.cssText = `
        position: absolute;
        background: var(--color-primary);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 0.9rem;
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;

  document.body.appendChild(tooltip);

  const rect = element.getBoundingClientRect();
  tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
  tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
  });

  setTimeout(() => {
    tooltip.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(tooltip);
    }, 300);
  }, 3000);
}

// Optimización de rendimiento - Lazy loading de imágenes
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// Event listeners para mejorar la interactividad
document.addEventListener('DOMContentLoaded', function() {
  // Añadir efectos de sonido sutiles (solo visual feedback)
  const interactiveElements = document.querySelectorAll('button, .cta-button, .tech-card, .product-card');

  interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});

// Función para actualizar el progreso de lectura
function updateReadingProgress() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  let progressBar = document.getElementById('reading-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(45deg, var(--color-tertiary), var(--color-light));
            z-index: 1001;
            transition: width 0.3s ease;
        `;
    document.body.appendChild(progressBar);
  }

  progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateReadingProgress);
