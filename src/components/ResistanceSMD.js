class ResistanceSMD extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 3px;
        width: 100%;
        height: 20px;
        place-items: center;
      }

      .resistance {
        background: var(--color, #111);
        border-left: 3px solid var(--pin-color);
        border-right: 3px solid var(--pin-color);
        width: 15px;
        height: 10px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ResistanceSMD.styles}</style>
    <div class="container">
      <div class="resistance"></div>
      <div class="resistance"></div>
    </div>`;
  }
}

customElements.define("resistance-smd", ResistanceSMD);
