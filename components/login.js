// LOGIN COMPONENT
class LogIn extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="login">
        <div class="modal-overlay" id="loginModal" style="display: none;">
          <div class="login-modal">
            <div class="logo">
              <h2>Acesso Restrito</h2>
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

              <div class="error-message" id="errorMessage" style="display: none;">
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

    // Adiciona event listener após o elemento ser renderizado
    setTimeout(() => {
      this.setupEventListeners();
    }, 0);
  }

  setupEventListeners() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLogin();
      });
    }
  }

  handleLogin() {
    // SOLUÇÃO NUCLEAR - testa se o redirecionamento funciona
    console.log('FORÇANDO REDIRECIONAMENTO');
    window.location.href = 'escritorio.html';
    return false;
  }

  setupEventListeners() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // ISSO É IMPORTANTE!
        e.stopPropagation(); // PARA TUDO
        this.handleLogin();
        return false;
      });
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

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
  const modal = document.getElementById('loginModal');
  if (modal && e.target === modal) {
    const loginComponent = document.querySelector('login-c');
    if (loginComponent) {
      loginComponent.hideModal();
    }
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const loginComponent = document.querySelector('login-c');
    if (loginComponent) {
      loginComponent.hideModal();
    }
  }
});
