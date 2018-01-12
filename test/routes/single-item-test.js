const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

//const {parseTextFromHTML, buildItemObject} = require('../test-utils');
const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

	// Write your test blocks below:
	describe('Item details', () => {
		
		it('renders a selected item', async () => {
			
			const item = await seedItemToDatabase();
			const response = await request(app)
															.get(`/items/${item._id}`);

			assert.include(item.title, parseTextFromHTML(response.text, '#item-title'));
			assert.include(item.description, parseTextFromHTML(response.text, '#item-description'));
		});
	});
});
