const router = require('express').Router();

const Item = require('../models/item');

router.get('/', async (req, res, next) => {
  const items = await Item.find({});
  res.render('index', {items});
});

router.get('/items/create', async (req, res, next) => {
  res.render('create');
});

router.post('/items/create', async (req, res, next) => {
  const {title, description, imageUrl} = req.body;
  const newItem = new Item({title, description, imageUrl});
  newItem.validateSync();
  if (newItem.errors) {
    res.status(400).render('create', {newItem: newItem});
  } else {
    await newItem.save();
    res.redirect('/');
  }
});

router.get('/items/:itemid', async (req, res, next) => {
	const itemId = req.params.itemid;
	const item = await Item.findById(itemId);
	const html = '<div id="item-title" class="item-card"><a href="#">' + item.title + '</a></div><div id="item-description">' + item.description + '</div>'
	res.send(html);
	
//	res.render('index', {
//		title: item.title,
//		description: item.title,
//		imageUrl: item.imageUrl
//	});
});

module.exports = router;
 