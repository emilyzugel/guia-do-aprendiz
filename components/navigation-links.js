//
// NAVBAR LINKS COMPONENT
//
class NavigationLinks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <ul>
          <li class="scale"><a href="inicio.html">Pagina Inicial</a></li>                  
          <li class="scale"><a href="tarefas.html">Tarefas</a></li>
          <li class="scale"><a href="ferramentas.html">Ferramentas</a></li>
          <li class="scale"><a href="quem-somos.html">Quem somos</a></li>
        </ul>
`
  }
}

customElements.define('navigation-links', NavigationLinks);
