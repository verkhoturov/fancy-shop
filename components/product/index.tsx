import React, { useState } from 'react';
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import schemeImg from './scheme.png';

import 'swiper/css';
import 'swiper/css/pagination';
import {getPercentage} from '@/utils';

export const Product = ({ product, productAcf }: any) => {
    const [activeTab, setActiveTab] = useState<'desc' | 'rev'>('desc');

	const discount = getPercentage(product.regular_price, product.price)

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
			                {product.images.map((item: any) => (
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
	                <h1 className="features__title">{product.name}</h1>
	                <div className="short-description" dangerouslySetInnerHTML={{__html: product.short_description }} />
                </div>
                <div className="product__buying">
                    <p className="product__price">{product.price} €</p>
                    <button className="product__button button button--buying" type="button">
                        Preorder now
                    </button>
                </div>
            </div>
            <div className="product__detail product-detail">
                <div className="product-detail__button-wrapper">
                    <button
                        onClick={() => setActiveTab('desc')}
                        className={`product-detail__button ${
                            activeTab === 'desc' ? 'product-detail__button--active' : ''
                        }`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('rev')}
                        className={`product-detail__button ${
                            activeTab === 'rev' ? 'product-detail__button--active' : ''
                        }`}
                    >
                        Reviews
                    </button>
                </div>
                {activeTab === 'desc' && (
                    <div className="product-detail__item product-detail__item--desc">
                        <div className="product-detail__desc" dangerouslySetInnerHTML={{ __html: productAcf.content.rendered }}>

                        </div>
                        <div className="product-detail__diagram-wrapper">
                            <picture>
                                <img
                                    className="product-detail__diagram"
                                    src={productAcf.acf.scheme}
                                    alt="#"
                                />
                            </picture>
                        </div>
                    </div>
                )}
                {activeTab === 'rev' && (
                    <div className="product-detail__item product-detail__item--review">
                        <div className="product-detail__reviews">
                            <p className="product-detail__reviews-text">
                                The Blue Jelly [(Blue Sherb x (Gelato 41 x Sherb bx1)] pheno we used
                                as the female in this hybrid was bred and selected in-house from
                                regular seeds. The plant we kept out of 50 was then hit with
                                reversed Z Road pollen to create Blue Fizz. This plant definitely
                                has some special attributes as the offspring she’s produced with the
                                Z Road has also proven to be a favourite from the entire line among
                                our team.
                            </p>
                            <p className="product-detail__reviews-text">
                                Rainbowz has been a game-changer for me. As a longtime cannabis
                                enthusiast, I&apos;ve tried various strains, but Rainbowz has
                                quickly become my favorite. The vibrant colors and unique flavor
                                profile make it a truly enjoyable experience. Not to mention, the
                                effects are incredible. It provides a perfect balance of relaxation
                                and creativity, allowing me to unwind after a long day while still
                                feeling inspired. If you&apos;re looking for a top-notch cannabis
                                strain, I highly recommend giving Rainbowz a try!
                            </p>
                            <cite className="product-detail__reviews-author">
                                Sarah M. from Belgium
                            </cite>
                        </div>
                        <div className="product-detail__rating rating">
                            <p className="rating__title">Rating by users:</p>
                            <span className="rating__number">4.0</span>
                            <div className="rating__stars">
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
