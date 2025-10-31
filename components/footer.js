//
// FOOTER COMPONENT
//
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="top">
            <strong>Guia do Aprendiz</strong>

            <div class="menu">
              <ul><strong>Tópicos</strong></ul>
                <li><a href="guia-basico.html">Guia Básico</a></li>
                <li><a href="escritorio.html">Escritório</a></li>
                <li><a href="deposito.html">Depósito</a></li>
                <li><a href="quem-somos.html">Quem Somos</a></li>
            </div>

             <div class="dev">
              <h4>Desenvolvedores</h4>
              <div class="social-media">
                Juliano Kapelinski
                <div class="sm-wrapper">
                 <a href=""><img src="./images/linkedin.svg"></a>
                 <a href=""><img src="./images/rede-social.svg"></a>
                 <a href=""><img src="./images/instagram.svg"></a>
                 <a href=""><img src="./images/facebook.svg"></a>
                </div>
              </div>

              <div class="social-media">
                 Emily Zugel
                <div class="sm-wrapper">
                 <a href=""><img src="./images/linkedin.svg"></a>
                 <a href=""><img src="./images/github.svg"></a>
                 <a href=""><img src="./images/instagram.svg"></a>
                 <a href=""><img src="./images/website.svg"></a>
              </div>

            </div>

          </div>
            
        </div>

          <div class="bottom">
            © 2025 Lojas Becker — Projeto Acadêmico  de Extensão - URI
          </div>

        </div>
      </footer>
`
  }
}

customElements.define('footer-c', Footer);
