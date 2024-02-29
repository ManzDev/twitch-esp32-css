class CapacitorSMD extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        background: var(--color, #e5c2a2);
        border-top: 3px solid var(--pin-color);
        border-bottom: 3px solid var(--pin-color);
        width: 15px;
        height: 20px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CapacitorSMD.styles}</style>
    <div class="container">
    </div>`;
  }
}

customElements.define("capacitor-smd", CapacitorSMD);
