import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
import {HeaderLayout as HeaderLayout} from './headerLayout.js';
import {FooterLayout as FooterLayout} from './footerLayout.js';

export class WebsiteApp extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `
  <div id="app">
    <div class="page-wrapper">
      <header-layout></header-layout>
      <div>This is some App - {{name}}</div>
      <footer-layout></footer-layout>
    </div>
  </div>
`
  }

  constructor() {
    super();
    this.name = 'website preview';
  }

  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define('website-app', WebsiteApp);
