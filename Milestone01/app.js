function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        console.log("Section before toggle:", section.classList);
        section.classList.toggle('hidden');
        console.log("Section after toggle:", section.classList);
    }
    else {
        console.log("Section with ID: ".concat(sectionId, " not found"));
    }
}
