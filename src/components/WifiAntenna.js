class WifiAntenna extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 115px;
        --height: 175px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #000000;
        display: grid;
        place-items: end start;
      }

      path {
        stroke: #bb9038;
        stroke-width: 1px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${WifiAntenna.styles}</style>
    <div class="container">
      <svg viewBox="0 0 25 39">
        <path d="M 9.9,7 V 13.3 H 18.9 v 3.7 H 9.9 v 3.5 H 18.8 v 3.7 H 9.9 v 3.6 H 18.8 v 3.9 H 9.9 v 4.5 H 26.5" />
        <path d="M 22.7,36.2 V 13.2" />
      </svg>
    </div>`;
  }
}

customElements.define("wifi-antenna", WifiAntenna);
