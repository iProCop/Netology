import calculatePrice from './src/prices.js';
import { checkPrice } from './src/prices.js';
import { sayHello } from './utils/message.js';
import { products, calculateTotalPrice, getDiscountedProducts } from './utils/data.js';

const nameUser: string = sayHello("VIP");

console.log(nameUser);
console.log("----------");

const discounted = getDiscountedProducts(products);
console.log(`Товары со скидкой:`);
discounted.forEach(product => {
    const discountedPrice: number = product.price - (product.price * (product.discount / 100));
    console.log(`- ${product.name}: цена - ${product.price} руб. (персональная скидка - ${product.discount}%), цена с учетом скидки - ${discountedPrice} руб.`);
});

console.log("----------");

const total: number = calculateTotalPrice(products);
console.log(`Общая сумма всех товаров: ${total} руб.`);