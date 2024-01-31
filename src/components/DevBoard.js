import "@/components/ElectroPin.js";
import "@/components/WifiAntenna.js";
import "@/components/SystemOnChip.js";

class DevBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 600px;
        --height: calc(var(--width) * 0.57);
        --background-color: #202020;
      }

      .container {
        --hole-offset: 30px;
        --hole-size: 16px;
        --mask-color-list: transparent 0 var(--hole-size), white calc(var(--hole-size) + 0.75px);

        width: var(--width);
        height: var(--height);
        background: var(--background-color);
        mask-image:
          radial-gradient(circle var(--hole-size) at top var(--hole-offset) left var(--hole-offset), var(--mask-color-list)),
          radial-gradient(circle var(--hole-size) at bottom var(--hole-offset) left var(--hole-offset), var(--mask-color-list)),
          radial-gradient(circle var(--hole-size) at top var(--hole-offset) right var(--hole-offset), var(--mask-color-list)),
          radial-gradient(circle var(--hole-size) at bottom var(--hole-offset) right var(--hole-offset), var(--mask-color-list));
        -webkit-mask-composite: source-in;
        border-radius: 25px;

        display: grid;
        grid-template-rows: 60px 1fr 60px;
      }

      :is(.top, .bottom) {
        display: flex;
        justify-content: center;

        & .pins-header {
          width: calc(var(--width) - ((var(--hole-size) + (var(--hole-offset) * 2)) * 2));
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      .middle {
        display: grid;
        grid-template-columns: 6fr 2.5fr 1.5fr 1.75fr 1.75fr;

        & .wifi-soc-container {
          display: flex;
          align-items: center;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DevBoard.styles}</style>
    <div class="container">
      <div class="top">
        <div class="pins-header">
          <electro-pin text="D0"></electro-pin>
          <electro-pin text="D1"></electro-pin>
          <electro-pin text="D2"></electro-pin>
          <electro-pin text="D3"></electro-pin>
          <electro-pin text="D4"></electro-pin>
          <electro-pin text="3V3"></electro-pin>
          <electro-pin text="GND"></electro-pin>
          <electro-pin text="D5"></electro-pin>
          <electro-pin text="D6"></electro-pin>
          <electro-pin text="D7"></electro-pin>
          <electro-pin text="D8"></electro-pin>
          <electro-pin text="D8"></electro-pin>
          <electro-pin text="RX"></electro-pin>
          <electro-pin text="TX"></electro-pin>
          <electro-pin text="GND"></electro-pin>
          <electro-pin text="3V3"></electro-pin>
        </div>
      </div>
      <div class="middle">
        <div class="wifi-soc-container">
          <wifi-antenna></wifi-antenna>
          <system-on-chip></system-on-chip>
        </div>
        <div class="col-2"></div>
        <div class="col-3"></div>
        <div class="col-4"></div>
        <div class="col-5"></div>
      </div>
      <div class="bottom">
        <div class="pins-header">
          <electro-pin text="A0" flip></electro-pin>
          <electro-pin text="RSV" flip></electro-pin>
          <electro-pin text="RSV" flip></electro-pin>
          <electro-pin text="SD3" flip></electro-pin>
          <electro-pin text="SD2" flip></electro-pin>
          <electro-pin text="SD1" flip></electro-pin>
          <electro-pin text="CMD" flip></electro-pin>
          <electro-pin text="SD0" flip></electro-pin>
          <electro-pin text="CLK" flip></electro-pin>
          <electro-pin text="GND" flip></electro-pin>
          <electro-pin text="3V3" flip></electro-pin>
          <electro-pin text="EN" flip></electro-pin>
          <electro-pin text="RST" flip></electro-pin>
          <electro-pin text="RST" flip></electro-pin>
          <electro-pin text="GND" flip></electro-pin>
          <electro-pin text="Vin" flip></electro-pin>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("dev-board", DevBoard);
