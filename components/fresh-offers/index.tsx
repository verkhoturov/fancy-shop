export const FreshOffers = () => {
    return (
        <section className="fresh-offers">
            <h2 className="fresh-offers__title">Fresh offers</h2>
            <ul className="products-list products-list--fresh">
                <li className="product-card product-card--discount">
                    <div className="product-card__img-container">
                        <picture>
                            <img className="product-card__img" src="#" alt="#" />
                        </picture>
                    </div>
                    <div className="product-card__text-wrapper">
                        <h2 className="product-card__title">KAWAZAKI</h2>
                        <p className="product-card__made">groundedgenetics</p>
                        <p className="product-card__discount">-35%</p>
                        <p className="product-card__full-price">740 €</p>
                        <p className="product-card__deal-price">420 €</p>
                        <button className="product-card__button button button--product button--product--disabled">Out of stock</button>
                    </div>
                </li>
                <li className="product-card">
                    <div className="product-card__img-container">
                        <picture>
                            <img className="product-card__img" src="#" alt="#" />
                        </picture>
                    </div>
                    <div className="product-card__text-wrapper">
                        <h2 className="product-card__title">ZERBERRY</h2>
                        <p className="product-card__made">groundedgenetics</p>
                        <p className="product-card__discount">-35%</p>
                        <p className="product-card__full-price">740 €</p>
                        <p className="product-card__deal-price">420 €</p>
                        <button className="product-card__button button button--product">Add to cart</button>
                    </div>
                </li>
                <li className="product-card product-card--discount">
                    <div className="product-card__img-container">
                        <picture>
                            <img className="product-card__img" src="#" alt="#" />
                        </picture>
                    </div>
                    <div className="product-card__text-wrapper">
                        <h2 className="product-card__title">RS11</h2>
                        <p className="product-card__made">groundedgenetics</p>
                        <p className="product-card__discount">-35%</p>
                        <p className="product-card__full-price">740 €</p>
                        <p className="product-card__deal-price">420 €</p>
                        <button className="product-card__button button button--product">Add to cart</button>
                    </div>
                </li>
                <li className="product-card product-card--discount">
                    <div className="product-card__img-container">
                        <picture>
                            <img className="product-card__img" src="#" alt="#" />
                        </picture>
                    </div>
                    <div className="product-card__text-wrapper">
                        <h2 className="product-card__title">RS11</h2>
                        <p className="product-card__made">groundedgenetics</p>
                        <p className="product-card__discount">-35%</p>
                        <p className="product-card__full-price">740 €</p>
                        <p className="product-card__deal-price">420 €</p>
                        <button className="product-card__button button button--product">Add to cart</button>
                    </div>
                </li>
            </ul>
        </section>
    );
};
