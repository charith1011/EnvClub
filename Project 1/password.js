// Define the correct password
const correctPassword = "perry";

// Function to prompt user for password
function promptForPassword() {
    // Prompt the user for the password
    let password = prompt("Please enter the admin password:");

    // Check if the entered password is correct
    if (password === correctPassword) {
        // If correct, allow entry to admin page
        alert("Password correct. Access granted!");
    } else {
        // If incorrect, display error message and redirect to homepage
        alert("Wrong password. Access denied!");
        window.location.href = "index.html"; // Redirect to homepage
    }
}

// Call the promptForPassword function when the page loads
window.onload = promptForPassword;
