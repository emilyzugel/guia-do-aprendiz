//
// NAVBAR COMPONENT
//
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <nav>
            <div class="container">
              <img class="scale" src="./images/becker-logo.svg">
              <div class="menu">
                <ul>
                  <li class="scale"><a href="inicio.html">Pagina Inicial</a></li>
                  <li class="scale"><a href="escritorio.html">Escritorio</a></li>
                  <li class="scale"><a href="deposito.html">Deposito</a></li>
                  <li class="scale"><a href="quem-somos.html">Quem somos</a></li>
                </ul>
              </div>
            </div>
          </nav>

`
  }
}

customElements.define('navbar-c', Navbar);

