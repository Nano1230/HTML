function validarLogin(event) {
    event.preventDefault();
    
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    if (username === "admin" && password === "1234") {
        alert("Bienvenido " + username);
        window.location.href = "profile.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
}

function mostrarBienvenida() {
    alert("Bienvenidos a mi primer sitio web, apenas voy aprendiendo");
}

function cambiarColor() {
    const colores = ["#f0f0f0", "#e0f7fa", "#fff9c4", "#f8bbd0", "#c5e1a5"];
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = randomColor;
}

function mostrarFecha() {
    const fecha = new Date();
    alert("Fecha actual: " + fecha.toLocaleDateString("es-ES"));
}
