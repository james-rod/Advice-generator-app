const adviceNumberId = document.getElementById("adviceId");
const adviceQuote = document.getElementById("adviceQuote");
const button = document.querySelector("button");
const URL = "https://api.adviceslip.com/advice";

button.addEventListener("click", getQuote);

async function getQuote() {
  try {
    const response = await fetch(URL);
    const convertAPI = await response.json();
    if (!response) {
      // If the response is not working it will throw an error
      throw new Error("Network response was not ok.");
    }
    adviceNumberId.innerHTML = convertAPI.slip.id;
    adviceQuote.innerHTML = convertAPI.slip.advice;
    console.log(convertAPI);
  } catch (error) {
    console.log(error);
  }
}
