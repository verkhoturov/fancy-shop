export const ProductCard = () => {
    return (
        <div className="product-card product-card--discount">
            <div className="product-card__img-container">
                <picture>
                    <img className="product-card__img" src="#" alt="#" />
                </picture>
            </div>
            <div className="product-card__text-wrapper">
                <h2 className="product-card__title">RAINBOWZ</h2>
                <p className="product-card__made">groundedgenetics</p>
                <p className="product-card__discount">-35%</p>
                <p className="product-card__full-price">740 €</p>
                <p className="product-card__deal-price">420 €</p>
                <button className="product-card__button button button--product">Add to cart</button>
            </div>
        </div>
    );
};
