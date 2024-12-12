const challenges = [
    { question: "Reto 1: Ponme de lado y soy todo. Córtame por la mitad y no soy nada. ¿Qué soy?", answer: "8" },
    { question: "Reto 2: ¿Cuantos cuchillos hay en el cajón de los cubiertos de la cocina?", answer: "10" },
    { question: "Reto 3: ¿Cuantas Bolas tiene el arbol de navidad?", answer: "10" },
    { question: "Reto 4: Tienes que llamar a este numero XXXXX y conseguir que te den la clave de acceso...", answer: "999"}
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

//typeText(outputDiv, "Hola Andrea! Papa Noel te ha traido un regalito pero ha tenido un problema, los elfos han perdido el codigo de accceso al regalo, vas a tener que encontrarlo.\nEscribe la respuesta al primer reto para continuar:\n\n" + challenges[0].question);

function promptForAccess() {
    const keyword = "2323";
    let attempts = 0;
    while (attempts < 3) {
        const userInput = prompt("Introduce la palabra clave para acceder a los retos: La clave de acceso se encuentra en el arbol de navidad. Recuerda todas las respuestas son numericas").toLowerCase();
        if (userInput === keyword) {
            typeText(outputDiv, "Hola Andrea! Papa Noel te ha traido un regalito pero ha tenido un problema, los elfos han perdido el codigo de accceso al regalo, vas a tener que encontrarlo.\nEscribe la respuesta al primer reto para continuar:\n\n" + challenges[0].question);
            return;
        } else {
            alert("Palabra clave incorrecta. Intenta nuevamente.");
            attempts++;
        }
    }
    alert("Has excedido el número máximo de intentos. Recarga la página para intentarlo de nuevo.");
    inputField.disabled = true;
}

function playVideo() {
    const videoContainer = document.createElement('div');
    videoContainer.innerHTML = `
        <video controls autoplay style="width: 100%; max-width: 600px; margin-top: 20px;">
            <source src="video/video clave candado.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de video.
        </video>
    `;
    document.body.appendChild(videoContainer);
}

promptForAccess();

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = inputField.value.trim().toLowerCase();
        if (userInput === challenges[currentChallenge].answer) {
            currentChallenge++;
            if (currentChallenge < challenges.length) {
                typeText(outputDiv, `\n\nCorrecto! ${challenges[currentChallenge].question}`);
            } else {
                typeText(outputDiv, "\n\n¡Felicidades! Has completado todos los retos.");
                playVideo();
            }
        } else {
            typeText(outputDiv, "\nRespuesta incorrecta. Intenta nuevamente.");
        }
        inputField.value = "";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});