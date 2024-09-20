import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("button[data-start]");
const timerFields = document.querySelectorAll(".timer .field .value");

let userSelectedDate = null;
let timerInterval = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentDate = new Date();

        if (selectedDate <= currentDate) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
                position: 'topRight'
            });
            startButton.disabled = true;
            userSelectedDate = null;
        } else {
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        }
    }
};

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
    if (userSelectedDate) {
        startButton.disabled = true;
        datetimePicker.disabled = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
});

function updateTimer() {
    const currentDate = new Date();
    const timeDifference = userSelectedDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        updateTimerFields(0, 0, 0, 0);
      
        datetimePicker.disabled = false;
        return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    updateTimerFields(days, hours, minutes, seconds);
}

function updateTimerFields(days, hours, minutes, seconds) {
    timerFields[0].textContent = addLeadingZero(days);
    timerFields[1].textContent = addLeadingZero(hours);
    timerFields[2].textContent = addLeadingZero(minutes);
    timerFields[3].textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
