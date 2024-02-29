class Esp32Transistor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 17px 35px 20px;
      }

      .heatsink {
        width: 50%;
        height: 100%;
        margin: auto;
        background: var(--pin-color);
      }

      .chip {
        background: var(--chip-color);
        border: 4px solid #2a2a2a;
        border-right-color: #555;
        font-family: Jost, sans-serif;
        font-size: 0.8rem;
        color: #999;
        display: grid;
        place-items: center;
      }

      .pin-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 0.5rem;
        gap: 0.5rem;

        & .pin {
          background: var(--pin-color);
          border-bottom: 4px solid var(--dark-pin-color);
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Esp32Transistor.styles}</style>
    <div class="container">
      <div class="heatsink"></div>
      <div class="chip">AM1117</div>
      <div class="pin-container">
        <div class="pin"></div>
        <div class="pin"></div>
        <div class="pin"></div>
      </div>
    </div>`;
  }
}

customElements.define("esp32-transistor", Esp32Transistor);
