const toggleForm = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
};

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  if (email === "user@example.com" && password === "password") {
      // Redireciona para a página principal após login bem-sucedido
      window.location.href = 'index.html';
  } else {
      alert("Email ou senha incorretos");
  }
}