import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-page')
export default class MyPage extends LitElement {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return html`
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `;
  }
}
