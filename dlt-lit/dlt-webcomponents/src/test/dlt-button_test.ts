import {DltButton} from '../components/buttons/buttons';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('dlt-button', () => {
  test('is defined', () => {
    const el = document.createElement('dlt-button');
    assert.instanceOf(el, DltButton);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<dlt-button>Primary default</dlt-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button id="button" part="button" class=" dlt-button dlt-button-primary ">      
      <slot>Primary default</slot>
      </button>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<dlt-button variant="secondary">Secondary</dlt-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button id="button" part="button" class=" dlt-button dlt-button-secondary ">      
      <slot>Secondary</slot>
      </button>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<dlt-button></dlt-button>`)) as DltButton;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
