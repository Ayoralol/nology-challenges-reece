import {fibCounter} from "./math.js";

const form = document.querySelector(".fibonacciForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fibString = formData.get("fibN");
  const fibSequenceNumber = parseInt(fibString);
  let count;
  try {
    count = fibCounter(fibSequenceNumber);
  } catch (e) {
    alert(e.message);
    return;
  }
  const container = document.querySelector(".resultContainer");
  container.innerHTML = `<p>Number at n = ${fibSequenceNumber} => ${count}`;
});
