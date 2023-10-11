document.getElementById('registro-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation {
          registrarUsuario(nombre: "${nombre}", apellido: "${apellido}", email: "${email}", password: "${password}") {
            id
            nombre
            apellido
            email
            password
          }
        }
      `
    })
  })
  .then(data => {
    if (data.data && data.data.registrarUsuario) {
      console.log('Usuario registrado:', data.data.registrarUsuario);
    } else if (data.errors) {
      console.error('Error al registrar el usuario:', data.errors);
    }
  
    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  })
  
  .catch(error => {
    console.error('Error:', error);
  });
});


  