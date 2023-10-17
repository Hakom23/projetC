// Rasgele bir sayı seçme
const secretNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const message = document.getElementById('message');

    if (userGuess == secretNumber) {
        guessCount++;
        message.textContent = `Tebrikler! ${guessCount} tahminde doğru bildiniz.`;
        message.style.color = 'green';
        disableInputAndButton();
    } else if (userGuess < secretNumber) {
        guessCount++;
        message.textContent = 'Daha büyük bir sayı deneyin.';
        message.style.color = 'red';
    } else {
        guessCount++;
        message.textContent = 'Daha küçük bir sayı deneyin.';
        message.style.color = 'red';
    }
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
