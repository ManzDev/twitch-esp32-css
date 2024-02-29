class DiodoRect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        --size: 70px;
        --end-size: clamp(3px, calc(var(--size) * 0.15), 4px);
        --dark-size: clamp(3px, calc(var(--size) * 0.15), 10px);

        display: grid;
        grid-template-columns:
          var(--end-size) var(--dark-size) 1fr var(--end-size);
        grid-template-rows: 1fr;
        width: var(--size);
        height: calc(var(--size) * 0.5);
      }

      :host(.small) .container {
        --size: 30px;
      }

      .end {
        height: 40%;
        margin: auto 0;
        background: #e0babb;
      }

      .dark {
        background: #fd803f;
      }

      .light {
        background: #c4c392;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DiodoRect.styles}</style>
    <div class="container">
      <div class="end"></div>
      <div class="dark"></div>
      <div class="light"></div>
      <div class="end"></div>
    </div>`;
  }
}

customElements.define("diodo-rect", DiodoRect);
