class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('it is working');
  }
}

customElements.define('mh-tooltip', Tooltip);
