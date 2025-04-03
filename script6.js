// script.js
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click(); // Open first tab by default
});

const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle'); // Assuming you have a button with this ID

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


