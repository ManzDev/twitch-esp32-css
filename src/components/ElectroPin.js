class ElectroPin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 26px;
        --pin-size: calc(var(--size) * 0.25);
        --path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
      }

      :host([flip]) .container {
        transform: rotate(180deg);
      }

      .container {
        max-width: var(--size);
      }

      .pin-box {
        width: var(--size);
        height: calc(var(--size) * 0.85);
        background: #4d4648;
        display: grid;
        place-items: center;
        clip-path: var(--path);

        & .pin {
          width: var(--pin-size);
          height: var(--pin-size);
          background: #ec8831;
          border-radius: 50%;
        }
      }

      .text {
        font-family: Jost;
        font-size: 0.7rem;
        text-align: center;
        color: #aaa;
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text") ?? "??";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ElectroPin.styles}</style>
    <div class="container">
      <div class="pin-box">
        <div class="pin"></div>
      </div>
      <div class="text">${this.text}</div>
    </div>`;
  }
}

customElements.define("electro-pin", ElectroPin);
