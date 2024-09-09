// script.ts
var _a, _b;
// Function to toggle the visibility of the skills section
var toggleSkills = function () {
    var skillsSection = document.getElementById("skills");
    if (skillsSection) {
        skillsSection.style.display =
            skillsSection.style.display === "none" ? "block" : "none";
    }
};
// Function to toggle the visibility of the education section
var toggleEducation = function () {
    var educationSection = document.getElementById("education");
    if (educationSection) {
        educationSection.style.display =
            educationSection.style.display === "none" ? "block" : "none";
    }
};
// Attach event listeners to buttons
(_a = document.getElementById("toggle-skills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleSkills);
(_b = document.getElementById("toggle-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", toggleEducation);
