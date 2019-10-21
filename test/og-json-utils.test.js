import { html, fixture, expect } from '@open-wc/testing';

import '../og-json-utils.js';

describe('OgJsonUtils', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <og-json-utils></og-json-utils>
    `);

    expect(el.data).to.equal(undefined);
  });
});
