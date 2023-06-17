// bicycle.js
class BicycleComponent extends HTMLElement {
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
    return fetch('./comps/bicycle/bicycle.html')
      .then(response => response.text())
      .catch(error => console.log(error));
  }

  getStyle() {
    return fetch('./comps/bicycle/bicycle.css')
      .then(response => response.text())
      .catch(error => console.log(error));
  }
}

customElements.define('bicycle-anim', BicycleComponent);
