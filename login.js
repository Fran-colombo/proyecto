document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(data => data.json())
    .then(data => {
      if (data.message) {
        console.log('Inicio de sesión exitoso:', data.message);
      } else {
        console.error('Error al iniciar sesión:', data.error);
      }
  
      // Limpiar el formulario
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  