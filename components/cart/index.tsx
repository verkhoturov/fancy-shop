import { CrossIcon } from './icon';
import { ProductList } from '@/components/cart/ProductList';
import Link from 'next/link';

export const Cart = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="cart">
            <button onClick={onClose} className="cart__closed-button" type="button">
                <CrossIcon />
            </button>
            <h2 className="cart__title">Cart</h2>
	        <ProductList />
            <div className="cart__checkout-wrapper">
                <Link href="/checkout" legacyBehavior>
	                <a className="cart__checkout-button button button--cart">
		                Proceed to checkout
	                </a>
                </Link>
                <span className="cart__notice">
                    Shipping costs will be calculated in the next step
                </span>
            </div>
        </div>
    );
};
