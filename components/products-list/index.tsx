import { useProducts } from '@/store';
import { CardItem } from '@/components/products-list/CardItem';
import { useEffect, useState } from 'react';

export const ProductsList = () => {
    const [data, setData] = useState<any>(null);
    const [products] = useProducts((state: any) => [state.products]);

    useEffect(() => {
        setData(products);
    }, [products]);

    return (
        <ul className="catalog__products products-list">
            {data && data.map((product: any) => <CardItem data={product} key={product.id} />)}

            {/*<li className="product-card product-card--soon">*/}
            {/*    <Link className="product-card__link" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/guava-jelly.jpg"*/}
            {/*                    alt="guava jelly"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">GUAVA JELLY</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button*/}
            {/*                onClick={(e) => e.preventDefault()}*/}
            {/*                className="product-card__button button button--product"*/}
            {/*            >*/}
            {/*                Pre-order*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="product-card product-card--discount product-card--limited">*/}
            {/*    <Link className="product-card__link" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/candy-gas.jpg"*/}
            {/*                    alt="candy gas"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">CANDY GAS</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button*/}
            {/*                onClick={(e) => e.preventDefault()}*/}
            {/*                className="product-card__button button button--product"*/}
            {/*            >*/}
            {/*                Add to cart*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="product-card product-card--discount product-card--disabled">*/}
            {/*    <Link className="product-card__link product-card__link--disabled" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/kawazaki.png"*/}
            {/*                    alt="kawazaki"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">KAWAZAKI</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button className="product-card__button button button--product button--product--disabled">*/}
            {/*                Out of stock*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="product-card">*/}
            {/*    <Link className="product-card__link" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/zerberry.jpg"*/}
            {/*                    alt="zerberry"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">ZERBERRY</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button*/}
            {/*                onClick={(e) => e.preventDefault()}*/}
            {/*                className="product-card__button button button--product"*/}
            {/*            >*/}
            {/*                Add to cart*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="product-card product-card--discount">*/}
            {/*    <Link className="product-card__link" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/rs-11.jpg"*/}
            {/*                    alt="rs11"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">RS11</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button*/}
            {/*                onClick={(e) => e.preventDefault()}*/}
            {/*                className="product-card__button button button--product"*/}
            {/*            >*/}
            {/*                Add to cart*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="product-card">*/}
            {/*    <Link className="product-card__link" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/pink-cheddar.jpg"*/}
            {/*                    alt="pink cheddar"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">PINK CHEDDAR</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button*/}
            {/*                onClick={(e) => e.preventDefault()}*/}
            {/*                className="product-card__button button button--product"*/}
            {/*            >*/}
            {/*                Add to cart*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="product-card product-card--discount">*/}
            {/*    <Link className="product-card__link" href="/product">*/}
            {/*        <div className="product-card__img-container">*/}
            {/*            <picture>*/}
            {/*                <img*/}
            {/*                    className="product-card__img"*/}
            {/*                    src="/images/seeds/pitaya.jpg"*/}
            {/*                    alt="pitaya"*/}
            {/*                />*/}
            {/*            </picture>*/}
            {/*        </div>*/}
            {/*        <div className="product-card__text-wrapper">*/}
            {/*            <h2 className="product-card__title">PITAYA</h2>*/}
            {/*            <p className="product-card__made">groundedgenetics</p>*/}
            {/*            <p className="product-card__discount">-35%</p>*/}
            {/*            <p className="product-card__full-price">740 €</p>*/}
            {/*            <p className="product-card__deal-price">420 €</p>*/}
            {/*            <button*/}
            {/*                onClick={(e) => e.preventDefault()}*/}
            {/*                className="product-card__button button button--product"*/}
            {/*            >*/}
            {/*                Add to cart*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</li>*/}
        </ul>
    );
};
