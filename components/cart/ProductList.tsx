import { CounterControl } from '@/components/cart/CounterControl';
import { DeleteControl } from '@/components/cart/DeleteControl';
import EmptyImg from '@/public/empty-img-sm.svg';
import {useProducts} from '@/store';
import Link from 'next/link';
import Image from 'next/image';

const Item = ({ data }: any) => {
	const imgSrc = data.images[0]?.src;
    return (
        <li className="cart__item">
            <Link href={`/product/${data.slug}`} legacyBehavior>
	            <a className="cart__img-link" >
		            {imgSrc ?
						<Image src={imgSrc} alt="" width={100} height={100} /> :
			            <Image src={EmptyImg} alt="" width={100} height={100} />
					}
	            </a>
            </Link>
            <div className="cart__wrapper">
                <div className="cart__content-wrapper">
	                <Link href={`/product/${data.slug}`} legacyBehavior>
		                <a className="cart__product-link">
			                <h2 className="cart__product-name">{data.name}</h2>
		                </a>
	                </Link>
                    <p className="cart__price">{data.price} €</p>
                </div>
                <div className="cart__button-wrapper">
                    <CounterControl productId={data.id} />
                    <DeleteControl productId={data.id} />
                </div>
            </div>
        </li>
    );
};

export const ProductList = () => {
	const [basket] = useProducts((state: any) => [state.basket]);

	return (
        <ul className="cart__list">
            {basket.map((item: any) => (
                <Item key={item.id} data={item} />
            ))}
        </ul>
    );
};
