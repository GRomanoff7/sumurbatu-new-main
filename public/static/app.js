// PT Sumur Batu Website JavaScript

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");

      // Toggle hamburger icon
      const icon = mobileMenuButton.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fas fa-bars text-gray-700 text-xl";
      } else {
        icon.className = "fas fa-times text-gray-700 text-xl";
      }
    });
  }

  // Active navigation highlighting
  updateActiveNavigation();

  // Contact form handling
  initializeContactForm();

  // Scroll animations
  initializeScrollAnimations();

  // Smooth scrolling for anchor links
  initializeSmoothScrolling();

  // Initialize CountUp animations
  initializeCountUp();

  // Initialize Spotlight effect
  initializeSpotlightCards();

  // Update active dot indicator
  updateActiveDotIndicator();
});

// Update active navigation based on current page
function updateActiveNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");

    if (
      href === currentPath ||
      (currentPath === "/" && href === "/") ||
      (currentPath.startsWith(href) && href !== "/")
    ) {
      link.classList.add("active");
    }
  });
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML =
      '<div class="spinner inline-block mr-2"></div>Sending...';
    submitButton.disabled = true;

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success message
        showFormMessage(
          result.message ||
            "Thank you for your message! We will contact you soon.",
          "success"
        );
        contactForm.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showFormMessage(
        "Sorry, there was an error sending your message. Please try again or contact us directly.",
        "error"
      );
    } finally {
      // Reset button state
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}

// Show form message
function showFormMessage(message, type) {
  const formMessage = document.getElementById("formMessage");
  if (!formMessage) return;

  formMessage.className = `p-4 rounded-lg ${
    type === "success"
      ? "bg-green-100 text-green-700 border border-green-200"
      : "bg-red-100 text-red-700 border border-red-200"
  }`;
  formMessage.textContent = message;
  formMessage.classList.remove("hidden");

  // Auto-hide after 5 seconds
  setTimeout(() => {
    formMessage.classList.add("hidden");
  }, 5000);
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .industry-card, .bg-white.rounded-xl"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Utility functions
function formatPhoneNumber(phone) {
  // Format Indonesian phone numbers
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("62")) {
    return "+" + cleaned;
  } else if (cleaned.startsWith("0")) {
    return "+62" + cleaned.substring(1);
  } else {
    return "+62" + cleaned;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Global error handler
window.addEventListener("error", function (e) {
  console.error("Global error:", e.error);
  // Could send to error tracking service
});

// Performance monitoring
window.addEventListener("load", function () {
  // Page load performance tracking
  const loadTime =
    performance.timing.loadEventEnd - performance.timing.navigationStart;
  console.log("Page load time:", loadTime + "ms");
});

// CountUp Animation
function initializeCountUp() {
  const countUpElements = document.querySelectorAll(".countup");

  if (countUpElements.length === 0) return;

  // Easing function for smooth animation
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  // CountUp function
  function animateCountUp(element, target, suffix = "", duration = 2000) {
    const startTime = performance.now();
    const startValue = 0;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.floor(
        startValue + (target - startValue) * easedProgress
      );

      element.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // Intersection Observer to trigger animation when visible
  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px",
  };

  const countUpObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        const element = entry.target;
        const target = parseInt(element.getAttribute("data-target"));
        const suffix = element.getAttribute("data-suffix") || "";

        // Mark as counted to prevent re-animation
        element.classList.add("counted");

        // Add scale animation to parent card
        const card = element.closest(".stats-card");
        if (card) {
          card.classList.add("stats-card-animate");
        }

        // Start count up animation
        setTimeout(() => {
          animateCountUp(element, target, suffix, 2500);
        }, 200);
      }
    });
  }, observerOptions);

  // Observe all countup elements
  countUpElements.forEach((element) => {
    countUpObserver.observe(element);
  });
}

// Spotlight Card Effect
function initializeSpotlightCards() {
  const spotlightCards = document.querySelectorAll(".spotlight-card");

  if (spotlightCards.length === 0) return;

  spotlightCards.forEach((card) => {
    const overlay = card.querySelector(".spotlight-overlay");

    if (!overlay) return;

    // Track mouse movement over the card
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate percentage position for CSS custom properties
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Update CSS custom properties for spotlight position
      overlay.style.setProperty("--mouse-x", `${xPercent}%`);
      overlay.style.setProperty("--mouse-y", `${yPercent}%`);
    });

    // Reset spotlight position when mouse leaves
    card.addEventListener("mouseleave", function () {
      overlay.style.setProperty("--mouse-x", "50%");
      overlay.style.setProperty("--mouse-y", "50%");
    });

    // Add pulse animation on hover
    card.addEventListener("mouseenter", function () {
      card.classList.add("spotlight-card-animate");
    });

    // Remove pulse animation class after animation completes
    card.addEventListener("animationend", function () {
      card.classList.remove("spotlight-card-animate");
    });
  });
}


// Export for testing purposes
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validateEmail,
    formatPhoneNumber,
  };
}
