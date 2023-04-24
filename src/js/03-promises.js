import Notiflix from 'notiflix';

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name= "amount"]');
const formEl = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const delayValue = +delayEl.value;
  const stepValue = +stepEl.value;
  const amountValue = +amountEl.value;

  for (let i ; i <= amountValue; i ++) {
    let delayTime = delayValue + stepValue * (i - 1);

    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
