import { PaymentIcon, ShippingIcon, InternationalIcon } from './icons';

export const Services = () => {
    return (
        <section className="section services">
            <ul className="services__list">
                <li className="services__item services__item--shipping">
                    <ShippingIcon />
                    <h2 className="services__title">Free Shipping</h2>
                    <p className="services__desc">Spain</p>
                    <p className="services__desc">Selected EU Countries</p>
                    <p className="services__desc">(Orders over 350€)</p>
                </li>
                <li className="services__item services__item--payment">
                    <PaymentIcon />
                    <h2 className="services__title">Secure Payment</h2>
                    <p className="services__desc">
                        We only use trusted payment methods to keep our customers banking
                        information secure
                    </p>
                </li>
                <li className="services__item services__item--international">
                    <InternationalIcon />
                    <h2 className="services__title">International Delivery</h2>
                    <p className="services__desc">
                        Receive the products on your doorstep<br></br>(Inside & outside EU)
                    </p>
                </li>
            </ul>
        </section>
    );
};
