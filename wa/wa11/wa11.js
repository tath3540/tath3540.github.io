const imageFilenames = ['sanjose1.jpg', 'sanjose2.jpg', 'sanjose3.jpg', 'sanjose4.jpg', 'sanjose5.jpg'];

const altText = {
  sanjose1: 'Description for San Jose Image 1',
  sanjose2: 'Description for San Jose Image 2',
  sanjose3: 'Description for San Jose Image 3',
  sanjose4: 'Description for San Jose Image 4',
  sanjose5: 'Description for San Jose Image 5'
};

const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFilenames[i]);
  newImage.setAttribute('alt', altText[imageFilenames[i].slice(0, -4)]);

  // Adding a click event listener to each thumbnail image
  newImage.addEventListener('click', function () {
    const displayedImg = document.querySelector('.displayed-img');
    displayedImg.setAttribute('src', 'images/' + imageFilenames[i]);
    displayedImg.setAttribute('alt', altText[imageFilenames[i].slice(0, -4)]);
  });

  thumbBar.appendChild(newImage);
}

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function () {
  if (btn.getAttribute('class') === 'dark') {
    // Darken effect
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    // Lighten effect
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

