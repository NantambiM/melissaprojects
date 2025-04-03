//interactive calendar for showing school events
const currentMonthElement = document.getElementById('current-month');
const calendarGrid = document.getElementById('calendar-grid');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

let currentDate = new Date();

function schoolCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    currentMonthElement.textContent = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(currentDate);
    calendarGrid.innerHTML = ''; // Clear previous calendar

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = day;

        const date = new Date(year, month, day);
        if (date.toDateString() === new Date().toDateString()) {
            dayCell.classList.add('current');
        }

        dayCell.addEventListener('click', () => {
            alert(`${new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)}. No events yet.`);
        });

        calendarGrid.appendChild(dayCell);
    }

    // Add empty cells for the days after the last day of the month to fill the week
    const lastDayOfWeek = lastDayOfMonth.getDay();
    if (lastDayOfWeek < 6) {
        for (let i = lastDayOfWeek; i < 6; i++) {
            const emptyCell = document.createElement('div');
            calendarGrid.appendChild(emptyCell);
        }
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    schoolCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    schoolCalendar();
});

// Initial start for calendar
schoolCalendar();