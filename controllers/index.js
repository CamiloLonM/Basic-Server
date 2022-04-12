const items = [
    { id:1, name: 'Product 1'},
    { id:2, name: 'Product 2'},
    { id:3, name: 'Product 3'},        
];

const index = (req, res) => {
    res.render('index', {
        title: 'My WebStore'
    });
};


const listOfProducts = (req,res,next) => {
    res.render('products', {
        title: 'List of Porducts',
        items: items
    });
};

const newProduct = (req,res,next) => {
    const {newItem}  = req.body;
    items.push({
        id:items.length + 1,
        name: newItem
    });
    res.redirect('/products');
};

module.exports = {
    index,
    listOfProducts,
    newProduct
};