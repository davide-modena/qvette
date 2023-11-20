const months = document.querySelector('p.months');
const days = document.querySelector('p.days');
const hours = document.querySelector('p.hours');
const minutes = document.querySelector('p.minutes');
const seconds = document.querySelector('p.seconds');

const targetDate = new Date("2024-06-11T13:00:00");
const startDate = new Date("2023-09-11T07:50:00");

const timeProgressBar = document.querySelector(".progress");

function formatWithLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        months.textContent = "0";
        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";
    } else {
        const totalSeconds = Math.floor(timeDifference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        const remainingMonths = Math.floor(totalDays / 30);
        const remainingDays = totalDays % 30;

        while (remainingDays > getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + remainingMonths)) {
            remainingDays -= getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + remainingMonths);
            remainingMonths++;
        }

        const remainingHours = totalHours % 24;
        const remainingMinutes = totalMinutes % 60;
        const remainingSeconds = totalSeconds % 60;

        months.textContent = remainingMonths;
        days.textContent = formatWithLeadingZero(remainingDays);
        hours.textContent = formatWithLeadingZero(remainingHours);
        minutes.textContent = formatWithLeadingZero(remainingMinutes);
        seconds.textContent = formatWithLeadingZero(remainingSeconds);
    }

    const timeDifferenceStart = targetDate - startDate;
    const currentTimeDifferenceStart = currentDate - startDate;

    const percentage = (currentTimeDifferenceStart / timeDifferenceStart) * 100;
    timeProgressBar.style.width = percentage + "%";
}

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);

// Esegui l'aggiornamento iniziale
updateCountdown();