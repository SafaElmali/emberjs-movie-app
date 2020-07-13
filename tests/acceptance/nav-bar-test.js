import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | nav bar', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /movies', async function (assert) {
    await visit('/movies');

    assert.equal(currentURL(), '/movies');
    assert.dom('h1').hasText('Popular Movies');
    assert.dom('.footer .footer-button').hasText('Load More');
  });

  test('visiting home', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Trends');
  });
});
