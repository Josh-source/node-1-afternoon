const products = require('../products.json');

const getProduct= (require, respond) => {
    if (require.query.price) {
        const items = products.filter(val => val.price >= parseInt(require.query.price));
        return respond.status(200).send(items);
    }
    respond.status(200).send(products);
}
module.exports = getProduct;