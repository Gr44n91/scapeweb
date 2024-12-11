const challenges = [
    { question: "Reto 1: ¿Cuánto es 2 + 2?", answer: "4" },
    { question: "Reto 2: ¿Cuál es la capital de Francia?", answer: "paris" },
    { question: "Reto 3: Escribe 'JavaScript' en minúsculas.", answer: "javascript" }
];

let currentChallenge = 0;

const outputDiv = document.getElementById('output');
const inputField = document.getElementById('input');

function typeText(element, text, speed = 25) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

typeText(outputDiv, "Hola Andrea! Papa Noel te ha traido un regalito pero ha tenido un problema, los elfos han perdido el codigo de accceso al regalo, vas a tener que encontrarlo.\nEscribe la respuesta al primer reto para continuar:\n\n" + challenges[0].question);

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = inputField.value.trim().toLowerCase();
        if (userInput === challenges[currentChallenge].answer) {
            currentChallenge++;
            if (currentChallenge < challenges.length) {
                typeText(outputDiv, `\n\nCorrecto! ${challenges[currentChallenge].question}`);
            } else {
                typeText(outputDiv, "\n\n¡Felicidades! Has completado todos los retos. El codigo para abrir la caja es 999");
            }
        } else {
            typeText(outputDiv, "\nRespuesta incorrecta. Intenta nuevamente.");
        }
        inputField.value = "";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});
