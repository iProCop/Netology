export const products = [
    { id: 1, name: "Телефон", price: 50000, discount: 10 },
    { id: 2, name: "Ноутбук", price: 100000, discount: 5 },
    { id: 3, name: "Планшет", price: 30000, discount: 15 },
    { id: 4, name: "Наушники", price: 5000, discount: 0 }
];
export const getDiscountedProducts = (productsArray) => {
    return productsArray.filter(product => product.discount > 0);
};
export const calculateTotalPrice = (productsArray) => {
    return productsArray.reduce((total, product) => {
        const discountedPrice = product.price - (product.price * (product.discount / 100));
        return total + discountedPrice;
    }, 0);
};
//# sourceMappingURL=data.js.map