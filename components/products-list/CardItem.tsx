import Link from 'next/link';
import { getPercentage, useAddProduct } from '@/utils';
import Image from 'next/image';
import { EmptyImg } from './icon';

export const CardItem = ({ data }: TCardItem) => {
    const { isAdded, addProduct } = useAddProduct(data.id);
    const minusPercentage = getPercentage(+data.regular_price, +data.price);

    const imgSrc = data.images[0]?.src;

    return (
        <li className="product-card product-card--discount">
            <Link className="product-card__link" href={`/product/${data.slug}`}>
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
                    <h2 className="product-card__title">{data.name}</h2>
                    <p className="product-card__made">groundedgenetics</p>
                    {minusPercentage > 0 && (
                        <p className="product-card__discount">-{minusPercentage}%</p>
                    )}
                    {data.regular_price !== data.price && (
                        <p className="product-card__full-price">{data.regular_price} €</p>
                    )}
                    <p
                        className={`product-card__deal-price ${
                            data.regular_price === data.price
                                ? 'product-card__deal-price--no-sale'
                                : ''
                        }`}
                    >
                        {data.price} €
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
        </li>
    );
};
