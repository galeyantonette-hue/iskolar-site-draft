const searchbar = document.getElementById('searchbar');
const easteregg = document.getElementById('EASTEREGG');
const pics = document.getElementById('PICS');

searchbar.addEventListener("keydown", function(event){
        
        if (event.key === "Enter"){
            if (
            searchbar.value === "home" ||
            searchbar.value === "Home" ||
            searchbar.value === "Main" ||
            searchbar.value === "main" ||
            searchbar.value === "Index" ||
            searchbar.value === "index"
            ) {
            window.location.href = "index.html";
            }

            if (
            searchbar.value === "application" ||
            searchbar.value === "sign-in" ||
            searchbar.value === "student" ||
            searchbar.value === "teacher" ||
            searchbar.value === "users"
            ) {
            window.location.href = "application.html";
            }

            if (
            searchbar.value === "subjects" ||
            searchbar.value === "subject" ||
            searchbar.value === "courses" ||
            searchbar.value === "guest"
            ) {
            window.location.href = "sbjctGuest.html";
        }

  }})










let accountType = ""; // teacher or student

// Account type buttons
document.getElementById("teacherBtn").addEventListener("click", () => {
    accountType = "teacher";
    document.getElementById("formTitle").innerHTML = "Teacher Sign In";
});

document.getElementById("studentBtn").addEventListener("click", () => {
    accountType = "student";
    document.getElementById("formTitle").innerHTML = "Student Sign In";
});

// login credentials
const teachers = [
    {
        name: "T1",
        school: "SHS",
        email: "teacher@test.com",
        id: "T001"
    }
];

const students = [
    {
        name: "S1",
        school: "SHS",
        email: "student@test.com",
        id: "S001"
    }
];

// Sign-in logic
document.getElementById("signinForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const school = document.getElementById("school").value.trim();
    const email = document.getElementById("email").value.trim();
    const idnum = document.getElementById("idnum").value.trim();

    if (!accountType) {
        alert("Please select Teacher or Student.");
        return;
    }

    let valid = false;

    if (accountType === "teacher") {
        valid = teachers.some(t =>
            t.name === name &&
            t.school === school &&
            t.email === email &&
            t.id === idnum
        );

        if (valid) {
            window.location.href = "subjectsmain.html"; // redirect
        }
    }

    if (accountType === "student") {
        valid = students.some(s =>
            s.name === name &&
            s.school === school &&
            s.email === email &&
            s.id === idnum
        );

        if (valid) {
            window.location.href = "sbjctStudmain.html"; // redirect
        }
    }

    if (!valid) {
        alert("Incorrect information. Please try again.");
    }
});
