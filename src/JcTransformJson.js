import { html, css, LitElement } from 'lit-element';
import '@granite-elements/ace-widget';

import codeForTransform from './config/initial.js';

export class JcTransformJson extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      data: { type: String },
    };
  }

  __transformJson() {
    const data = JSON.stringify(this.data);
    data.id = 1;
    const event = new CustomEvent('json-transform', {
      detail: {
        message: data,
      },
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <h1>Transform JSON</h1>
      <ace-widget
        placeholder="Write something... Anything..."
        mode="ace/mode/javascript"
        theme="ace/theme/crimson_editor"
        initial-focus
        value=${codeForTransform}
        wrap="true"
      >
      </ace-widget>
      <button @click=${this.__transformJson}>Transform</button>
    `;
  }
}
