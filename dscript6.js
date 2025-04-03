const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle'); // Updated ID

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // You might also want to save the user's preference in local storage
    // so the dark mode persists across sessions.
});