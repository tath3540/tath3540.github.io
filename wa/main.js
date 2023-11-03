const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX =["Willy the Goblin","Big Daddy","Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];




randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx",xItem);
    newStory = newStory.replace(":inserty",yItem);
    newStory = newStory.replace(":insertz",zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

    const weightInStones = Math.round(weightInPounds / 14);
    const temperatureInCentigrade = Math.round(
        ((temperatureInFarenheit - 32) * 5 / 9)
    );

    newStory = newStory.replace("94 fahrenheit", temperatureInCentigrade + " centigrade");

    newStory = newStory.replace("300 pounds", weightInStones + " stone");

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}