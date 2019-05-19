var productList =  [
  { productName: 'Пицца',
    productPrice: 650,
    productQuantity: 1, },
                                    
  { productName: 'Роллы',
    productPrice: 80,
    productQuantity: 10, },
                                    
  { productName: 'Pepsi',
    productPrice: 140,
    productQuantity: 2, },
];

var cart = [];

function init() {
    var $productsTitle = document.createElement('h1');
    var $cartTitle = $productsTitle.cloneNode();

    $productsTitle.classList.add('title');
    $productsTitle.textContent = 'Products';

    $cartTitle.classList.add('title');
    $cartTitle.textContent = 'Cart';

    document.querySelector('#products').appendChild($productsTitle);
    document.querySelector('#cart').appendChild($cartTitle);

    var $singleProduct = document.createElement('div');
    $singleProduct.id = '#single_product';
    $singleProduct.classList.add('single_product');
    document.querySelector('#products').appendChild($singleProduct);

    for (var i = 0; i <= productList.length; i++) {
        
        //var $genProductTitle = $productTitle.cloneNode(true);
        var $genProductTitle = document.createElement('h1');
        $genProductTitle.textContent = productList[i].productName;

        var $genProductPrice = document.createElement('div');
        $genProductPrice.textContent = productList[i].productPrice;
        
    
        document.querySelector('#single_product').appendChild($genProductTitle);
        document.querySelector('#single_product').appendChild($genProductPrice);
    }
}

window.addEventListener('load', init);

function countTotal(cart) {

    var totalAmount = 0;
    var count = 0;

    for (var i = 0; i < cart.length; i++) {

        totalAmount += cart[i].productPrice * cart[i].productQuantity;
        count += cart[i].productQuantity;

    }
    
    var message = '';

    if (count == 0) {

        message = 'Корзина пуста!';

    } else {

        message = 'ИТОГО: ' + count + ' товаров на сумму ' + totalAmount + ' руб.';

    }
    
    //var $cart = document.getElementById('cart');
   // $cart.textContent = message;

}