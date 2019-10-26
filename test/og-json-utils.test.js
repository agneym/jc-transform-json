import { html, fixture, expect } from '@open-wc/testing';

import '../jc-transform-json.js';

describe('JcTransformJson', () => {
  it('is rendered', async () => {
    const el = await fixture(html`
      <jc-transform-json></jc-transform-json>
    `);

    expect(el.data).to.equal(undefined);
  });
});
