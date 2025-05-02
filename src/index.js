// random generator for selecting cat name
const names = ["Soy", "Churro", "Chai", "Mocha"];

function generateName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  document.getElementById("randomName").textContent = `${randomName}`;
}
