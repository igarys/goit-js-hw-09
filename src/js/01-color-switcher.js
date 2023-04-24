
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;
stopBtn.disabled = true;
function getRandomHexColor() {
    document.body.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
        ).toString(16)}`;
    timerId =  setInterval(() => {
         document.body.style.backgroundColor = `#${Math.floor(
         Math.random() * 16777215
         ).toString(16)}`;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};
               
startBtn.addEventListener("click", getRandomHexColor);
   


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});