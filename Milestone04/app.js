// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the form submit button
    var submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            generateResume(event); // Call the function to generate the resume
        });
    }
    else {
        console.log("Submit button not found");
    }
    // Add event listener to toggle sections
    var toggleButtons = document.querySelectorAll(".toggle-section");
    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            var sectionId = event.target.dataset.sectionId;
            if (sectionId) {
                toggleSectionVisibility(sectionId);
            }
        });
    });
});
// Function to generate and display the resume
function generateResume(event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    // Personal Information
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    // Education
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var year = document.getElementById("year").value;
    // Work Experience
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var yearsWorked = document.getElementById("years-worked").value;
    // Skills
    var skill1 = document.getElementById("skill-1").value;
    var skill2 = document.getElementById("skill-2").value;
    var skill3 = document.getElementById("skill-3").value;
    // Display information on the resume
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-email").innerText = email;
    document.getElementById("display-phone").innerText = phone;
    document.getElementById("display-degree").innerText = degree;
    document.getElementById("display-institution").innerText = institution;
    document.getElementById("display-year").innerText = year;
    document.getElementById("display-job-title").innerText = jobTitle;
    document.getElementById("display-company").innerText = company;
    document.getElementById("display-years-worked").innerText = yearsWorked;
    document.getElementById("display-skill-1").innerText = skill1;
    document.getElementById("display-skill-2").innerText = skill2;
    document.getElementById("display-skill-3").innerText = skill3;
    // Handle profile image display
    var profileImage = (_a = document.getElementById("profile-image").files) === null || _a === void 0 ? void 0 : _a[0];
    var displayImage = document.getElementById("display-image");
    if (profileImage) {
        var reader = new FileReader();
        reader.onload = function (e) {
            displayImage.src = e.target.result;
        };
        reader.readAsDataURL(profileImage);
    }
    // Show the resume display section
    document.getElementById("resume-display").classList.remove("hidden");
    alert("Resume generated based on the provided details!");
}
// Function to toggle visibility of sections
function toggleSectionVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle("hidden");
    }
    else {
        console.log("Section not found: " + sectionId);
    }
}
