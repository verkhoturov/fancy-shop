import { CrossIcon } from './icon';
import { useProducts } from '@/store';
import { useState } from 'react';
import { ProductList } from '@/components/cart/ProductList';
import { OrderDetail } from '@/components/cart/OrderDatail';

export const Cart = ({ onClose }: { onClose: () => void }) => {
    const [openOrder, setOpenOrder] = useState(false);
    const [basket] = useProducts((state: any) => [state.basket]);
    const toggleOpen = (toggle: boolean) => () => {
        setOpenOrder(toggle);
    };

    return (
        <div className="cart">
            <button onClick={onClose} className="cart__closed-button" type="button">
                <CrossIcon />
            </button>
            <h2 className="cart__title">Cart</h2>
            {openOrder ? (
                <OrderDetail closeOrder={toggleOpen(false)} />
            ) : (
                <ProductList basket={basket} />
            )}
            <div className="cart__checkout-wrapper">
                {!openOrder && (
                    <button
                        className="cart__checkout-button button button--cart"
                        onClick={toggleOpen(true)}
                    >
                        Proceed to checkout
                    </button>
                )}
                <span className="cart__notice">
                    Shipping costs will be calculated in the next step
                </span>
            </div>
        </div>
    );
};
