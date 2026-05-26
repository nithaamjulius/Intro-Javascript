const button = document.querySelector("button")
const heading = document.querySelector("h1")
const paragraph = document.querySelector("p")

// 1. Take the button and wait for a promt using the addEventListener
button.addEventListener("click", function () {
  // 2. Waiting on the prompt to be triggered using "click"
  // 3. When the promt is triggered a name will be asked
  const name = prompt("What is your name?");
  // 4. The heading will change due to the textContent
  heading.textContent = `Hi, ${name}`;
  // console.log allows us to see the output in the console via inspect
  console.log("The button has been clicked");
})

// Instructions:

// Change the button text after it is clicked
button.addEventListener("click", function () {
  button.textContent = `Pushed`;
}) 


// Add a second paragraph that updates with today's mood
button.addEventListener("click", function () {
  const mood = prompt("What is your mood today?");
  paragraph.textContent = `Todays mood: ${mood}`;

})
// Style the button in CSS

// Add one condole.log message of your choice
console.log("Yay, everything works");