// rainbow.js
class RainbowComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    let templateContent = await this.getTemplate();
    let styleContent = await this.getStyle();

    this.shadowRoot.innerHTML = `<style>${styleContent}</style>${templateContent}`;
  }

  getTemplate() {
    return fetch('./comps/rainbow/rainbow.html')
      .then(response => response.text())
      .catch(error => console.log(error));
  }

  getStyle() {
    return fetch('./comps/rainbow/rainbow.css')
      .then(response => response.text())
      .catch(error => console.log(error));
  }
}

customElements.define('rainbow-anim', RainbowComponent);
