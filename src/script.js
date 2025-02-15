const nombres = ["nadie", "nadie", "nadie", "ozuna", "jared", "fabricio", "ameth"];
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let fecha = new Date(2025, 1, 14); 
const calendarContainer = document.getElementById("calendar-container");

for (let mes = 1; mes <= 12; mes++) {
    let monthDiv = document.createElement("div");
    monthDiv.classList.add("month");

    let header = document.createElement("div");
    header.classList.add("month-header");
    header.textContent = `${meses[mes - 1]} 2025`;
    monthDiv.appendChild(header);

    let daysDiv = document.createElement("div");
    daysDiv.classList.add("calendar-days");
    daysDiv.innerHTML = `
        <div class="calendar-day">Dom</div>
        <div class="calendar-day">Lun</div>
        <div class="calendar-day">Mar</div>
        <div class="calendar-day">Mié</div>
        <div class="calendar-day">Jue</div>
        <div class="calendar-day">Vie</div>
        <div class="calendar-day">Sáb</div>
    `;
    monthDiv.appendChild(daysDiv);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("calendar-grid");

    let firstDay = new Date(2025, mes - 1, 1).getDay();
    let daysInMonth = new Date(2025, mes, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day");
        gridDiv.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        let currentDay = new Date(2025, mes - 1, day).getDay();
        dayDiv.innerHTML = `${day}<div class="event">${nombres[currentDay]}</div>`;
        gridDiv.appendChild(dayDiv);
    }

    monthDiv.appendChild(gridDiv);
    calendarContainer.appendChild(monthDiv);
}
