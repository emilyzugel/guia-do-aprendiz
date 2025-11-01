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
                <navigation-links></navigation-links>
              </div>
            </div>
          </nav>

`
  }
}

customElements.define('navbar-c', Navbar);

