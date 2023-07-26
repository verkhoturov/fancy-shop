import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useScreenSize, getPercentage, useAddProduct } from '@/utils';
import Image from 'next/image';
import { EmptyImg } from '../products-list/icon';

const SlideCard = ({ prod }: any) => {
    const { isAdded, addProduct } = useAddProduct(prod.id);
    const minusPercentage = getPercentage(+prod.regular_price, +prod.price);

    const imgSrc = prod.images[0]?.src;
    return (
        <div className="product-card product-card--discount">
            <Link className="product-card__link" href={`/product/${prod.slug}`}>
                <div className="product-card__img-container">
                    {imgSrc ? (
                        <Image
                            className="product-card__img"
                            src={imgSrc}
                            alt={''}
                            width={250}
                            height={250}
                        />
                    ) : (
                        <EmptyImg />
                    )}
                </div>
                <div className="product-card__text-wrapper">
                    <h2 className="product-card__title">{prod.name}</h2>
                    <p className="product-card__made">groundedgenetics</p>
                    {minusPercentage > 0 && (
                        <p className="product-card__discount">-{minusPercentage}%</p>
                    )}
                    {prod.regular_price !== prod.price && (
                        <p className="product-card__full-price">{prod.regular_price} €</p>
                    )}
                    <p
                        className={`product-card__deal-price ${
                            prod.regular_price === prod.price
                                ? 'product-card__deal-price--no-sale'
                                : ''
                        }`}
                    >
                        {prod.price} €
                    </p>
                    <button
                        onClick={addProduct}
                        className="product-card__button button button--product"
                        style={{
                            opacity: isAdded ? 0.5 : 1,
                            cursor: isAdded ? 'not-allowed' : 'pointer',
                        }}
                    >
                        Add to cart
                    </button>
                </div>
            </Link>
        </div>
    );
};

export const FreshOffers = ({ freshOffers }: { freshOffers: any }) => {
    const { isTablet } = useScreenSize();

    return (
        <section className="section fresh-offers">
            <h2 className="fresh-offers__title">Fresh offers</h2>

            <Swiper spaceBetween={27} slidesPerView={isTablet ? 2 : 4}>
                {freshOffers?.slice(0, 4).map((prod: any) => (
                    <SwiperSlide key={prod.id}>
                        <SlideCard prod={prod} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <ul className="products-list products-list--fresh"></ul> */}
        </section>
    );
};
