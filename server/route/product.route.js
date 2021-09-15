const app = require('express');
const db = require('../database/firebase')
const router = app.Router();

router.get('/get', async (req, res)=>{
    const {id} = req.query;
    const product = db.collection('products').doc(id);
    const doc = await product.get();
    if (!doc.exists) {
        res.send('No such document!');
    } else {
        res.send(doc.data());
    }
})
router.get('/search', async (req, res)=>{
    const { query } = req.query;
    
})
router.get('/getall', async (req, res)=>{
    const products = [];
    const citiesRef = db.collection('products');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
        products.push(doc.data());
    });
    // res.setTimeout(5000, () => res.send(products));
    res.send(products);
})
router.post('/create', async (req, res)=>{
    const {name, brand_name, short_description, price, list_price, discount, rating_average, review_count, order_count, favourite_count,stock_item, thumbnail_url,option_color,quantity_sold} = req.body;
    try {
        const document = db.collection('products').doc();
        const documentUuid = document.id;
            await document.set({
                uuid: documentUuid,
                name: name,
                brand_name: brand_name,
                short_description: short_description,
                price: price,
                list_price: list_price,
                discount: discount,
                rating_average : rating_average,
                review_count: review_count,
                order_count: order_count,
                favourite_count: favourite_count,
                thumbnail_url: thumbnail_url,
                option_color: option_color,
                quantity_sold: quantity_sold,
                stock_item: stock_item
            });
        res.send(`created ${name}`)
    } catch (err) {
        res.status(500);
        console.error(err)
    }
})

module.exports = router;