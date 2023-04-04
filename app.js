const validateButton = document.getElementById("validate");
const password = document.getElementById("password");
const pswdLength = document.querySelector("[data-length]");
const pswdCase = document.querySelector("[data-case]");
const pswdDigit = document.querySelector("[data-number]");
const pswdVariedChar = document.querySelector("[data-character]");

function validatePswd() {
    let pswd = password.value;

	if (pswd.length >=8) {
        pswdLength.innerText = `✓ ${pswdLength.innerText}`;
        pswdLength.style.color = "green";
    } else {
        pswdLength.innerText = `✘ ${pswdLength.innerText}`;
        pswdLength.style.color = "red";
    }

    if ((pswd.toUpperCase() !== pswd) && (pswd.toLowerCase() !== pswd)) {
        pswdCase.innerText = `✓ ${pswdCase.innerText}`;
        pswdCase.style.color = "green";
    } else {
        pswdCase.innerText = `✘ ${pswdCase.innerText}`;
        pswdCase.style.color = "red";
    }

    // using regex for digits
    if (pswd.match(/\d/)) {
        pswdDigit.innerText = `✓ ${pswdDigit.innerText}`;
        pswdDigit.style.color = "green";
    } else {
        pswdDigit.innerText = `✘ ${pswdDigit.innerText}`;
        pswdDigit.style.color = "red";
    }

    // using regex for special cahracters
    if (pswd.match(/[ -\/:-@\([-\`{-~)\.\,\\]/)) {
        pswdVariedChar.innerText = `✓ ${pswdVariedChar.innerText}`;
        pswdVariedChar.style.color = "green";
    }
    else {
        pswdVariedChar.innerText = `✘ ${pswdVariedChar.innerText}`;
        pswdVariedChar.style.color = "red";
    }
}

validateButton.addEventListener("click", () => {
    validatePswd();
});