import { ChangeEvent, useEffect, useState } from 'react';
import { useProducts } from '@/store';

interface TCounterControl {
    productId: number;
}

const quantityChange = (cloneLineItems: any, productId: number, type: string) => {
    const current = [...cloneLineItems].find((item) => item.product_id === productId);
    const elementIndex = [...cloneLineItems].findIndex((item) => item.product_id === productId);

    if (type === 'increment') {
        current.quantity += 1;
    } else if (type === 'decrement') {
        current.quantity -= 1;
    }
    cloneLineItems[elementIndex] = current;
    return cloneLineItems;
};

export const CounterControl = ({ productId }: TCounterControl) => {
    const [basket, lineItems, addBasket, addLineItems] = useProducts((state: any) => [
        state.basket,
        state.lineItems,
        state.addBasket,
        state.addLineItems,
    ]);
    const [quantity, setQuality] = useState(1);

    useEffect(() => {
        setQuality(lineItems.find((item: any) => item.product_id === productId).quantity);
    }, [lineItems, setQuality, productId]);

    useEffect(() => {
        if (quantity < 1) {
            addBasket(basket.filter((item: any) => item.id !== productId));
            addLineItems(lineItems.filter((item: any) => item.product_id !== productId));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    const onChange = (e: any) => {
        setQuality(e.target.value);
    };

    const increment = () => {
        setQuality((state) => state + 1);
        addLineItems(quantityChange([...lineItems], productId, 'increment'));
    };

    const decrement = () => {
        if (basket.length === 1 && quantity < 2) return;
        setQuality((state) => state - 1);
        addLineItems(quantityChange([...lineItems], productId, 'decrement'));
    };

    return (
        <div className="cart__amount-container">
            <button
                className="cart__amount-button"
                onClick={decrement}
                style={{ opacity: basket.length === 1 && quantity < 2 ? 0.5 : 1 }}
            >
                -
            </button>
            <label htmlFor="product-amount"></label>
            <input
                className="cart__amount-input"
                id="product-amount"
                type="number"
                name="product-amount"
                value={quantity}
                onChange={onChange}
            ></input>
            <button className="cart__amount-button" onClick={increment}>
                +
            </button>
        </div>
    );
};
