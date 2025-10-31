//
// HEADER COMPONENT
//
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <header>
            <div class="container">
              <h1>GUIA DO APRENDIZ</h1>
              <p class="subtitle">Seu caminho para o sucesso profissional</p>
            </div>
          </header>

`
  }
}

customElements.define('header-c', Header);
