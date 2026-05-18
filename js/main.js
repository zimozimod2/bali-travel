document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Theme Switcher ---
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
  });

  function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
  }

  // --- 2. Scroll Fade-in Animation (IntersectionObserver) ---
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-element');
  fadeElements.forEach(el => observer.observe(el));

  // --- 3. Visitor Count-up Animation ---
  const visitorCount = document.getElementById('visitor-count');
  const targetCount = parseInt(visitorCount.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);
  let currentFrame = 0;

  function animateCount() {
    currentFrame++;
    const progress = currentFrame / totalFrames;
    // Ease out expo formula for smooth deceleration
    const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentCount = Math.round(targetCount * easeOutExpo);
    
    visitorCount.textContent = currentCount.toLocaleString();

    if (currentFrame < totalFrames) {
      requestAnimationFrame(animateCount);
    } else {
      visitorCount.textContent = targetCount.toLocaleString();
    }
  }

  // Start animation when hero section is visible
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCount();
      heroObserver.disconnect();
    }
  }, { threshold: 0.5 });

  heroObserver.observe(document.querySelector('.hero-section'));

  // --- 4. Benefit Image Slider ---
  const benefitWrapper = document.getElementById('benefit-slider-wrapper');
  const benefitPrev = document.getElementById('benefit-prev');
  const benefitNext = document.getElementById('benefit-next');
  const benefitDots = document.querySelectorAll('#benefit-dots .dot');
  const benefitSlides = document.querySelectorAll('.benefit-slide');
  
  let benefitIndex = 0;
  const totalBenefitSlides = benefitSlides.length;
  let autoSlideInterval;

  function updateBenefitSlider() {
    if (!benefitWrapper) return;
    benefitWrapper.style.transform = `translateX(-${benefitIndex * 100}%)`;
    // Update dots
    benefitDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === benefitIndex);
    });
  }

  function nextBenefitSlide() {
    benefitIndex = (benefitIndex + 1) % totalBenefitSlides;
    updateBenefitSlider();
  }

  function prevBenefitSlide() {
    benefitIndex = (benefitIndex - 1 + totalBenefitSlides) % totalBenefitSlides;
    updateBenefitSlider();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextBenefitSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  if (benefitNext) {
    benefitNext.addEventListener('click', () => {
      nextBenefitSlide();
      startAutoSlide();
    });
  }

  if (benefitPrev) {
    benefitPrev.addEventListener('click', () => {
      prevBenefitSlide();
      startAutoSlide();
    });
  }

  benefitDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      benefitIndex = index;
      updateBenefitSlider();
      startAutoSlide();
    });
  });

  if (benefitWrapper) {
    benefitWrapper.parentElement.addEventListener('mouseenter', stopAutoSlide);
    benefitWrapper.parentElement.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
  }

  // --- 5. Review Slider (Carousel) ---
  const sliderWrapper = document.getElementById('slider-wrapper');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const reviewCards = document.querySelectorAll('.review-card');
  
  let currentIndex = 0;
  const totalSlides = reviewCards.length;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  // Optional: Auto slide
  // setInterval(() => {
  //   currentIndex = (currentIndex + 1) % totalSlides;
  //   updateSlider();
  // }, 5000);

  // --- 4. Form Validation ---
  const leadForm = document.getElementById('lead-form');
  const telInput = document.getElementById('user-tel');

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('user-name').value;
    const tel = telInput.value;
    const age = document.getElementById('user-age').value;

    // Phone number regex: 010-XXXX-XXXX
    const telRegex = /^010-\d{3,4}-\d{4}$/;

    if (!telRegex.test(tel)) {
      alert('연락처 형식이 올바르지 않습니다. (예: 010-1234-5678)');
      telInput.focus();
      return;
    }

    // Success simulation
    console.log('Form Submitted:', { name, tel, age });
    alert(`감사합니다, ${name}님! 상담 신청이 완료되었습니다.\n곧 담당자가 연락드리겠습니다.`);
    
    leadForm.reset();
  });

  // Auto-hyphen for phone input (UX improvement)
  telInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length > 3 && val.length <= 7) {
      val = val.slice(0, 3) + '-' + val.slice(3);
    } else if (val.length > 7) {
      val = val.slice(0, 3) + '-' + val.slice(3, 7) + '-' + val.slice(7, 11);
    }
    e.target.value = val;
  });
});
