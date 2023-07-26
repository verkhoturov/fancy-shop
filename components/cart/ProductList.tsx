import { CounterControl } from '@/components/cart/CounterControl';
import { DeleteControl } from '@/components/cart/DeleteControl';

interface TProductList {
    basket: any;
}
const Item = ({ data }: any) => {
    return (
        <li className="cart__item">
            <a className="cart__img-link" href="#">
                <picture>
                    <img
                        className="cart__img"
                        src={data.images[0]?.src}
                        alt={data.images[0]?.alt}
                    />
                </picture>
            </a>
            <div className="cart__wrapper">
                <div className="cart__content-wrapper">
                    <a href="#" className="cart__product-link">
                        <h2 className="cart__product-name">{data.name}</h2>
                    </a>
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

export const ProductList = ({ basket }: TProductList) => {
    return (
        <ul className="cart__list">
            {basket.map((item: any) => (
                <Item key={item.id} data={item} />
            ))}
        </ul>
    );
};
