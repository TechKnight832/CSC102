// Giani Saldana


// Function to clean up a string (remove spaces and convert to lowercase)
function cleanString(str) {
    // Remove spaces and convert to lowercase
    return str.replace(/\s+/g, '').toLowerCase();
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = cleanString(str); // Get cleaned version of the string
    const reversed = cleaned.split('').reverse().join(''); // Reverse the string
    return cleaned === reversed; // Check if cleaned and reversed strings are the same
}

// Form submit handler
document.getElementById('palindromeForm').onsubmit = function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const userInput = document.getElementById('userInput').value; // Get user input value
    const resultDiv = document.getElementById('result'); // Get result div

    if (userInput.trim() === "") {
        // Notify the user if input is empty
        resultDiv.innerHTML = "Please enter a valid string!";
        return;
    }

    // Check if the input is a palindrome
    if (isPalindrome(userInput)) {
        resultDiv.innerHTML = `<span style="color: green;">"${userInput}" is a palindrome! 🎉</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color: red;">"${userInput}" is NOT a palindrome. ❌</span>`;
    }

    // Reset input field for next entry
    document.getElementById('userInput').value = "";
};
