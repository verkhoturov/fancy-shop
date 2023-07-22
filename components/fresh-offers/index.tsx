import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useScreenSize, getPercentage } from '@/utils';


export const FreshOffers = ({ freshOffers }: any) => {
    const { isTablet } = useScreenSize();

	return (
        <section className="section fresh-offers">
            <h2 className="fresh-offers__title">Fresh offers</h2>

            <Swiper spaceBetween={27} slidesPerView={isTablet ? 2 : 4}>
	            {freshOffers.slice(0, 4).map((prod: any) => (
		            <SwiperSlide key={prod.id}>
			            <div className="product-card product-card--discount">
				            <Link className="product-card__link" href={`/product/${prod.slug}`}>
					            <div className="product-card__img-container">
						            <picture>
							            <img
								            className="product-card__img"
								            src={prod.images[0].src}
								            alt={prod.images[0].alt}
								            width={250}
								            height={250}
							            />
						            </picture>
					            </div>
					            <div className="product-card__text-wrapper">
						            <h2 className="product-card__title">{prod.name}</h2>
						            <p className="product-card__made">groundedgenetics</p>
						            <p className="product-card__discount">-{getPercentage(prod.regular_price, prod.price)}%</p>
						            <p className="product-card__full-price">{prod.regular_price} €</p>
						            <p className="product-card__deal-price">{prod.price} €</p>
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
	            ))}
            </Swiper>
            {/* <ul className="products-list products-list--fresh"></ul> */}
        </section>
    );
};
