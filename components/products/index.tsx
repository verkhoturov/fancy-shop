export const Products = () => {
  return (
    <ul className="catalog__products products">
      <li className="product-cart product-cart--discount">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/rainbowz.jpg"
                alt="rainbowz"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">RAINBOWZ</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Add to cart
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart product-cart--soon">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/guava-jelly.jpg"
                alt="guava jelly"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">GUAVA JELLY</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Pre-order
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart product-cart--discount product-cart--limited">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/candy-gas.jpg"
                alt="candy gas"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">CANDY GAS</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Add to cart
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart product-cart--discount product-cart--disabled">
        <a
          className="product-cart__link product-cart__link--disabled"
          href="/catalog/product-example"
        >
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/kawazaki.png"
                alt="kawazaki"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">KAWAZAKI</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button className="product-cart__button button button--product button--product--disabled">
              Out of stock
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/zerberry.jpg"
                alt="zerberry"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">ZERBERRY</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Add to cart
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart product-cart--discount">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/rs-11.jpg"
                alt="rs11"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">RS11</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Add to cart
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/pink-cheddar.jpg"
                alt="pink cheddar"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">PINK CHEDDAR</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Add to cart
            </button>
          </div>
        </a>
      </li>
      <li className="product-cart product-cart--discount">
        <a className="product-cart__link" href="/catalog/product-example">
          <div className="product-cart__img-container">
            <picture>
              <img
                className="product-cart__img"
                src="/images/seeds/pitaya.jpg"
                alt="pitaya"
              />
            </picture>
          </div>
          <div className="product-cart__text-wrapper">
            <h2 className="product-cart__title">PITAYA</h2>
            <p className="product-cart__made">groundedgenetics</p>
            <p className="product-cart__discount">-35%</p>
            <p className="product-cart__full-price">740 €</p>
            <p className="product-cart__deal-price">420 €</p>
            <button
              onClick={(e) => e.preventDefault()}
              className="product-cart__button button button--product"
            >
              Add to cart
            </button>
          </div>
        </a>
      </li>
    </ul>
  );
};
