// Funkcja pobierająca dane kalendarza z backendu dla danego miesiąca i roku
function fetchCalendarData(year, month) {
    return $.ajax({
        url: `/api/calendar?year=${year}&month=${month}`,
        method: 'GET',
        dataType: 'json'
    });
}

// Funkcja generująca HTML pojedynczego dnia
function renderCalendarDay(dayData) {
    // dayData: { day: 1, events: [...], isSunday: true/false }
    let dayClass = 'calendar-day';
    if (dayData.isSunday) dayClass += ' calendar-sunday';
    let eventsHtml = '';
    if (Array.isArray(dayData.events)) {
        eventsHtml = dayData.events.map(ev => `<div class="calendar-event">${ev.title}</div>`).join('');
    }
    return `
        <div class="${dayClass}">
            <div class="calendar-day-number">${dayData.day}</div>
            ${eventsHtml}
        </div>
    `;
}

// Funkcja generująca cały miesiąc (układ tygodniowy, tydzień od poniedziałku)
function renderCalendarMonth(year, month, daysData) {
    // daysData: tablica obiektów dla każdego dnia miesiąca
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();

    // Ustal dzień tygodnia pierwszego dnia (0 = niedziela, 1 = poniedziałek, ...)
    let startDay = firstDay.getDay();
    if (startDay === 0) startDay = 7; // niedziela na koniec tygodnia

    let html = '<div class="calendar-grid">';
    // Nagłówki dni tygodnia
    const weekDays = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];
    html += '<div class="calendar-header-row">' +
        weekDays.map((d, i) => `<div class="calendar-header${i === 6 ? ' calendar-sunday' : ''}">${d}</div>`).join('') +
        '</div>';

    let dayIndex = 1;
    let week = [];

    // Pierwszy tydzień - puste komórki przed pierwszym dniem miesiąca
    week = [];
    for (let i = 1; i < startDay; i++) {
        week.push('<div class="calendar-day empty"></div>');
    }
    // Wypełnij resztę pierwszego tygodnia
    for (let i = startDay; i <= 7; i++) {
        if (dayIndex <= daysInMonth) {
            const dayData = daysData[dayIndex - 1];
            week.push(renderCalendarDay(dayData));
            dayIndex++;
        } else {
            week.push('<div class="calendar-day empty"></div>');
        }
    }
    html += `<div class="calendar-row">${week.join('')}</div>`;

    // Kolejne tygodnie
    while (dayIndex <= daysInMonth) {
        week = [];
        for (let i = 1; i <= 7; i++) {
            if (dayIndex <= daysInMonth) {
                const dayData = daysData[dayIndex - 1];
                week.push(renderCalendarDay(dayData));
                dayIndex++;
            } else {
                week.push('<div class="calendar-day empty"></div>');
            }
        }
        html += `<div class="calendar-row">${week.join('')}</div>`;
    }

    html += '</div>';
    return html;
}

// Przykład użycia:
function showCalendar(containerSelector, year, month) {
    fetchCalendarData(year, month).done(function(daysData) {
        // daysData: [{day: 1, events: [...], isSunday: false}, ...]
        const calendarHtml = renderCalendarMonth(year, month, daysData);
        $(containerSelector).html(calendarHtml);
    });
}

// Przykład testowego wywołania z dummy data (bez backendu)
$(document).ready(function() {
    // Dummy dane na lipiec 2025 (31 dni, niedziele: 6, 13, 20, 27)
    const dummyDays = [];
    for (let d = 1; d <= 31; d++) {
        // Oblicz czy niedziela (0 = niedziela, 1 = poniedziałek, ...)
        const date = new Date(2025, 6, d); // lipiec = 6 (miesiące od 0)
        const isSunday = date.getDay() === 0;
        dummyDays.push({
            day: d,
            isSunday: isSunday,
            events: d % 5 === 0 ? [{ title: 'Wydarzenie ' + d }] : []
        });
    }
    const calendarHtml = renderCalendarMonth(2025, 7, dummyDays);
    $('#calendarContainer').html(calendarHtml);
});
