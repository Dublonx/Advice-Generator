// Advice Generator
function getAdvice() {
  const adviceMessage = document.querySelector("#adviceMessage");
  
  // api
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      adviceMessage.textContent = `“${data.slip.advice}”`;
    })
    .catch(error => {
      adviceMessage.textContent = "Error, Not available for now!";
    });
}