const challenges = [
    { question: "Reto 1: Ponme de lado y soy todo. Córtame por la mitad y no soy nada. ¿Qué soy?", answer: "8" },
    { question: "Reto 2: Es conocido por todos que a los elfos les encantan las naranjas, es una lastima que no se críen en el polo norte, quizás si les ofreces alguna te ayuden a conseguir la clave…", answer: "4525" },
    { question: "Reto 3: ¿Cuántas bolas tiene el árbol de navidad?", answer: "74" },
    { question: "Reto 4: Bien, ya estamos terminando... Tienes que llamar a estos elfos 661621591 o 652571259 por videollamada de Whatsapp desde un móvil que no sea el tuyo y conseguir que te den la clave de acceso...", answer: "1212"}
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
    const keyword = "9191614";
    let attempts = 0;
    while (attempts < 3) {
        const userInput = prompt(`Introduce la palabra clave para acceder a los retos: 
            La clave de acceso se encuentra en el árbol de navidad. Recuerda todas las respuestas son numéricas 
            y tienes 3 intentos para acceder. Si tienes que usar la calculadora o Google hazlo desde otro móvil`).toLowerCase();
        if (userInput === keyword) {
            typeText(outputDiv, "Hola Andrea! Papa Noel te ha traido un regalito pero ha tenido un problema, los elfos han perdido el codigo del candado donde guardan el regalo, vas a tener que encontrarlo para poder abrirlo.\nEscribe la respuesta al primer reto para continuar:\n\n" + challenges[0].question);
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
                typeText(outputDiv, "\n\n¡Felicidades! Has completado todos los retos. Aqui tienes la clave:");
                playVideo();
            }
        } else {
            typeText(outputDiv, "\nRespuesta incorrecta. Intenta nuevamente.");
        }
        inputField.value = "";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});