var productList =  [
  { id: 1,
    productName: 'Пицца',
    productPrice: 650,
    thumbnail: 'http://totopizza.ru/upload/iblock/5cc/5ccf48dc06ef939ad67a5031e23a9443.jpg',
    productQuantity: 1,},
                                    
  { id: 2,
    productName: 'Роллы',
    productPrice: 80, 
    thumbnail: 'http://totopizza.ru/upload/iblock/779/77909b2fb01ae5f383606b7659079e5d.jpg',
    productQuantity: 1,},
                                    
  { id: 3,
    productName: 'Pepsi',
    productPrice: 140,
    thumbnail: 'http://totopizza.ru/upload/iblock/bdb/bdbc7c50869c16282745cc5dd128c880.jpg',
    productQuantity: 1,},
];

var cart = [];

function buildCatalog() {
  var $products = document.querySelector('#products');

  for (var i = 0; i < productList.length; i++) {
    var $template = document.querySelector('#template').children[0].cloneNode(true);

    $template.querySelector('.picture').src = productList[i].thumbnail;
    $template.querySelector('.picture').classList.add('thumbnail');
    $template.querySelector('.title').textContent = productList[i].productName;
    $template.querySelector('.price').textContent = productList[i].productPrice + ' руб.';
    $template.querySelector('.buy_button').textContent = 'Buy';
    $template.querySelector('.quantity').dataset.id = productList[i].id;

    $template.querySelector('.buy_button').dataset.src = productList[i].thumbnail;
    $template.querySelector('.buy_button').dataset.productName = productList[i].productName;
    $template.querySelector('.buy_button').dataset.productPrice = productList[i].productPrice;
    $template.querySelector('.buy_button').dataset.id = productList[i].id;

    $products.appendChild($template);
  }
}

function isExist(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return true;
    }
  }
  return false;
}

function findIndx (id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return i;
    }
  }
}

function handleBuyButtonClick (event) {
  if (event.target.tagName === 'BUTTON') {
    if (isExist(+event.target.dataset.id)) {
      var indx = findIndx(+event.target.dataset.id);
      cart[indx].productQuantity++;
    } else {
      cart.push({
        id: +event.target.dataset.id,
        productName: event.target.dataset.productName,
        productPrice: +event.target.dataset.productPrice,
        thumbnail: event.target.dataset.src,
        productQuantity: 1,
      });
    }

    countTotal(cart);
    buildCart(cart);

  }
  
}

function init() {

  buildCatalog();
  buildCart(cart);

  var $products = document.querySelector('#products');
  var $cart = document.querySelector('#cart');

  $products.addEventListener('click', handleBuyButtonClick);

  var $total = document.createElement('div');
  document.querySelector('#cart').appendChild($total);
  $total.id = 'total';

  var $cartProductList = document.createElement('div');
  $cart.appendChild($cartProductList);
  $cartProductList.id = 'cartProductList';

}

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
    document.querySelector('#cartProductList').innerHTML = '';

}

function buildCart(cart) {

  for (var i = 0; i < cart.length; i++) {
    
    var $cartProduct = document.createElement('div');
    $cartProduct.textContent = cart[i].id + ' - ' + cart[i].productName + ' - ' + cart[i].productQuantity;
    document.querySelector('#cartProductList').appendChild($cartProduct);
  }

  console.log(cart);
}

window.addEventListener('load', init);