const imageFilenames = ['sanjose1.jpg', 'sanjose2.jpg', 'sanjose3.jpg', 'sanjose4.jpg', 'sanjose5.jpg'];

const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFilenames[i]);
  newImage.setAttribute('alt', 'San Jose Image ' + (i + 1));
  thumbBar.appendChild(newImage);

  // Adding a click event listener to each thumbnail image
  newImage.addEventListener('click', function () {
    document.querySelector('.displayed-img').setAttribute('src', 'images/' + imageFilenames[i]);
    document.querySelector('.displayed-img').setAttribute('alt', 'San Jose Image ' + (i + 1));
  });
}

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function () {
  const currentClass = btn.getAttribute('class');

  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});








 