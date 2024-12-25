document.addEventListener("DOMContentLoaded", function () {
  // Step functionality
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  // Function to activate the current step and move to the next one
  function showStep() {
    if (steps.length === 0) return; // Exit early if there are no steps

    // Deactivate all steps (both .step and .step-content)
    steps.forEach((step) => {
      step.classList.remove("active");
      const stepContent = step.querySelector(".step-content");
      if (stepContent) {
        stepContent.classList.remove("active");
      }
    });

    // Activate the current step and its content
    const currentStepElement = steps[currentStep];
    currentStepElement.classList.add("active");
    const currentStepContent = currentStepElement.querySelector(
      ".step-content"
    );
    if (currentStepContent) {
      currentStepContent.classList.add("active");
    }

    // Increment the current step index
    currentStep = (currentStep + 1) % steps.length;
  }

  // Initialize the first step as active
  if (steps.length > 0) showStep();

  // Change step every 5 seconds
  if (steps.length > 0) {
    setInterval(showStep, 5000);
  }

  // Filter CPU/GPU pricing
  const filterButtons = document.querySelectorAll(".btn-filter");
  const cpuPricing = document.querySelectorAll(".cpu-pricing");
  const gpuPricing = document.querySelectorAll(".gpu-pricing");

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) =>
          btn.classList.remove(
            "bg-primary",
            "text-white",
            "px-2",
            "py-1",
            "rounded-3"
          )
        );

        // Add active class to the clicked button
        e.target.classList.add(
          "bg-primary",
          "text-white",
          "px-2",
          "py-1",
          "rounded-3"
        );

        const filter = e.target.getAttribute("data-filter");
        if (filter === "cpu") {
          cpuPricing.forEach((card) => (card.style.display = "block"));
          gpuPricing.forEach((card) => (card.style.display = "none"));
        } else if (filter === "gpu") {
          gpuPricing.forEach((card) => (card.style.display = "block"));
          cpuPricing.forEach((card) => (card.style.display = "none"));
        }
      });
    });
  }

  // Updating CPU price based on selected cores
  const cpuCoresDropdowns = document.querySelectorAll(".cpu-cores");
  if (cpuCoresDropdowns.length > 0) {
    cpuCoresDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("change", (e) => {
        const cores = parseInt(e.target.value);
        const id = e.target.getAttribute("data-id");
        const basePrice = 300000; // Base price for 1 core
        let finalPrice = basePrice;

        // Calculate price based on the number of cores
        if (cores === 2) {
          finalPrice = basePrice * 1.5;
        } else if (cores === 4) {
          finalPrice = basePrice * 2;
        } else if (cores === 8) {
          finalPrice = basePrice * 3;
        }

        // Update price on the card
        const priceElement = document.getElementById(`cpu-price-${id}`);
        if (priceElement) {
          priceElement.textContent = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(finalPrice);
        }
      });
    });
  }

  // Default view (show CPU pricing initially)
  if (cpuPricing.length > 0) {
    cpuPricing.forEach((card) => (card.style.display = "block"));
  }
  if (gpuPricing.length > 0) {
    gpuPricing.forEach((card) => (card.style.display = "none"));
  }

  // Trigger CPU filter button click to highlight it if the button exists
  const cpuFilterButton = document.querySelector(
    '.btn-filter[data-filter="cpu"]'
  );
  if (cpuFilterButton) {
    cpuFilterButton.click();
  }

  document.querySelectorAll(".dropdown > a").forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      // Mencegah link melakukan navigasi
      event.preventDefault();

      // Menambahkan atau menghapus kelas 'active' pada elemen dropdown
      let parentLi = this.parentElement;

      // Menutup dropdown lainnya yang terbuka
      document.querySelectorAll(".dropdown").forEach(function (dropdownItem) {
        if (dropdownItem !== parentLi) {
          dropdownItem.classList.remove("active");
        }
      });

      // Toggle kelas 'active' pada dropdown yang diklik
      parentLi.classList.toggle("active");
    });
  });
});
