const toggleForm = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
};


function login() {
  const email = document.querySelector('#emailLogin').value;
  const password = document.querySelector('#passwordLogin').value;

  if (email === "user@example.com" && password === "password") 
  {
    alert("Seja Bem-vindo(a)!")
    
    // Redireciona para a página principal após login bem-sucedido
    window.location.href = '/index.html';
  } 
  else 
  {
    alert("Email ou senha incorretos");
  }
}



function cadastrarSe(){
  const nomeCadastro = document.querySelector('#nomeCadastro').value;
  const emailCadastro = document.querySelector('#emailCadastro').value;
  const password1 = document.querySelector('#password1').value;
  const password2 = document.querySelector('#password2').value;
  
  if(nomeCadastro != '' && emailCadastro != '' && password1 != '' && password2 != '')
  {
    alert("Cadastro realizado com sucesso!")
    
    // Redireciona para a página principal após login bem-sucedido
    window.location.href = '/index.html';
  }
  else
  {
    alert("Não foi possível fazer o cadastro. Tente novamente!")
  }
}

function verificaSenha(){
  if (password1 === password2)
    {
      return true
    }
    else
    {
      alert("As senhas devem ser iguais!")
      return false
    }
}