class SerialConverter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
      }

      .serial-converter {
        width: 80%;
        height: 80%;
        background: black;
        position: relative;

        &::after {
          content: "";
          background: var(--pin-color);
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transform: translate(8px, 8px);
        }
      }

      :is(.top, .bottom, .left, .right) {
        --size: 7px;

        display: grid;
        grid-template-columns: repeat(8, var(--size));
        grid-template-rows: var(--size);
        gap: 4px;
        position: absolute;
        width: 100%;
        justify-content: space-evenly;

        & > div {
          background: var(--pin-color);
        }
      }

      :is(.left, .right) {
        width: auto;
        height: 100%;
        grid-template-columns: var(--size);
        grid-template-rows: repeat(8, var(--size));
        align-content: space-evenly;
      }

      .left { left: calc(var(--size) * -1); }
      .right { right: calc(var(--size) * -1); }
      .top { top: calc(var(--size) * -1); }
      .bottom { bottom: calc(var(--size) * -1); }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SerialConverter.styles}</style>
    <div class="container">
      <div class="serial-converter">
        <div class="top">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="left">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="right">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("serial-converter", SerialConverter);
