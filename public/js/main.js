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

  // Add extra slide handling
  const totalSlides = slides.length - 1;
  console.log("totalSlides", totalSlides);

  // Initialize currentIndex, considering the extra slide
  let currentIndex = 0;

  function updateSlider() {
    // Calculate the offset to slide to
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  // Adjust the slider width based on the number of slides
  slider.style.width = `${totalSlides * 100}%`;

  // Attach event listeners to buttons
  prevButton.addEventListener("click", function () {
    // Move to the previous slide, loop back if at the start
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", function () {
    // Move to the next slide, loop back if at the end
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
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

document.getElementById("rejectBtn").addEventListener("click", function () {
  document.getElementById("cookieConsent").style.display = "none";
  // Handle reject logic here
});

document.getElementById("customizeBtn").addEventListener("click", function () {
  alert("Customize your cookie settings.");
  // Show customization options (not implemented in this example)
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("cookieConsent").style.display = "none";
});

// Check if cookies consent has already been given
if (!localStorage.getItem("cookies-consent")) {
  document.getElementById("cookies-popup").style.display = "flex";
}

// Handle the accept button click
document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    localStorage.setItem("cookies-consent", "true");
    document.getElementById("cookies-popup").style.display = "none";
  });

// toggle mobile nav
const toggleMobileNavBtn = document.getElementById("toggle-mobile-nav");
const mobileNav = document.getElementById("mobile-nav");

toggleMobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

const serviceMobileBtn = document.getElementById("service-mobile-btn");

serviceMobileBtn.addEventListener("click", () => {
  const servicesMobile = document.getElementById("services-mobile");
  servicesMobile.classList.toggle("active");
});

// filter show in case
const showFilterBtn = document.getElementById("filter-btn");
const caseFilter = document.getElementById("case-filter");

showFilterBtn.addEventListener("click", () => {
  caseFilter.classList.toggle("active");
});

// get cases
document.addEventListener("DOMContentLoaded", () => {
  const categoryList = document.getElementById("category-list");
  const categoryButtons = categoryList.querySelectorAll(".category-btn");

  // Function to handle active class toggle and fetch data
  function handleCategoryClick(event) {
    const clickedButton = event.target;

    // Remove active class from all buttons
    categoryButtons.forEach((button) =>
      button.classList.remove("active", "bg-black", "text-white")
    );

    // Add active class to the clicked button
    clickedButton.classList.add("active", "bg-black", "text-white");

    // Fetch data based on the clicked category
    const category = clickedButton.dataset.category;

    // Example fetch function, replace URL with your API endpoint
    fetch(`/all-cases?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle rendering of fetched data
        console.log("data.cases", data.cases);
        renderCases(data.cases);
      })
      .catch((error) => {
        console.error("Error fetching cases:", error);
      });
  }

  // Set "All" as the default active category and fetch the initial data
  const defaultCategoryButton = categoryList.querySelector(
    '[data-category="all"]'
  );
  defaultCategoryButton.classList.add("active", "bg-black", "text-white");

  // Fetch initial data for "All" category
  fetch("/cases?category=all")
    .then((response) => response.json())
    .then((data) => {
      renderCases(data.cases);
    })
    .catch((error) => {
      console.error("Error fetching cases:", error);
    });

  // Add click event listener to each button
  categoryButtons.forEach((button) => {
    button.addEventListener("click", handleCategoryClick);
  });

  // Example function to render cases (you need to implement this based on your UI)
  function renderCases(cases) {
    console.log("cases", cases);
    const caseList = document.getElementById("case-list");
    caseList.innerHTML = ""; // Clear current cases

    // Loop through the cases and append them to the DOM
    cases.forEach((item) => {
      const caseElement = document.createElement("div");
      caseElement.classList.add("case-item");
      caseElement.innerHTML = `
<div class="flex flex-col h-full">
            <div class="flex-1">
              <div class="relative">
                <div class="rounded-lg overflow-hidden">
                  <img
                    class="rounded-lg w-full transition-all hover:scale-110"
                    src="${item?.img?.src || ""}"
                    alt=""
                  />
                </div>
              </div>

              <div class="mt-4 flex items-center flex-wrap gap-3">
                ${item?.categories
                  ?.map(
                    (category) => `
              <span class="inline-block text-sm border rounded-full px-4 py-1"
                  >${category}</span
                >
            `
                  )
                  .join("")}
              </div>

              <a
                href="/cases/case-one"
                class="mt-5 inline-block transition-all hover:text-primary font-semibold text-[26px] leading-[26px]"
                >${item?.title}</a
              >
            </div>
            <a
              href="/cases/case-one"
              class="uppercase mt-2 inline-block font-semibold text-[#666] transition-all justify-end hover:text-primary"
              >Read more</a
            >
          </div>
      `;
      caseList.appendChild(caseElement);
    });
  }
});
