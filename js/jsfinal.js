const digitOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let spinningIntervals = [];

function startSpinning(slotId) {
  const slot = document.getElementById(`slot${slotId}`);
  const randomIndex = Math.floor(Math.random() * digitOptions.length);
  slot.innerText = digitOptions[randomIndex];

  spinningIntervals[slotId - 1] = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * digitOptions.length);
    slot.innerText = digitOptions[randomIndex];
  }, 100);
}

function stop(slotId) {
  clearInterval(spinningIntervals[slotId - 1]);
  const selectedDigit = digitOptions[Math.floor(Math.random() * digitOptions.length)];
  const slot = document.getElementById(`slot${slotId}`);
  slot.innerText = selectedDigit;

  updateFinalNumber();
}

function updateFinalNumber() {
  const finalNumberContainer = document.getElementById('final-number');
  const digitSlots = document.querySelectorAll('.digit-slot');
  const finalNumber = Array.from(digitSlots).map(slot => slot.innerText).join('');
  finalNumberContainer.innerText = finalNumber;
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 10; i++) {
    startSpinning(i);
    stop(i);
  }
});
