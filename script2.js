const resultElement = document.getElementById("result");
const tossButton = document.getElementById("toss-coin");

tossButton.addEventListener("click", () => {
  const outcomes = ["Heads", "Tails"];
  const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  resultElement.textContent = `It's ${randomOutcome}!`;
});
