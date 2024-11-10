// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Add an event listener to the form submit button
  const submitButton = document.getElementById("submit");
  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      generateResume(event); // Call the function to generate the resume
    });
  } else {
    console.log("Submit button not found");
  }

  // Add event listener to toggle sections
  const toggleButtons = document.querySelectorAll(".toggle-section");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const sectionId = (event.target as HTMLElement).dataset.sectionId;
      if (sectionId) {
        toggleSectionVisibility(sectionId);
      }
    });
  });
});

// Function to generate and display the resume
function generateResume(event: Event): void {
  event.preventDefault(); // Prevent form submission

  // Personal Information
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  // Education
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institution = (document.getElementById("institution") as HTMLInputElement).value;
  const year = (document.getElementById("year") as HTMLInputElement).value;

  // Work Experience
  const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const yearsWorked = (document.getElementById("years-worked") as HTMLInputElement).value;

  // Skills
  const skill1 = (document.getElementById("skill-1") as HTMLInputElement).value;
  const skill2 = (document.getElementById("skill-2") as HTMLInputElement).value;
  const skill3 = (document.getElementById("skill-3") as HTMLInputElement).value;

  // Display information on the resume
  document.getElementById("display-name")!.innerText = name;
  document.getElementById("display-email")!.innerText = email;
  document.getElementById("display-phone")!.innerText = phone;
  document.getElementById("display-degree")!.innerText = degree;
  document.getElementById("display-institution")!.innerText = institution;
  document.getElementById("display-year")!.innerText = year;
  document.getElementById("display-job-title")!.innerText = jobTitle;
  document.getElementById("display-company")!.innerText = company;
  document.getElementById("display-years-worked")!.innerText = yearsWorked;
  document.getElementById("display-skill-1")!.innerText = skill1;
  document.getElementById("display-skill-2")!.innerText = skill2;
  document.getElementById("display-skill-3")!.innerText = skill3;

  // Handle profile image display
  const profileImage = (document.getElementById("profile-image") as HTMLInputElement).files?.[0];
  const displayImage = document.getElementById("display-image") as HTMLImageElement;
  if (profileImage) {
    const reader = new FileReader();
    reader.onload = function (e) {
      displayImage.src = e.target!.result as string;
    };
    reader.readAsDataURL(profileImage);
  }

  // Show the resume display section
  document.getElementById("resume-display")!.classList.remove("hidden");
  alert("Resume generated based on the provided details!");
}

// Function to toggle visibility of sections
function toggleSectionVisibility(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.toggle("hidden");
  } else {
    console.log("Section not found: " + sectionId);
  }
}
