document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = 'Toggle Dark Mode';
  darkModeToggle.id = 'darkModeToggleBtn';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.top = '20px';
  darkModeToggle.style.right = '20px';
  darkModeToggle.style.padding = '10px 15px';
  darkModeToggle.style.cursor = 'pointer';
  darkModeToggle.style.zIndex = '1000'; // Ensure it's on top
  document.body.appendChild(darkModeToggle);

  const body = document.body;
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = 'Disable Dark Mode';
  }

  darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      const isDarkModeActive = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkModeActive ? 'enabled' : 'disabled');
      darkModeToggle.textContent = isDarkModeActive ? 'Disable Dark Mode' : 'Enable Dark Mode';
  });

  // Set initial button text based on stored preference if not already set
  if (localStorage.getItem('darkMode') === 'enabled' && darkModeToggle.textContent === 'Toggle Dark Mode') {
      darkModeToggle.textContent = 'Disable Dark Mode';
  } else if (localStorage.getItem('darkMode') === 'disabled' && darkModeToggle.textContent === 'Toggle Dark Mode') {
      darkModeToggle.textContent = 'Enable Dark Mode';
  } else if (!localStorage.getItem('darkMode') && darkModeToggle.textContent === 'Toggle Dark Mode') {
      darkModeToggle.textContent = 'Enable Dark Mode'; // Default text for first visit
  }
});
