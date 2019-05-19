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

    
    var $modalOverlay = document.querySelector("#modal_overlay");
    var $closeModal = document.querySelector("#close_modal");

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
        $products.addEventListener('click', handleThumbnailClick);
    }
    
    $closeModal.addEventListener('click', handleCloseModalClick);

}

function handleThumbnailClick (event) {
  if (event.target.tagName === 'IMG') {
    
    var $modal = document.querySelector('#modal');
    var $original = document.createElement('img');
    $original.src = productList[+event.target.name].thumbnail;
    document.querySelector('#modal').appendChild($original);
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");

  }
}

function handleCloseModalClick (event) {

modal.classList.toggle("closed");
modalOverlay.classList.toggle("closed");
  
}

function handleBuyButtonClick (event) {
  if (event.target.tagName === 'BUTTON') {
    
    currentProduct = {
      productName: productList[+event.target.name].productName,
      productPrice: productList[+event.target.name].productPrice,
      productQuantity: 1,
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