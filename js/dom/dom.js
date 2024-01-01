const form = document.querySelector(".form-wrap");
const output = document.querySelector(".output");
const submitButton = document.querySelector(".submit");
const formStyle = form.style;
const containerStyle = document.querySelector(".container").style;

formStyle.display = "flex";
formStyle.justifyContent = "center";
formStyle.alignItems = "flex-start";
formStyle.flexDirection = "column";
containerStyle.display = "flex";
containerStyle.justifyContent = "center";
containerStyle.alignItems = "center";
containerStyle.flexDirection = "column";
containerStyle.height = "50vh";
containerStyle.width = "50vw";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const age = document.querySelector("#age-input").value;
  const name = document.querySelector("#name-input").value;
  allowedInPub(age, name);
});

function allowedInPub(age, name) {
  if (age >= 18) {
    output.innerHTML = `Come in ${name}`;
    output.style.color = "green";
    submitButton.style.backgroundColor = "green";
  } else {
    output.innerHTML = `You're too young, soz ${name}`;
    output.style.color = "red";
    submitButton.style.backgroundColor = "red";
  }
}
