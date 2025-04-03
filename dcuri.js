/*document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const head1 = document.querySelector('.head1');
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    const textBox = document.querySelector('.text-box');
    const heroBtn = document.querySelector('.hero-btn');
    const newsAndEvents = document.getElementById('newsandevents');
    const newsAndEventsTextarea = newsAndEvents ? newsAndEvents.querySelector('textarea') : null;
    const newsAndEventsButton = newsAndEvents ? newsAndEvents.querySelector('button') : null;
    const calendarSection = document.getElementById('calendar-section');
    const calendarContainer = calendarSection ? calendarSection.querySelector('.calendar-container') : null;
    const calendarHeaderButton = calendarSection ? calendarSection.querySelectorAll('.calendar-header button') : null;
    const days = document.querySelectorAll('.day');
    const footer = document.querySelector('footer');
    const foot = document.querySelector('.foot');
    const copyright = document.querySelector('.copyright');
    const article = document.querySelector('article');
    const sections = document.querySelectorAll('.section');
    const dividers = document.querySelectorAll('.divider');
    const academicsLinks = document.querySelectorAll('#academics a');
    const schoolLifeLinks = document.querySelectorAll('#school-Life a');
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    const dropdownContentLinks = document.querySelectorAll('.dropdown-content a');
    const tableHeaders = document.querySelectorAll('th');
    const tableDataCells = document.querySelectorAll('td');
    const newCurriculum = document.querySelector('.newcurriculum');
    const accordions = document.querySelectorAll('.accordion');
    const panels = document.querySelectorAll('.panel');
    const sublist = document.getElementById('sublist');

    // Function to toggle dark mode on an element
    function toggleDarkModeClass(element) {
        if (element) {
            element.classList.toggle('dark-mode');
        }
    }

    // Function to toggle dark mode on multiple elements
    function toggleDarkModeClassList(elements) {
        elements.forEach(toggleDarkModeClass);
    }

    darkModeToggle.addEventListener('click', function() {
        toggleDarkModeClass(body);
        toggleDarkModeClass(head1);
        toggleDarkModeClassList(navLinks);
        toggleDarkModeClass(textBox);
        toggleDarkModeClass(heroBtn);
        toggleDarkModeClass(newsAndEvents);
        toggleDarkModeClass(newsAndEventsTextarea);
        toggleDarkModeClass(newsAndEventsButton);
        toggleDarkModeClass(calendarSection);
        toggleDarkModeClass(calendarContainer);
        if (calendarHeaderButton) {
            calendarHeaderButton.forEach(toggleDarkModeClass);
        }
        toggleDarkModeClassList(days);
        toggleDarkModeClass(footer);
        toggleDarkModeClass(foot);
        toggleDarkModeClass(copyright);
        toggleDarkModeClass(article);
        toggleDarkModeClassList(sections);
        toggleDarkModeClassList(dividers);
        toggleDarkModeClassList(academicsLinks);
        toggleDarkModeClassList(schoolLifeLinks);
        toggleDarkModeClassList(dropdownContents);
        toggleDarkModeClassList(dropdownContentLinks);
        toggleDarkModeClassList(tableHeaders);
        toggleDarkModeClassList(tableDataCells);
        toggleDarkModeClass(newCurriculum);
        toggleDarkModeClassList(accordions);
        toggleDarkModeClassList(panels);
        toggleDarkModeClass(sublist);

        // Store the user's preference in local storage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for user's preference on page load
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
        body.classList.add('dark-mode');
        toggleDarkModeClass(head1);
        toggleDarkModeClassList(navLinks);
        toggleDarkModeClass(textBox);
        toggleDarkModeClass(heroBtn);
        toggleDarkModeClass(newsAndEvents);
        toggleDarkModeClass(newsAndEventsTextarea);
        toggleDarkModeClass(newsAndEventsButton);
        toggleDarkModeClass(calendarSection);
        toggleDarkModeClass(calendarContainer);
        if (calendarHeaderButton) {
            calendarHeaderButton.forEach(toggleDarkModeClass);
        }
        toggleDarkModeClassList(days);
        toggleDarkModeClass(footer);
        toggleDarkModeClass(foot);
        toggleDarkModeClass(copyright);
        toggleDarkModeClass(article);
        toggleDarkModeClassList(sections);
        toggleDarkModeClassList(dividers);
        toggleDarkModeClassList(academicsLinks);
        toggleDarkModeClassList(schoolLifeLinks);
        toggleDarkModeClassList(dropdownContents);
        toggleDarkModeClassList(dropdownContentLinks);
        toggleDarkModeClassList(tableHeaders);
        toggleDarkModeClassList(tableDataCells);
        toggleDarkModeClass(newCurriculum);
        toggleDarkModeClassList(accordions);
        toggleDarkModeClassList(panels);
        toggleDarkModeClass(sublist);
    }
});

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

    // Set initial button text based on the stored preference if not already set
    if (localStorage.getItem('darkMode') === 'enabled' && darkModeToggle.textContent === 'Toggle Dark Mode') {
        darkModeToggle.textContent = 'Disable Dark Mode';
    } else if (localStorage.getItem('darkMode') === 'disabled' && darkModeToggle.textContent === 'Toggle Dark Mode') {
        darkModeToggle.textContent = 'Enable Dark Mode';
    } else if (!localStorage.getItem('darkMode') && darkModeToggle.textContent === 'Toggle Dark Mode') {
        darkModeToggle.textContent = 'Enable Dark Mode'; // Default text for first visit
    }
});*/


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


