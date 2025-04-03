/*document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let darkModeToggle = document.getElementById('dark-mode-toggle');

    // Create the dark mode toggle button if it doesn't exist
    if (!darkModeToggle) {
        darkModeToggle = document.createElement('button');
        darkModeToggle.id = 'dark-mode-toggle';
        darkModeToggle.textContent = 'Toggle Dark Mode'; // You can customize the text
        // You might want to append it to a specific location in your DOM
        // For example, to the end of the body:
        body.appendChild(darkModeToggle);
        // Or to a specific container element (if you have one):
        // const header = document.querySelector('header');
        // if (header) {
        //     header.appendChild(darkModeToggle);
        // }
    }

    // Check if dark mode was previously enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isCurrentlyDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isCurrentlyDarkMode ? 'enabled' : 'disabled');
        // You can also update the button text here if you like
        darkModeToggle.textContent = isCurrentlyDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode';
    });

    // Optionally set initial button text based on the saved state
    if (darkModeToggle) {
        darkModeToggle.textContent = isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode';
    }
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // You'll need a button or checkbox with this ID
    const body = document.body;

    // Check if dark mode was previously enabled (e.g., using localStorage)
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isCurrentlyDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isCurrentlyDarkMode ? 'enabled' : 'disabled');
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let darkModeToggle = document.getElementById('dark-mode-toggle');

    // Create the dark mode toggle button if it doesn't exist
    if (!darkModeToggle) {
        darkModeToggle = document.createElement('button');
        darkModeToggle.id = 'dark-mode-toggle';
        darkModeToggle.textContent = 'Enable Dark Mode'; // Initial text
        // Append it to a suitable location - for example, the end of the header
        const header = document.querySelector('.head1'); // Adjust selector if needed
        if (header) {
            header.appendChild(darkModeToggle);
            darkModeToggle.style.marginLeft = '20px'; // Add some basic styling
            darkModeToggle.style.padding = '8px 15px';
            darkModeToggle.style.cursor = 'pointer';
            darkModeToggle.style.borderRadius = '5px';
            darkModeToggle.style.border = 'none';
            darkModeToggle.style.color = '#fff'; // Initial text color
            darkModeToggle.style.backgroundColor = '#333'; // Initial background color
        } else {
            console.error('Header element not found. Dark mode toggle could not be added.');
        }
    }

    // Check if dark mode was previously enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.textContent = 'Disable Dark Mode';
            darkModeToggle.style.backgroundColor = '#f0f0f0';
            darkModeToggle.style.color = '#333';
        }
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isCurrentlyDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isCurrentlyDarkMode ? 'enabled' : 'disabled');
        if (darkModeToggle) {
            darkModeToggle.textContent = isCurrentlyDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode';
            darkModeToggle.style.backgroundColor = isCurrentlyDarkMode ? '#f0f0f0' : '#333';
            darkModeToggle.style.color = isCurrentlyDarkMode ? '#333' : '#fff';
        }
    });
});