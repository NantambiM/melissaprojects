document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if dark mode was previously enabled (e.g., using localStorage)
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkModeEnabled) {
        body.classList.add('dark-mode');
        // Optionally update the toggle element to reflect the current state
        if (darkModeToggle) {
            darkModeToggle.textContent = 'Light Mode'; // Or change an icon
        }
    }

    // Add event listener to the toggle element
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');

            // Update localStorage based on the current state
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                this.textContent = 'Light Mode'; // Or change an icon
            } else {
                localStorage.setItem('darkMode', 'disabled');
                this.textContent = 'Dark Mode'; // Or change an icon
            }
        });
    }
});