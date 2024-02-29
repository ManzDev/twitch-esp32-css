class USBConnector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --height: 90px;

        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);
      }

      .container {
        --r: 10px;

        width: 65px;
        height: var(--height);
        background: var(--pin-color);
        display: grid;
        place-items: center;
        border-radius: var(--r) 0 0 var(--r) / calc(var(--r) * 2) 0 0 calc(var(--r) * 2);
        overflow: hidden;

        &::before, &::after {
          content: "";
          width: 5px;
          height: 10px;
          display: block;
          border-bottom: 7px solid #777;
          border-right: 7px solid #777;
          position: absolute;
          place-self: center start;
        }

        &::before { transform: translateY(-75%) scaleY(-1); }
        &::after { transform: translateY(75%) }

        & .surface {
          width: 100%;
          height: 70%;
          border-top: 4px solid #6e6b6b;
          border-bottom: 4px solid #a0a0a0;
          /* border-radius: var(--r) 0 0 var(--r) / calc(var(--r) * 0) 0 0 calc(var(--r) * 0);*/

          display: grid;
          place-items: center start;

          &::before, &::after {
            content: "";
            display: block;
            background: #555;
            width: 7px;
            height: 15px;
            transform: translateX(20px);
          }
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${USBConnector.styles}</style>
    <div class="container">
      <div class="surface">

      </div>
    </div>`;
  }
}

customElements.define("usb-connector", USBConnector);
