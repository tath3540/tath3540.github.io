// Array of image filenames
const imageFilenames = [
  'sanjose1.jpg',
  'sanjose2.jpg',
  'sanjose3.jpg',
  'sanjose4.jpg',
  'sanjose5.jpg'
];

// Object with alternative text for each image
const altText = {
  'sanjose1.jpg': 'Sunset over downtown San Jose',
  'sanjose2.jpg': 'San Jose mountain overlooking the town',
  'sanjose3.jpg': 'Redwood forest',
  'sanjose4.jpg': 'Downtown San Jose - Cityscape',
  'sanjose5.jpg': 'Palm trees in downtown San Jose'
};

// Thumb-bar reference
const thumbBar = document.querySelector('.thumb-bar');

// Displayed image reference
const displayedImg = document.querySelector('.displayed-img');

// Overlay reference
const overlay = document.querySelector('.overlay');

// Button reference
const btn = document.querySelector('button');

// Loop through image filenames
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.src = filename; // Setting the image path
  newImage.alt = altText[filename]; // Setting alt text from the object

  // Add each image to thumb-bar
  thumbBar.appendChild(newImage);

  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', () => {
    displayedImg.src = newImage.src;
    displayedImg.alt = newImage.alt;
  });
});

// Click event listener for the darken/lighten button
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

