
var basket = { products: [{ productName: 'Пицца',
                            productPrice: 650,
                            productQuantity: 1, },
                                    
                          { productName: 'Роллы',
                            productPrice: 80,
                            productQuantity: 10, },
                                    
                          { productName: 'Pepsi',
                            productPrice: 140,
                            productQuantity: 2, },],

                            countTotal: function(basket) {

                                var totalAmount = 0;
                                var count = 0;

                                for (var i = 0; i < this.products.length; i++) {

                                    totalAmount += this.products [i].productPrice * this.products [i].productQuantity;
                                    count += this.products [i].productQuantity;

                                }
                                
                                var message = '';

                                if (count == 0) {

                                    message = 'Корзина пуста!';

                                } else {

                                    message = 'ИТОГО: ' + count + ' товаров на сумму ' + totalAmount + ' руб.';

                                }
                                
                                var $cart = document.getElementById('cart');
                                $cart.textContent = message;

                            },
                     };

        basket.countTotal(basket);