class SystemOnChip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 175px;
      }

      .chip {
        background: #464142;
        width: var(--size);
        height: var(--size);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        & section.right {
          position: absolute;
          right: -12px;
          bottom: 0;
          transform-origin: 100% 0%;
          transform: rotate(90deg);
          z-index: -1;
        }

        & section {
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          gap: 5px;
        }

        & section.top {
          transform: translateY(-20px);
        }

        & section.bottom {
          transform: translateY(20px);
        }
      }

      .cast-pin {
        width: 16px;
        height: 20px;
        background: #f3d6b5;
        border-radius: 2px 2px 0 0;
        mask-image:
          radial-gradient(circle 12px at 50% 60%, transparent 0 4px, white 4.5px),
          radial-gradient(circle 12px at 50% 0%, transparent 0 4px, white 4.5px);
        -webkit-mask-composite: source-in;

        &.flip {
          transform: scaleY(-1);
        }
      }

      svg.fcc {
        position: absolute;
        width: 65px;
        height: auto;
        left: 10px;
        bottom: 5px;

        & path {
          fill: #e0e0de;
        }
      }

      .wifi-logo {
        position: absolute;
        width: 65px;
        height: 30px;
        background: #afafaf;
        top: 10px;
        right: 10px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: end end;
        padding-right: 3px;
        padding-bottom: 3px;

        &::before {
          content: "";
          display: block;
          background: #3f3f3f;
          width: 6px;
          height: 8px;
          clip-path: polygon(105% 0, 0 105%, 105% 105%);
          transform: translateX(2px);
        }

        &::after {
          content: "";
          display: block;
          background: #3f3f3f;
          width: 32px;
          height: 26px;
          border-radius: 9px 9px 9px 0;
          box-sizing: border-box;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SystemOnChip.styles}</style>
    <div class="container">
      <div class="chip">
        <section class="top">
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
          <div class="cast-pin"></div>
        </section>
        <section class="right">
          <div class="cast-pin rotate"></div>
          <div class="cast-pin rotate"></div>
          <div class="cast-pin rotate"></div>
          <div class="cast-pin rotate"></div>
          <div class="cast-pin rotate"></div>
          <div class="cast-pin rotate"></div>
        </section>
        <section class="bottom">
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
          <div class="cast-pin flip"></div>
        </section>
        <svg class="fcc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
          <path d="M53.4 287v83.5H-97.1a25.1 25.1 0 0 0-24.6 25V514H42a244.3 244.3 0 0 1 241.9-213.6c96.6 0 180.3 56.7 219.7 138.5h-74.3a179.7 179.7 0 0 0-145.4-74.4A180 180 0 0 0 104 544.1 179.5 179.5 0 0 0 425.8 654h75.4a244.1 244.1 0 0 1-217.4 133.8c-122.4 0-224.2-90.9-241.2-208.7h-164.3v208.7h-58.5a25 25 0 0 1-25-24.6V370.5c0-46 37.5-83.5 83.5-83.5h175zm230.4 107.2c65.6 0 121.6 42.6 141.8 101.5h-71a85.8 85.8 0 1 0-2 99.6h72A150.3 150.3 0 0 1 283.8 694a150.2 150.2 0 0 1-150-149.9c0-82.5 67.4-149.9 150-149.9"
                transform="translate(240.6 -251.7)" />
        </svg>
        <div class="wifi-logo"></div>
      </div>
    </div>`;
  }
}

customElements.define("system-on-chip", SystemOnChip);
