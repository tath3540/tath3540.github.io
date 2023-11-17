document.addEventListener("DOMContentLoaded", function () {
  const getAnimalButton = document.querySelector("#js-get-animal");
  const animalTextElement = document.getElementById("js-animal-text");
  const soundElement = document.getElementById("js-sound-text");

  getAnimalButton.addEventListener("click", getCatFact);

  function getCatFact() {
      const apiUrl = "https://catfact.ninja/fact";

      fetch(apiUrl)
          .then(response => {
              if (!response.ok) {
                  throw new Error("Failed to fetch cat fact");
              }
              return response.json();
          })
          .then(data => {
              console.log(data);
              displayCatFact(data.fact);
              createTwitterButton(data.fact);
          })
          .catch(error => {
              console.error(error);
              alert("Failed to fetch cat fact. Please try again.");
          });
  }

  function displayCatFact(fact) {
      animalTextElement.textContent = "Cat Fact:";
      soundElement.textContent = fact;
  }

  function createTwitterButton(fact) {
      const tweetButton = document.createElement("a");
      tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fact)}`;
      tweetButton.target = "_blank";
      tweetButton.textContent = "Share on Twitter";

      const controlsSection = document.querySelector(".controls");
      controlsSection.appendChild(tweetButton);
  }
});
