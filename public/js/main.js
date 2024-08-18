// client
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the number to count up to from EJS (in this case, hardcoded as 100)
  const targetNumber = 56; // This value could be dynamically set from EJS if needed

  // Get the counter element
  const counterElement = document.getElementById("client");

  let client = 0;
  const duration = 2000; // Duration of the animation in milliseconds
  const incrementTime = 50; // Time interval between increments in milliseconds

  const increment = Math.ceil(targetNumber / (duration / incrementTime));

  const updateCounter = () => {
    if (client < targetNumber) {
      client += increment;
      if (client > targetNumber) client = targetNumber; // Ensure it doesn't exceed the target
      counterElement.textContent = client + "K";
      setTimeout(updateCounter, incrementTime);
    }
  };

  updateCounter();
});

// award
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the number to count up to from EJS (in this case, hardcoded as 100)
  const targetNumber = 30; // This value could be dynamically set from EJS if needed

  // Get the counter element
  const counterElement = document.getElementById("award");

  let award = 0;
  const duration = 2000; // Duration of the animation in milliseconds
  const incrementTime = 50; // Time interval between increments in milliseconds

  const increment = Math.ceil(targetNumber / (duration / incrementTime));

  const updateCounter = () => {
    if (award < targetNumber) {
      award += increment;
      if (award > targetNumber) award = targetNumber; // Ensure it doesn't exceed the target
      counterElement.textContent = award + "+";
      setTimeout(updateCounter, incrementTime);
    }
  };

  updateCounter();
});

// business
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the number to count up to from EJS (in this case, hardcoded as 100)
  const targetNumber = 97; // This value could be dynamically set from EJS if needed

  // Get the counter element
  const counterElement = document.getElementById("business");

  let business = 0;
  const duration = 2000; // Duration of the animation in milliseconds
  const incrementTime = 50; // Time interval between increments in milliseconds

  const increment = Math.ceil(targetNumber / (duration / incrementTime));

  const updateCounter = () => {
    if (business < targetNumber) {
      business += increment;
      if (business > targetNumber) business = targetNumber; // Ensure it doesn't exceed the target
      counterElement.textContent = business + "%";
      setTimeout(updateCounter, incrementTime);
    }
  };

  updateCounter();
});

// team
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the number to count up to from EJS (in this case, hardcoded as 100)
  const targetNumber = 60; // This value could be dynamically set from EJS if needed

  // Get the counter element
  const counterElement = document.getElementById("team");

  let team = 0;
  const duration = 2000; // Duration of the animation in milliseconds
  const incrementTime = 50; // Time interval between increments in milliseconds

  const increment = Math.ceil(targetNumber / (duration / incrementTime));

  const updateCounter = () => {
    if (team < targetNumber) {
      team += increment;
      if (team > targetNumber) team = targetNumber; // Ensure it doesn't exceed the target
      counterElement.textContent = team + "+";
      setTimeout(updateCounter, incrementTime);
    }
  };

  updateCounter();
});
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  console.log("nextButton", nextButton);

  let currentIndex = 0;

  function updateSlider() {
    // Calculate the offset to slide to
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function () {
    // Move to the previous slide, loop back if at the start
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", function () {
    // Move to the next slide, loop back if at the end
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  // Initialize the slider position
  updateSlider();
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 1000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When window width is >= 640px (sm)
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When window width is >= 768px (md)
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When window width is >= 1024px (lg)
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

document.querySelectorAll(".service-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Find the related service-content
    const content = this.nextElementSibling;

    // Toggle visibility
    if (content.classList.contains("hidden-content")) {
      content.classList.remove("hidden-content");
      content.classList.add("visible-content");
    } else {
      content.classList.remove("visible-content");
      content.classList.add("hidden-content");
    }
  });
});
