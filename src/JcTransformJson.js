import { html, css, LitElement } from 'lit-element';
import '@granite-elements/ace-widget';

import codeForTransform from './config/initial.js';

export class JcTransformJson extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0 20px;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
          sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      }
      .editor {
        height: 80%;
      }
      .title {
        margin-top: 0;
      }
      .action-button {
        width: 80%;
        display: block;
        margin: 0 auto;
        background-color: rgb(59, 139, 235);
        color: #ffffff;
        padding: 10px;
        margin-top: 25px;
        border: 0;
        box-shadow: none;
        cursor: pointer;
      }
      .action-button:hover {
        background-color: rgba(59, 139, 235, 0.9);
      }
    `;
  }

  static get properties() {
    return {
      data: { type: String },
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  __transformJson() {
    try {
      const originalValueObj = JSON.parse(this.data);
      const transformedValue = Function(`"use strict";return (${this.value})`)()(originalValueObj);
      const event = new CustomEvent('json-transform', {
        detail: {
          message: transformedValue,
        },
      });
      this.dispatchEvent(event);
    } catch (err) {
      console.error(err);
    }
  }

  handleContent(event) {
    const { value } = event.detail;
    this.value = value;
  }

  render() {
    return html`
      <h1 class="title">Transform JSON</h1>
      <ace-widget
        placeholder="Write something... Anything..."
        mode="ace/mode/javascript"
        theme="ace/theme/crimson_editor"
        initial-focus
        value=${codeForTransform}
        wrap="true"
        class="editor"
        @editor-content=${this.handleContent}
      >
      </ace-widget>
      <button class="action-button" @click=${this.__transformJson}>Transform</button>
    `;
  }
}
