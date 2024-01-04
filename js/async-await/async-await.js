// read the docs
// https://icanhazdadjoke.com/api
// create a search bar with a submit button
// when submit is hit, use the search method of the jokes api to search for jokes with the query
// render the jokes in paragraphs to the page

// always console.log data  to know what it looks liek
// have api docs open at all times
// use code-along as guide

// document.createTextNode("hello world") // creates a text node
// document.createElement("p") // creates a p tag

let form = document.querySelector("#joke-form");
let input = document.querySelector("#joke-input");

const getJokes = async (query) => {
  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${query}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log("The response data");
  console.log(response);
  const data = await response.json();
  console.log("response.json()");
  console.log(data);
  const jokesObjArray = data.results;
  console.log(".json().results");
  console.log(jokesObjArray);
  let jokesArray = [];
  for (let joke of jokesObjArray) {
    jokesArray.push(joke.joke);
  }
  console.log("Pushed into array");
  console.log(jokesArray);
  return jokesArray;
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let query = input.value;
  let jokes;
  try {
    jokes = await getJokes(query);
  } catch (e) {
    console.log(e.message);
    alert(e.message);
    return;
  }
  const jokeCont = document.querySelector(".joke-container");
  jokeCont.innerHTML = "";
  let i = 0;
  if (jokes.length === 0) {
    const textNode = document.createTextNode("No jokes found");
    const elementNode = document.createElement("p");
    elementNode.append(textNode);
    jokeCont.append(elementNode);
    return;
  } else {
    while (i < jokes.length) {
      const textNode = document.createTextNode(jokes[i]);
      const elementNode = document.createElement("p");
      elementNode.append(textNode);
      jokeCont.append(elementNode);
      i++;
    }
  }
});
