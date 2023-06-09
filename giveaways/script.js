// Get the input field
var input = document.getElementById("input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("enter").click();
  }

  window.onbeforeunload = function() { return 1; }
});

function enter() {
  if (input.value.toLowerCase() == "testgiveaway") {
    window.location.href = `${window.location}/42482954`
  }
}