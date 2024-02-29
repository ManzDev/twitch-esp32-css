(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&f(s)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        font-family: Jost, sans-serif;
        font-size: 0.7rem;
        text-align: center;
        color: #aaa;
      }
    `}connectedCallback(){this.text=this.getAttribute("text")??"??",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
    <div class="container">
      <div class="pin-box">
        <div class="pin"></div>
      </div>
      <div class="text">${this.text}</div>
    </div>`}}customElements.define("electro-pin",r);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 115px;
        --height: 175px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #000000;
        display: grid;
        place-items: end start;
      }

      path {
        stroke: #bb9038;
        stroke-width: 1px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="container">
      <svg viewBox="0 0 25 39">
        <path d="M 9.9,7 V 13.3 H 18.9 v 3.7 H 9.9 v 3.5 H 18.8 v 3.7 H 9.9 v 3.6 H 18.8 v 3.9 H 9.9 v 4.5 H 26.5" />
        <path d="M 22.7,36.2 V 13.2" />
      </svg>
    </div>`}}customElements.define("wifi-antenna",o);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
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
    </div>`}}customElements.define("system-on-chip",a);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="heatsink"></div>
      <div class="chip">AM1117</div>
      <div class="pin-container">
        <div class="pin"></div>
        <div class="pin"></div>
        <div class="pin"></div>
      </div>
    </div>`}}customElements.define("esp32-transistor",c);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="end"></div>
      <div class="dark"></div>
      <div class="light"></div>
      <div class="end"></div>
    </div>`}}customElements.define("diodo-rect",d);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      .container {
        background: var(--color, #e5c2a2);
        border-top: 3px solid var(--pin-color);
        border-bottom: 3px solid var(--pin-color);
        width: 15px;
        height: 20px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
    </div>`}}customElements.define("capacitor-smd",n);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="resistance"></div>
      <div class="resistance"></div>
    </div>`}}customElements.define("resistance-smd",l);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
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
    </div>`}}customElements.define("serial-converter",p);class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.text=this.getAttribute("text")||"UNKNOWN",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${v.styles}</style>
    <div class="container">
      <div class="text">${this.text}</div>
      <div class="button-container">
        <div class="button"></div>
      </div>
    </div>`}}customElements.define("switch-button",v);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">
      <div class="surface">

      </div>
    </div>`}}customElements.define("usb-connector",h);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 600px;
        --height: calc(var(--width) * 0.57);
        --background-color: #202020;

        --pin-color: #8d898c;
        --dark-pin-color: color-mix(in srgb, var(--pin-color), black 30%);
        --chip-color: #3d3b3c;

        display: block;
        width: var(--width);
        position: relative;
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
        grid-template-columns: 6fr 2.5fr 3.25fr 1.75fr;

        & .wifi-soc-container {
          display: flex;
          align-items: center;
        }

        & .smd-circuit {
          width: 10px;
          height: 12px;
          background: var(--chip-color);
          border-top: 4px solid var(--pin-color);
          border-bottom: 4px solid var(--pin-color);
        }

        & .col-2 {
          padding-left: 2rem;
          display: grid;
          grid-template-rows: 5.5fr 1.5fr 3fr;

          & .col-top {
            display: grid;
            align-items: center;
          }

          & .col-middle {
            display: grid;
            grid-template-columns: 0.8fr 1fr;
            place-items: center;
          }
        }

        & .col-3 {
          padding-left: 1rem;
          display: grid;
          grid-template-rows: 0.5fr 1.15fr 0.5fr;

          & :is(.col-top, .col-bottom) {
            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 5px;
            margin: 0 5px;
          }
        }

        & .col-4 {
          display: grid;
          grid-template-rows: 1fr 2fr 1fr;
          align-items: center;
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${m.styles}</style>
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
        <div class="col-2">
          <div class="col-top">
            <esp32-transistor></esp32-transistor>
          </div>
          <div class="col-middle">
            <div class="smd-circuit"></div>
            <diodo-rect class="small"></diodo-rect>
          </div>
          <div class="col-bottom">
            <diodo-rect></diodo-rect>
          </div>
        </div>
        <div class="col-3">
            <div class="col-top">
              <capacitor-smd></capacitor-smd>
              <resistance-smd></resistance-smd>
              <capacitor-smd></capacitor-smd>
              <resistance-smd></resistance-smd>
            </div>
            <div class="col-middle">
              <serial-converter></serial-converter>
            </div>
            <div class="col-bottom">
              <capacitor-smd></capacitor-smd>
              <resistance-smd></resistance-smd>
              <capacitor-smd></capacitor-smd>
              <resistance-smd></resistance-smd>
            </div>
        </div>
        <div class="col-4">
          <switch-button text="FLASH"></switch-button>
          <div></div>
          <switch-button text="RESET"></switch-button>
        </div>
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
    </div>
    <usb-connector></usb-connector>`}}customElements.define("dev-board",m);
