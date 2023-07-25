import React, {useState} from 'react';
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import {getPercentage, useAddProduct} from '@/utils';
import {Detail} from '@/components/product/Detail';

export const Product = ({ reviews, product, productAcf }: any) => {
	const { isAdded, addProduct } = useAddProduct(product.id)
	const discount = getPercentage(product?.regular_price, product?.price)
	const config = {
		modules: [Pagination],
		spaceBetween: 20,
		slidesPerView: 1,
		pagination: { clickable: true },
		onSlideChange: ()=> console.log('Swiper Change'),
	}

    return (
        <section className="section product">
            <div className="product__desc">
                <div className="product__image-wrapper">
	                <div className="product-slider">
		                {!!discount && <span className="product-slider__discount">-{discount}%</span>}
		                <Swiper {...config}>
			                {product?.images.map((item: any) => (
				                <SwiperSlide key={item.id}>
					                <picture>
						                <img
							                className="product-slider__image"
							                src={item.src}
							                alt={item.alt}
						                />
					                </picture>
				                </SwiperSlide>
			                ))}
		                </Swiper>
	                </div>
                </div>
                <div className="product__features features">
	                <h1 className="features__title">{product?.name}</h1>
	                <div className="short-description" dangerouslySetInnerHTML={{__html: product?.short_description }} />
                </div>
                <div className="product__buying">
                    <p className="product__price">{product?.price} €</p>
                    <button className="product__button button button--buying"
                        onClick={addProduct}
                        style={{
							opacity: isAdded ? .3 : 1,
	                        cursor: isAdded ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Preorder now
                    </button>
                </div>
            </div>
            <Detail productAcf={productAcf} reviews={reviews} />
        </section>
    );
};
