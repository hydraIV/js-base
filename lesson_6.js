var productList =  [
  { productName: 'Пицца',
    productPrice: 650,
    thumbnail: 'http://totopizza.ru/upload/iblock/5cc/5ccf48dc06ef939ad67a5031e23a9443.jpg',
    original: '', },
                                    
  { productName: 'Роллы',
    productPrice: 80, 
    thumbnail: 'http://totopizza.ru/upload/iblock/779/77909b2fb01ae5f383606b7659079e5d.jpg',
    original: '', },
                                    
  { productName: 'Pepsi',
    productPrice: 140,
    thumbnail: 'http://totopizza.ru/upload/iblock/bdb/bdbc7c50869c16282745cc5dd128c880.jpg',
    original: '', },
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

        var $genProductThumbnail = document.createElement('img');
        $genProductThumbnail.classList.add('thumbnail');
        $genProductThumbnail.name = i;
        $genProductThumbnail.src = productList[i].thumbnail;
        $singleProduct.appendChild($genProductThumbnail);

        var $genProductTitle = document.createElement('h1');
        $genProductTitle.textContent = productList[i].productName;
        $singleProduct.appendChild($genProductTitle);

        var $genProductPrice = document.createElement('div');
        $genProductPrice.textContent = productList[i].productPrice + ' руб.';
        $singleProduct.appendChild($genProductPrice);

        var $buyButton = document.createElement('button');
        $buyButton.classList.add('buy_button');
        $buyButton.name = i;
        $buyButton.textContent = 'Buy';
        $singleProduct.appendChild($buyButton);

        var $inputQuantity = document.createElement('input');
        $inputQuantity.type = 'number';
        $inputQuantity.id = 'inputQuantity_' + i;
        $singleProduct.appendChild($inputQuantity);

        var $products = document.querySelector('#products');
        $products.addEventListener('click', handleBuyButtonClick);
        $products.addEventListener('click', handleThumbnailClick);
    }
    
    $closeModal.addEventListener('click', handleCloseModalClick);

}

function handleThumbnailClick (event) {
  if (event.target.tagName === 'IMG') {
    
    var $modal = document.querySelector('#modal');
    var $original = document.createElement('img');
    $original.classList.add('original');
    $modal.innerHTML = '';
    $original.src = productList[+event.target.name].thumbnail;
    document.querySelector('#modal').appendChild($original);

    var $closeModal = document.createElement('button');
    $closeModal.classList.add('close_modal');
    $closeModal.id = 'close_modal';
    $closeModal.textContent = 'Close'
    document.querySelector('#modal').appendChild($closeModal);

    $modal.classList.toggle("closed");
    $closeModal.classList.toggle("closed");

  }
}

function handleCloseModalClick (event) {

$modal.classList.toggle('closed');
  
}

function handleBuyButtonClick (event) {
  if (event.target.tagName === 'BUTTON') {
    
    currentProduct = {
      productName: productList[+event.target.name].productName,
      productPrice: productList[+event.target.name].productPrice,
      productQuantity: document.querySelector('#inputQuantity_' + event.target.name).value,
    },

    cartProductCount ++;

    cart.push(currentProduct);

    var $newCartProduct = document.createElement('div');
    document.querySelector('#cart').appendChild($newCartProduct);
    $newCartProduct.classList.add('new_cart_product');
    $newCartProduct.textContent = cartProductCount + ' ' + currentProduct.productName + ' ' + currentProduct.productPrice + ' руб. X ' + currentProduct.productQuantity + ' = ' + currentProduct.productPrice * currentProduct.productQuantity + ' руб.';

    countTotal(cart);
  }
  
}

window.addEventListener('load', init);

function countTotal(cart) {

    var totalAmount = 0;
    var count = 0;

    for (var i = 0; i < cart.length; i++) {

        totalAmount += cart[i].productPrice * cart[i].productQuantity;
        count += +cart[i].productQuantity;

    }
    
    var message = '';

    if (count == 0) {

        message = 'Корзина пуста!';

    } else {

        message = 'ИТОГО: ' + count + ' товаров на сумму ' + totalAmount + ' руб.';

    }

    document.querySelector('#total').textContent = message;

}