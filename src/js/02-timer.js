// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const dateEl = document.getElementById("datetime-picker");
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
const timerEl = document.querySelector('.timer');
let timer;

startBtn.disabled = true;

timerEl.style.display = "flex";
timerEl.style.justifyContent = 'space-evenly';
timerEl.style.marginTop = "150px";
timerEl.style.fontSize = "50px";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        if (new Date() > selectedDates[0]) {
            return (
              (startBtn.disabled = true),
              Notiflix.Notify.warning('Please choose a date in the future')
            );
        } else {
            startBtn.disabled = false;
        };

        function startTimer() {
            startBtn.disabled = true;
            const addLeadingZero = value => value.toString().padStart(2, '0');
            let selectedDatesTime = selectedDates[0].getTime();
            let realTime = new Date().getTime();
            let calculateMS = selectedDatesTime - realTime;

            timer = setInterval(() => {
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;

                const days = Math.floor(calculateMS / day);
                const hours = Math.floor((calculateMS % day) / hour);
                const minutes = Math.floor(((calculateMS % day) % hour) / minute);
                const seconds = Math.floor(
                    (((calculateMS % day) % hour) % minute) / second
                );
                calculateMS -= 1000;

                daysTimer.textContent = addLeadingZero(days);
                hoursTimer.textContent = addLeadingZero(hours);
                minutesTimer.textContent = addLeadingZero(minutes);
                secondsTimer.textContent = addLeadingZero(seconds);
           
    
            if (calculateMS < 1) {
                
                clearInterval(timer);
            }
        }, 1000)
    
    };



    console.log(selectedDates[0]);
    console.log(new Date());
    startBtn.addEventListener("click", startTimer)
  },
};
flatpickr(dateEl, options);






