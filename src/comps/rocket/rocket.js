// rocket.js
class RocketComponent extends HTMLElement {
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
    return fetch('./comps/rocket/rocket.html')
      .then(response => response.text())
      .catch(error => console.log(error));
  }

  getStyle() {
    return fetch('./comps/rocket/rocket.css')
      .then(response => response.text())
      .catch(error => console.log(error));
  }
}

customElements.define('rocket-anim', RocketComponent);
