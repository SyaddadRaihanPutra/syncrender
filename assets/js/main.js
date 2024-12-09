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
});
