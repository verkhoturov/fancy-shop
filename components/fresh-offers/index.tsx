import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useScreenSize } from '../../utils/useScreenSize';

export const FreshOffers = () => {
    const { isTablet } = useScreenSize();
    return (
        <section className="section fresh-offers">
            <h2 className="fresh-offers__title">Fresh offers</h2>

            <Swiper spaceBetween={27} slidesPerView={isTablet ? 2 : 4}>
                <SwiperSlide>
                    <div className="product-card product-card--discount">
                        <Link className="product-card__link" href="/product">
                            <div className="product-card__img-container">
                                <picture>
                                    <img
                                        className="product-card__img"
                                        src="/images/seeds/rainbowz.jpg"
                                        alt="rainbowz"
                                    />
                                </picture>
                            </div>
                            <div className="product-card__text-wrapper">
                                <h2 className="product-card__title">RAINBOWZ</h2>
                                <p className="product-card__made">groundedgenetics</p>
                                <p className="product-card__discount">-35%</p>
                                <p className="product-card__full-price">740 €</p>
                                <p className="product-card__deal-price">420 €</p>
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="product-card__button button button--product"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card product-card--soon">
                        <Link className="product-card__link" href="/product">
                            <div className="product-card__img-container">
                                <picture>
                                    <img
                                        className="product-card__img"
                                        src="/images/seeds/guava-jelly.jpg"
                                        alt="guava jelly"
                                    />
                                </picture>
                            </div>
                            <div className="product-card__text-wrapper">
                                <h2 className="product-card__title">GUAVA JELLY</h2>
                                <p className="product-card__made">groundedgenetics</p>
                                <p className="product-card__discount">-35%</p>
                                <p className="product-card__full-price">740 €</p>
                                <p className="product-card__deal-price">420 €</p>
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="product-card__button button button--product"
                                >
                                    Pre-order
                                </button>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card product-card--discount product-card--limited">
                        <Link className="product-card__link" href="/product">
                            <div className="product-card__img-container">
                                <picture>
                                    <img
                                        className="product-card__img"
                                        src="/images/seeds/candy-gas.jpg"
                                        alt="candy gas"
                                    />
                                </picture>
                            </div>
                            <div className="product-card__text-wrapper">
                                <h2 className="product-card__title">CANDY GAS</h2>
                                <p className="product-card__made">groundedgenetics</p>
                                <p className="product-card__discount">-35%</p>
                                <p className="product-card__full-price">740 €</p>
                                <p className="product-card__deal-price">420 €</p>
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="product-card__button button button--product"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card product-card--discount product-card--disabled">
                        <Link
                            className="product-card__link product-card__link--disabled"
                            href="/product"
                        >
                            <div className="product-card__img-container">
                                <picture>
                                    <img
                                        className="product-card__img"
                                        src="/images/seeds/kawazaki.png"
                                        alt="kawazaki"
                                    />
                                </picture>
                            </div>
                            <div className="product-card__text-wrapper">
                                <h2 className="product-card__title">KAWAZAKI</h2>
                                <p className="product-card__made">groundedgenetics</p>
                                <p className="product-card__discount">-35%</p>
                                <p className="product-card__full-price">740 €</p>
                                <p className="product-card__deal-price">420 €</p>
                                <button className="product-card__button button button--product button--product--disabled">
                                    Out of stock
                                </button>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card product-card--discount product-card--limited">
                        <Link className="product-card__link" href="/product">
                            <div className="product-card__img-container">
                                <picture>
                                    <img
                                        className="product-card__img"
                                        src="/images/seeds/candy-gas.jpg"
                                        alt="candy gas"
                                    />
                                </picture>
                            </div>
                            <div className="product-card__text-wrapper">
                                <h2 className="product-card__title">CANDY GAS</h2>
                                <p className="product-card__made">groundedgenetics</p>
                                <p className="product-card__discount">-35%</p>
                                <p className="product-card__full-price">740 €</p>
                                <p className="product-card__deal-price">420 €</p>
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="product-card__button button button--product"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <ul className="products-list products-list--fresh"></ul> */}
        </section>
    );
};
