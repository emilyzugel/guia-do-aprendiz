// LOGIN COMPONENT
class LogIn extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="login">
        <div class="modal-overlay" id="loginModal">
          <div class="login-modal">
            <span class="close-btn" onclick="this.closest('login-c').hideModal()">&times;</span>
            
            <div class="logo">
              <h2>Acesso Restrito</h2>
              <img src="./images/becker-logo.svg" height="50px" width="auto">
              <p>Faça login para acessar o guia</p>
            </div>

            <form class="login-form" id="loginForm">
              <div class="form-group">
                <label for="username">Usuário</label>
                <input type="text" id="username" placeholder="Digite seu usuário" required>
              </div>

              <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" required>
              </div>

              <button type="submit" class="btn-login">Entrar</button>

              <div class="error-message" id="errorMessage">
                Usuário ou senha incorretos. Tente novamente.
              </div>
            </form>

            <div class="bottomr">
              Em caso de problemas, entre em contato com o RH.
            </div>
          </div>
        </div>
      </section>
    `;

    // Adiciona event listeners após renderizar
    setTimeout(() => {
      this.setupEventListeners();
    }, 100);
  }

  setupEventListeners() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.handleLogin();
        return false;
      });
    }

    // Esconde mensagem de erro inicialmente
    if (errorMessage) {
      errorMessage.style.display = 'none';
    }
  }

  handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    console.log('Tentando login com:', username, password);

    // Credenciais simples para teste
    const validCredentials = [
      { user: 'admin', pass: '123' },
      { user: 'aprendiz', pass: 'becker' },
      { user: 'user', pass: 'password' }
    ];

    const isValid = validCredentials.some(cred =>
      cred.user === username && cred.pass === password
    );

    if (isValid) {
      console.log('Login válido! Redirecionando...');
      // Redireciona para a página do escritório
      window.location.href = 'inicio.html';
    } else {
      console.log('Login inválido!');
      errorMessage.style.display = 'block';
    }
  }

  // Método para mostrar o modal
  showModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'flex';
      // Limpa os campos quando abre o modal
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
      document.getElementById('errorMessage').style.display = 'none';
    }
  }

  // Método para esconder o modal
  hideModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}

customElements.define('login-c', LogIn);

// Função global para abrir o login
function login() {
  const loginComponent = document.querySelector('login-c');
  if (loginComponent) {
    loginComponent.showModal();
  }
}

// Fechar modal ao clicar fora ou com ESC
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    const loginComponent = document.querySelector('login-c');
    if (loginComponent) {
      loginComponent.hideModal();
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const loginComponent = document.querySelector('login-c');
    if (loginComponent) {
      loginComponent.hideModal();
    }
  }
});
