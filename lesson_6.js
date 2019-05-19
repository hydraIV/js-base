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
var cartProductCount = 0;

function init() {

    var $productsTitle = document.createElement('h1');
    var $cartTitle = $productsTitle.cloneNode();

    $productsTitle.classList.add('title');
    $productsTitle.textContent = 'Products';

    $cartTitle.classList.add('title');
    $cartTitle.textContent = 'Cart';

    document.querySelector('#products').appendChild($productsTitle);
    document.querySelector('#cart').appendChild($cartTitle);

    var $total = document.createElement('div');
    document.querySelector('#cart').appendChild($total);
    $total.id = 'total';

    for (var i = 0; i < productList.length; i++) {
        
        var $singleProduct = document.createElement('div');
        $singleProduct.classList.add('single_product');
        document.querySelector('#products').appendChild($singleProduct);

        var $genProductTitle = document.createElement('h1');
        $genProductTitle.textContent = productList[i].productName;
        $singleProduct.appendChild($genProductTitle);

        var $genProductPrice = document.createElement('div');
        $genProductPrice.textContent = productList[i].productPrice;
        $singleProduct.appendChild($genProductPrice);

        var $buyButton = document.createElement('button');
        $buyButton.classList.add('buy_button');
        $buyButton.name = i;
        $buyButton.textContent = 'Buy';
        $singleProduct.appendChild($buyButton);

        var $inputQuantity = document.createElement('input');
        $inputQuantity.type = 'number';
        $inputQuantity.id = 'inputQuantity';
        $singleProduct.appendChild($inputQuantity);

        var $products = document.querySelector('#products');
        $products.addEventListener('click', handleBuyButtonClick);
    }
}

function handleBuyButtonClick (event) {
  if (event.target.tagName === 'BUTTON') {
    
    currentProduct = {
      productName: productList[+event.target.name].productName,
      productPrice: productList[+event.target.name].productPrice,
      productQuantity: +document.querySelector('#inputQuantity').textContent,
    },

    cartProductCount ++;

    console.log(cart);
    countTotal(cart);

    cart.push(currentProduct);

    var $newCartProduct = document.createElement('div');
    document.querySelector('#cart').appendChild($newCartProduct);
    $newCartProduct.classList.add('new_cart_product');
    $newCartProduct.textContent = cartProductCount + ' ' + currentProduct.productName + ' ' + currentProduct.productPrice + ' X ' + currentProduct.productQuantity + ' = ' + currentProduct.productPrice * currentProduct.productQuantity;
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

    document.querySelector('#total').textContent = message;

}