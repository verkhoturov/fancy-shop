import { CounterControl } from '@/components/cart/CounterControl';
import {useProducts} from '@/store';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useScreenSize} from '@/utils';

const Item = ({ data, totalItems }: any) => {
	const imgSrc = data.images[0]?.src;
	const { isTablet } = useScreenSize()
	return (
        <li className="cart__item cart__item_second">
            <Link href={`/product/${data.slug}`} legacyBehavior>
	            <a className="cart__img-link" >
		            <span className="cart__img-wrap">
			            {imgSrc ?
				            <Image src={imgSrc} alt="" width={100} height={100} /> :
							<Image src="/empty-img-sm.svg" alt="" width={100} height={100} />
						}
		            </span>
		            {!isTablet && <span className="cart__product-name">{data.name}</span>}
	            </a>
            </Link>
	        {!isTablet ?
		        <div className="cart__wrapper">
			        <p className="cart__price">
			            <span className="cart__price-data">
				            <strong>Price</strong>
			                <span>{data.price}€</span>
			            </span>
			        </p>
			        <div className="card__count">
				        <strong>Count</strong>
				        <CounterControl productId={data.id} />
			        </div>
			        <p className="cart__price">
		            <span className="cart__price-data">
			             <strong>Total</strong>
		                <span>{data.price * totalItems?.quantity}€</span>
		            </span>
			        </p>
		        </div> :
		        <div className="cart__wrapper">
			        <span className="cart__product-name">{data.name}</span>
			        <div className="cart__wrapper-bottom">
				        <div className="card__count">
					        <CounterControl productId={data.id} />
				        </div>
				        <p className="cart__price">
		                <span className="cart__price-data">
		                    <span>{data.price * totalItems?.quantity}€</span>
		                </span>
				        </p>
			        </div>
		        </div>
			}
        </li>
    );
};

export const ProductListOrder = () => {
	const [basket, lineItems] = useProducts((state: any) => [state.basket, state.lineItems]);
	const [data, setData] = useState<any>(null)
	useEffect(()=> {
		setData(basket)
	}, [basket, setData])
	const totalItems = (id: number) => lineItems?.find((item: any)=> item.product_id == id)

	return (
        <ul className="cart__list">
            {data && data.map((item: any) => (
                <Item key={item.id} data={item} totalItems={totalItems(item.id)} />
            ))}
        </ul>
    );
};
