const { assert } = require('chai');
const			{ buildItemObject } = require('../test-utils');

describe('USER VISITS SINGLE ITEM', () => {
	describe('visit item page', () => {
		it('visits the details of single item', () => {
			const newItem = buildItemObject();
			
			browser.url('/items/create');
			browser.setValue('#title-input', newItem.title);
			browser.setValue('#description-input', newItem.description);
			browser.setValue('#imageUrl-input', newItem.imageUrl);
			browser.click('#submit-button');
			assert.include(browser.getText('body'), newItem.title);
      assert.include(browser.getAttribute('body img', 'src'), newItem.imageUrl);

			browser.click('.item-card a');
			assert.include(browser.getText('body'), newItem.description);
		});
	});
});