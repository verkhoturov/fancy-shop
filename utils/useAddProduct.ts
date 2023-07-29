import { useProducts } from '@/store';
import { MouseEvent, useEffect, useState } from 'react';

export const useAddProduct = (prodId: number) => {
    const [products, basket, lineItems, addBasket, addLineItems] = useProducts((state: any) => [
        state.products,
        state.basket,
        state.lineItems,
        state.addBasket,
        state.addLineItems,
    ]);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const isAdd = basket?.findIndex((item: any) => item.id === prodId) !== -1;
        setIsAdded(isAdd);
    }, [basket]);

    const addProduct = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isAdded) return;
        const product = products.find((item: any) => item.id === prodId);
        if (!basket) {
            addLineItems([{ product_id: product.id, quantity: 1 }]);
            return addBasket([product]);
        }
        addBasket([...basket, product]);
        addLineItems([...lineItems, { product_id: product.id, quantity: 1 }]);
    };

    return {
        isAdded,
        addProduct,
    };
};
