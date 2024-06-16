// Select the password input box
const passwordBox = document.getElementById("password");

// Fixed length of the password initially
const length = 15;

// Character sets for password generation
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

// Combine all character sets into one for random selection
const allChars = upperCase + lowerCase + number + symbol;

// Function to generate a random password

function createPassword() {
    let password = "";
    
    // Ensure at least one character from each category
    password += getRandomChar(upperCase);
    password += getRandomChar(lowerCase);
    password += getRandomChar(number);
    password += getRandomChar(symbol);
    
    // Generate remaining characters randomly until desired length is reached
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Display the generated password in the input box
    passwordBox.value = password;
}

// Function to copy the generated password to clipboard
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

// Function to clear the password input box
function clearPassword() {
    passwordBox.value = "";
}

// Function to get a random character from a given character set
function getRandomChar(characterSet) {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
}

