//get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Infromation</h3>\n    <p><b>Name</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p <span contenteditable=\"true\">").concat(name, "</span>>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p <span contenteditable=\"true\">").concat(name, "</span>>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p <span contenteditable=\"true\">").concat(name, "</span>>").concat(skills, "</p>\n    ");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
