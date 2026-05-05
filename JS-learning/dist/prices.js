export const calculateFinalPrice = (price, discount, parcentDiscount) => {
    const calcPrice = price - discount;
    const myPrice = calcPrice - (calcPrice * (parcentDiscount / 100));
    return myPrice;
};
export const checkPrice = (Price) => {
    if (Price < 50) {
        return "Отличная цена! Покупаем";
    }
    else if (Price >= 1000 && Price <= 8000) {
        return "Цена приемлема";
    }
    else {
        return "Дороговато, ждем скидок";
    }
};
//# sourceMappingURL=prices.js.map