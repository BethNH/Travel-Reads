function displayGreeting() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    alert("Hey " + name + ", nice to meet you!");
  } else {
    alert("Who's this?");
  }
}
