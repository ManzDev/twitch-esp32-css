class SwitchButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        transform: rotate(-90deg);
        display: grid;
        justify-items: center;
      }

      .text {
        font-family: Jost, sans-serif;
        font-size: 0.75rem;
        color: var(--pin-color);
      }

      .button-container {
        --size: 35px;

        background: var(--pin-color);
        width: var(--size);
        height: var(--size);
        display: grid;
        place-items: center;

        & .button {
          border-radius: 50%;
          background: #121212;
          width: 75%;
          height: 75%;
        }
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text") || "UNKNOWN";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SwitchButton.styles}</style>
    <div class="container">
      <div class="text">${this.text}</div>
      <div class="button-container">
        <div class="button"></div>
      </div>
    </div>`;
  }
}

customElements.define("switch-button", SwitchButton);
