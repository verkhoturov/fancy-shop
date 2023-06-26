export const ProductCart = () => {
    return (
        <div className="product-cart product-cart--discount">
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
        </div>
    );
};