// script.ts

// Function to toggle the visibility of the skills section
const toggleSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.style.display =
        skillsSection.style.display === "none" ? "block" : "none";
    }
  };
  
  // Function to toggle the visibility of the education section
  const toggleEducation = () => {
    const educationSection = document.getElementById("education");
    if (educationSection) {
      educationSection.style.display =
        educationSection.style.display === "none" ? "block" : "none";
    }
  };
  
  // Attach event listeners to buttons
  document.getElementById("toggle-skills")?.addEventListener("click", toggleSkills);
  document.getElementById("toggle-education")?.addEventListener("click", toggleEducation);
  