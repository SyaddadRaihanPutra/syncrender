document.addEventListener("DOMContentLoaded", function () {
  // Array of steps
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  // Function to activate the current step and move to the next one
  function showStep() {
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
  showStep();

  // Change step every 5 seconds
  setInterval(showStep, 5000);

  // Logic for filtering CPU/GPU pricing
  const filterButtons = document.querySelectorAll(".btn-filter");
  const cpuPricing = document.querySelectorAll(".cpu-pricing");
  const gpuPricing = document.querySelectorAll(".gpu-pricing");

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

  // Logic for updating CPU price based on selected cores
  const cpuCoresDropdowns = document.querySelectorAll(".cpu-cores");
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
      document.getElementById(
        `cpu-price-${id}`
      ).textContent = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(finalPrice);
    });
  });

  // Default view (show CPU pricing initially)
  cpuPricing.forEach((card) => (card.style.display = "block"));
  gpuPricing.forEach((card) => (card.style.display = "none"));

  // Trigger CPU filter button click to highlight it
  document.querySelector('.btn-filter[data-filter="cpu"]').click();
});
