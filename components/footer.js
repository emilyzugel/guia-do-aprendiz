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
            <div class="logo">  
              <strong>Guia do Aprendiz</strong>
              <img src="./images/becker-logo.svg">
              <a class="link" href="./index.html">Log out</a>
            </div>

            <div class="menu">
              <ul><strong>Tópicos</strong></ul>
                <li class="scale"><a href="inicio.html">Pagina Inicial</a></li>
                <li class="scale"><a href="escritorio.html">Escritório</a></li>
                <li class="scale"><a href="deposito.html">Depósito</a></li>
                <li class="scale"><a href="quem-somos.html">Quem Somos</a></li>
            </div>

             <div class="dev">
              <h4>Desenvolvedores</h4>
              <div class="social-media">
                Juliano Kapelinski
                <div class="sm-wrapper">
                 <a class="scale" href=""><img src="./images/linkedin.svg"></a>
                 <a class="scale" href=""><img src="./images/rede-social.svg"></a>
                 <a class="scale" href=""><img src="./images/instagram.svg"></a>
                 <a class="scale" href=""><img src="./images/facebook.svg"></a>
                </div>
              </div>

              <div class="social-media">
                 Emily Zugel
                <div class="sm-wrapper">
                 <a class="scale" href=""><img src="./images/linkedin.svg"></a>
                 <a class="scale" href=""><img src="./images/github.svg"></a>
                 <a class="scale" href=""><img src="./images/instagram.svg"></a>
                 <a class="scale" href=""><img src="./images/website.svg"></a>
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
