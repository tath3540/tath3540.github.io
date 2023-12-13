const digitOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let spinningIntervals = [];
let clickCount = 0;

function startSpinning(slotId) {
  spinningIntervals[slotId - 1] = setInterval(() => {
    invisibleInkEffect();
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

function submitForm() {
  const finalNumberContainer = document.getElementById('final-number');
  const finalNumber = finalNumberContainer.innerText;

  if (finalNumber.length === 10) {
    const popupContent = `
      🎉 Congratulations! You have successfully subscribed to our hourly, obligatory text notifications about:
      \nUpdates on the ongoing battle between forks and spoons 🍴⚔️
      \nNote: You cannot unsubscribe. Ever. 😈
    `;

    alert(popupContent);
  } else {
    alert('Please complete the phone number before submitting - it seems like you may be missing a few digits!');
  }
}

function showAnnoyingVerification() {
  const annoyingMessage = document.createElement('div');
  annoyingMessage.innerText = '🎉 Congratulations! You have successfully subscribed to our hourly, obligatory text notifications about:';
  annoyingMessage.style.color = 'red';
  annoyingMessage.style.fontWeight = 'bold';
  annoyingMessage.style.fontSize = '20px';
  annoyingMessage.style.marginTop = '20px';

  const topicsList = document.createElement('ul');
  topicsList.style.listStyleType = 'none';
  topicsList.style.padding = '0';
  topicsList.style.marginTop = '10px';

  const topics = [
    'Updates on the ongoing battle between forks and spoons 🍴⚔️'
  ];

  topics.forEach(topic => {
    const listItem = document.createElement('li');
    listItem.innerText = topic;
    topicsList.appendChild(listItem);
  });

  annoyingMessage.appendChild(topicsList);

  const disclaimer = document.createElement('p');
  disclaimer.innerText = 'Note: You cannot unsubscribe. Ever. 😈';
  disclaimer.style.fontStyle = 'italic';
  disclaimer.style.marginTop = '20px';

  annoyingMessage.appendChild(disclaimer);

  document.body.appendChild(annoyingMessage);
}

function clickHandler() {
  clickCount++;

  if (clickCount % 10 === 0) {
    alert('Our site can only handle 10 clicks at a time... Please wait while the site buffers.');
    showBufferingScreen();
    setTimeout(() => {
      hideBufferingScreen();
    }, 10000); // 10 seconds (10000 milliseconds)
  }
}

function showBufferingScreen() {
  const bufferingScreen = document.createElement('div');
  bufferingScreen.id = 'buffering-screen';

  const bufferingText = document.createElement('p');
  bufferingText.innerText = 'Buffering... Please wait. Sorry for the inconvenience :)';
  bufferingScreen.appendChild(bufferingText);

  const bufferingBar = document.createElement('div');
  bufferingBar.id = 'buffering-bar';
  bufferingBar.classList.add('striped-bar'); 
  bufferingScreen.appendChild(bufferingBar);

  document.body.appendChild(bufferingScreen);

  setTimeout(() => {
    bufferingBar.style.width = '100%';
  
    setTimeout(() => {
      hideBufferingScreen();
      explodeScreen();
    }, 10000); 
  }, 100); 
}

function hideBufferingScreen() {
  const bufferingScreen = document.getElementById('buffering-screen');
  if (bufferingScreen) {
    document.body.removeChild(bufferingScreen);
  }
}

function explodeScreen() {
  const explosionContainer = document.createElement('div');
  explosionContainer.id = 'explosion-container';

for (let i = 0; i < 600; i++) {
  const ball = document.createElement('div');
  ball.className = 'explosion-ball';
  ball.style.width = `${Math.random() * 50}px`;
  ball.style.height = `${Math.random() * 50}px`;
  ball.style.backgroundColor = getRandomColor();
  ball.style.position = 'absolute';
  ball.style.top = `${Math.random() * window.innerHeight}px`;
  ball.style.left = `${Math.random() * window.innerWidth}px`;

  explosionContainer.appendChild(ball);
}

document.body.appendChild(explosionContainer);

setTimeout(() => {
  document.body.removeChild(explosionContainer);
}, 9000);
}

function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
