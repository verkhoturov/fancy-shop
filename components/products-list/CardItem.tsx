import Link from 'next/link';
import {getPercentage} from '@/utils';

interface TCardItem {
	data: any
}


export const CardItem = ({ data } : TCardItem) => {
	const minusPercentage = getPercentage(+data.regular_price, +data.price)
	return (
		<li className="product-card product-card--discount">
			<Link className="product-card__link" href={`/product/${data.slug}`}>
				<div className="product-card__img-container">
					<picture>
						<img
							className="product-card__img"
							src={data.images[0].src}
							alt={data.images[0].alt}
							width={250}
							height={250}
						/>
					</picture>
				</div>
				<div className="product-card__text-wrapper">
					<h2 className="product-card__title">{data.name}</h2>
					<p className="product-card__made">groundedgenetics</p>
					<p className="product-card__discount">-{minusPercentage}%</p>
					<p className="product-card__full-price">{data.regular_price} €</p>
					<p className="product-card__deal-price">{data.price} €</p>
					<button
						onClick={(e) => e.preventDefault()}
						className="product-card__button button button--product"
					>
						Add to cart
					</button>
				</div>
			</Link>
		</li>
	)
}
