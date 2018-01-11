const { assert } = require('chai');
const			{ buildItemObject } = require('../test-utils');

describe('USER VISITS SINGLE ITEM', () => {
	describe('visit item page', () => {
//		it('creates new item and submit', () => {
//			const newItem = buildItemObject();
//			
//			browser.url('/items/create');
//			browser.setValue('#title-input', newItem.title);
//			browser.setValue('#description-input', newItem.description);
//			browser.setValue('#mageUrl-input', newItem.imageUrl);
//			browser.click('#submit-button');
//			assert.include(browser.getText('body'), itemToCreate.title);
//      assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
//		});
		
		it('click an item card link', () => {
			const newItem = buildItemObject();
			browser.url(`/items/${newItem._id}`)
			browser.click('.item-card a');
			assert.include(browser.getText('body'), itemToCreate.description);
		});
	});
});