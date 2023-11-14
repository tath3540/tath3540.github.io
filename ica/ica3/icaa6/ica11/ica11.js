// ica11.js

document.addEventListener("DOMContentLoaded", function () {
    const newQuoteButton = document.querySelector("#js-new-quote");
    const showAnswerButton = document.querySelector("#js-tweet");
    const quoteTextElement = document.getElementById("js-quote-text");
    const answerTextElement = document.getElementById("js-answer-text");
  
    newQuoteButton.addEventListener("click", getQuote);
    showAnswerButton.addEventListener("click", showAnswer);
  
    function getQuote() {
      const apiUrl = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch quote");
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          displayQuote(data.question);
          // Store the answer in the answerTextElement
          answerTextElement.textContent = `Answer: ${data.answer}`;
        })
        .catch(error => {
          console.error(error);
          alert("Failed to fetch quote. Please try again.");
        });
    }
  
    function displayQuote(question) {
      quoteTextElement.textContent = `Question: ${question}`;
    }
  
    function showAnswer() {
      // Display the answerTextElement content
      answerTextElement.style.display = "block";
    }
  });
  