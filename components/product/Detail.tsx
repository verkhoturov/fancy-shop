import React, { useEffect, useState } from 'react';
import { CommentList } from '@/components/product/ComentList';

interface TDetail {
    productAcf: any;
    reviews: any;
}

export const Detail = ({ productAcf, reviews }: TDetail) => {
    const { rendered: description } = productAcf.content;
    const [activeTab, setActiveTab] = useState<'desc' | 'rev'>('desc');
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        let count = 0;
        const sum = reviews
            ?.map((item: any) => item.rating)
            .reduce((sum: number, item: number, index: number) => {
                count += item;
                return sum + item * (index + 1);
            }, 0);
        setAverageRating(Math.ceil(sum / count));
    }, [setAverageRating, reviews]);

    return (
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
                    {!!description ? (
                        <div
                            className="product-detail__desc"
                            dangerouslySetInnerHTML={{ __html: productAcf?.content.rendered }}
                        ></div>
                    ) : (
                        <div className="product-detail__desc">
                            There is no product description here yet
                        </div>
                    )}
                    <div className="product-detail__diagram-wrapper">
                        <picture>
                            <img
                                className="product-detail__diagram"
                                src={productAcf?.acf.scheme}
                                alt="#"
                            />
                        </picture>
                    </div>
                </div>
            )}
            {activeTab === 'rev' && (
                <div className="product-detail__item product-detail__item--review">
                    <CommentList comments={reviews} />
                    <div className="product-detail__rating rating">
                        <p className="rating__title">Rating by users:</p>
                        {!!averageRating && (
                            <span className="rating__number">{averageRating}.0</span>
                        )}
                        <div className="rating__stars">
                            {[1, 2, 3, 4, 5].map((num: number) => (
                                <svg
                                    key={num}
                                    className={`rating__star${
                                        num <= averageRating ? ' rating__star--active' : ''
                                    }`}
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
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
