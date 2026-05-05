export interface Product {
    id: number;
    name: string;
    price: number;
    discount: number;
}
export declare const products: Product[];
export declare const getDiscountedProducts: (productsArray: Product[]) => Product[];
export declare const calculateTotalPrice: (productsArray: Product[]) => number;
//# sourceMappingURL=data.d.ts.map