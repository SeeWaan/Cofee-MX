function openRegistration() {
    var ventanaRegistro = window.open('', 'Registro', 'width=400,height=300');
    ventanaRegistro.document.body.innerHTML = `
        <h2>Registro</h2>
        <form id="registerForm">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="email">Correo:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Registrarse">
        </form>
    `;

    ventanaRegistro.document.getElementById('registerForm').onsubmit = function(event) {
        event.preventDefault();
        var username = ventanaRegistro.document.getElementById('username').value;
        var email = ventanaRegistro.document.getElementById('email').value;
        var password = ventanaRegistro.document.getElementById('password').value;
        // Obtener usuarios almacenados en el localStorage
        var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        // Verificar si el usuario ya existe
        var userExists = storedUsers.some(function(user) {
            return user.username === username || user.email === email;
        });
        if (userExists) {
            alert('El usuario o el correo electrónico ya están registrados.');
        } else {
            // Agregar el nuevo usuario
            var newUser = {
                username: username,
                email: email,
                password: password  // En un entorno real, deberías almacenar las contraseñas de forma segura (por ejemplo, utilizando hash).
            };
            storedUsers.push(newUser);
            // Guardar en localStorage
            localStorage.setItem('users', JSON.stringify(storedUsers));
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            ventanaRegistro.close();
        }
    };
}

function openLogin() {
    var ventanaLogin = window.open('', 'Login', 'width=400,height=300');
    ventanaLogin.document.body.innerHTML = `
    <h2>Iniciar Sesión</h2>
    <form id="loginForm">
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Iniciar Sesión">
    </form>
    `;

    ventanaLogin.document.getElementById('loginForm').onsubmit = function(event) {
        event.preventDefault();
        var username = ventanaLogin.document.getElementById('username').value;
        var password = ventanaLogin.document.getElementById('password').value;
        // Obtener usuarios almacenados en el localStorage
        var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        // Buscar el usuario en el array
        var foundUser = storedUsers.find(function(user) {
            return user.username === username && user.password === password;
        });
        if (foundUser) {
            alert('Inicio de sesión exitoso');
            ventanaLogin.close();
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };
}

function mostrarComida() {
    const galeriaOculta = document.getElementById('galeria_oculta');
    alimentos.style.display = 'block';
    bebidas.style.display = 'none';
    cafe.style.display = 'none';
    // Muestra la galería al hacer clic en la imagen
}

function mostrarBebidas() {
    const galeriaOculta = document.getElementById('galeria_oculta');
    alimentos.style.display = 'none';
    bebidas.style.display = 'block';
    cafe.style.display = 'none';
    // Muestra la galería al hacer clic en la imagen
}

function mostrarCafe() {
    const galeriaOculta = document.getElementById('galeria_oculta');
    alimentos.style.display = 'none';
    bebidas.style.display = 'none';
    cafe.style.display = 'block';
    // Muestra la galería al hacer clic en la imagen
}