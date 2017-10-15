import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

export class FooterLayout extends PolymerElement {

  static get template() {
    return `
  <style>
    footer {
      background-color: green;
    }
    div {
      color: yellow;
      background-color: red;
    }
</style>
  <div>And this is some custom styles not seen outside of component</div>
  <footer>This is footer</footer>
`
  }

  constructor() {
    super();
  }

}

customElements.define('footer-layout', FooterLayout);
