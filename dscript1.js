document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = 'Toggle Dark Mode';
  darkModeToggle.id = 'darkModeToggleBtn'; // The ID of the button
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.top = '20px';
  darkModeToggle.style.right = '20px';
  darkModeToggle.style.padding = '10px 15px';
  darkModeToggle.style.cursor = 'pointer';
  darkModeToggle.style.zIndex = '1000'; // Ensure it's on top of other elements
  document.body.appendChild(darkModeToggle);

  const body = document.body;
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  if (isDarkMode) {
      body.classList.add('dark-mode');
  }

  darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      const isDarkModeActive = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkModeActive ? 'enabled' : 'disabled');
  });
});