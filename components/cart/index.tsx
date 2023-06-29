import { CrossIcon } from './icon';

export const Cart = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="cart">
            <button onClick={onClose} className="cart__closed-button" type="button">
                <CrossIcon />
            </button>
            <h2 className="cart__title">Cart</h2>
            <ul className="cart__list">
                <li className="cart__item">
                    <a className="cart__img-link" href="#">
                        <picture>
                            <img
                                className="cart__img"
                                src="/images/seeds/rainbowz.jpg"
                                alt="Rainbowz"
                            />
                        </picture>
                    </a>
                    <div className="cart__wrapper">
                        <div className="cart__content-wrapper">
                            <a href="#" className="cart__product-link">
                                <h2 className="cart__product-name">Rainbowz</h2>
                            </a>
                            <p className="cart__price">420 €</p>
                        </div>
                        <div className="cart__button-wrapper">
                            <div className="cart__amount-container">
                                <button className="cart__amount-button" type="button">
                                    -
                                </button>
                                <label htmlFor="product-amount"></label>
                                <input
                                    className="cart__amount-input"
                                    id="product-amount"
                                    type="number"
                                    name="product-amount"
                                    value="1"
                                ></input>
                                <button className="cart__amount-button" type="button">
                                    +
                                </button>
                            </div>
                            <button className="cart__delete-button" type="button">
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
                <li className="cart__item">
                    <a className="cart__img-link" href="#">
                        <picture>
                            <img
                                className="cart__img"
                                src="/images/seeds/zerberry.jpg"
                                alt="Rainbowz"
                            />
                        </picture>
                    </a>
                    <div className="cart__wrapper">
                        <div className="cart__content-wrapper">
                            <a href="#" className="cart__product-link">
                                <h2 className="cart__product-name">Zerberry</h2>
                            </a>
                            <p className="cart__price">420 €</p>
                        </div>
                        <div className="cart__button-wrapper">
                            <div className="cart__amount-container">
                                <button className="cart__amount-button" type="button">
                                    -
                                </button>
                                <label htmlFor="product-amount"></label>
                                <input
                                    className="cart__amount-input"
                                    id="product-amount"
                                    type="number"
                                    name="product-amount"
                                    value="1"
                                ></input>
                                <button className="cart__amount-button" type="button">
                                    +
                                </button>
                            </div>
                            <button className="cart__delete-button" type="button">
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="cart__checkout-wrapper">
                <a className="cart__checkout-button button button--cart" href="#">
                    Proceed to checkout
                </a>
                <span className="cart__notice">
                    Shipping costs will be calculated in the next step
                </span>
            </div>
        </div>
    );
};
