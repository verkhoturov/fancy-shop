export const Products = () => {
    return (
        <ul className="catalog__products products">
            <li className="product-cart product-cart--discount">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">RAINBOWZ</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Add to cart</button>
                </div>
            </li>
            <li className="product-cart product-cart--soon">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">GUAVA JELLY</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Pre-order</button>
                </div>
            </li>
            <li className="product-cart product-cart--discount product-cart--limited">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">CANDY GAS</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Add to cart</button>
                </div>
            </li>
            <li className="product-cart product-cart--discount product-cart--disabled">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">KAWAZAKI</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product button--product--disabled">Out of stock</button>
                </div>
            </li>
            <li className="product-cart">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">ZERBERRY</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Add to cart</button>
                </div>
            </li>
            <li className="product-cart product-cart--discount">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">RS11</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Add to cart</button>
                </div>
            </li>
            <li className="product-cart">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">PINL CHEDDAR</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Add to cart</button>
                </div>
            </li>
            <li className="product-cart product-cart--discount">
                <div className="product-cart__img-container">
                    <picture>
                        <img className="product-cart__img" src="#" alt="#" />
                    </picture>
                </div>
                <div className="product-cart__text-wrapper">
                    <h2 className="product-cart__title">PITAYA</h2>
                    <p className="product-cart__made">groundedgenetics</p>
                    <p className="product-cart__discount">-35%</p>
                    <p className="product-cart__full-price">740 €</p>
                    <p className="product-cart__deal-price">420 €</p>
                    <button className="product-cart__button button button--product">Add to cart</button>
                </div>
            </li>
        </ul>
    );
};