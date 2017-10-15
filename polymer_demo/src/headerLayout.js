import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

export class HeaderLayout extends PolymerElement {

  static get template() {
    return `
  <header style="background-color: blue;">This is header</header>
`
  }

  constructor() {
    super();
  }

}

customElements.define('header-layout', HeaderLayout);
