import { AttentionIcon, DeliveryIcon, TimeIcon, ShippingIcon, ReturnIcon } from './icons';

export const Shipping = () => {
    return (
        <section className="section shipping">
            <h1 className="visually-hidden">Shipping & Returns</h1>
            <div className="shipping__item shipping__item--cost">
                <DeliveryIcon />
                <h2 className="shipping__title">Shipping cost</h2>
                <p className="shipping__desc">
                    The shipping cost depends on the weight and size of the product, and its price
                    changes accordingly, therefore, it will be calculated at the time of purchase.
                    And for the Canary Islands and other countries before consulting as they may
                    vary depending on the products.
                </p>
            </div>
            <div className="shipping__item shipping__item--shipments">
                <ShippingIcon />
                <h2 className="shipping__title">Shipments</h2>
                <p className="shipping__desc">
                    The purchased products will be delivered to the person and address indicated in
                    the order.
                </p>
                <p className="shipping__desc">
                    By default, the invoices will be sent to the email address indicated by the
                    client at the time of registration in Uptown Supply Co SL
                    (www.groundedgenetics.com).
                </p>
                <p className="shipping__desc">
                    On Saturdays, Sundays, and holidays there will be no departure or delivery of
                    orders.
                </p>
                <p className="shipping__desc">
                    However, its delay will not imply either cancellation of the order or any
                    compensation.
                </p>
                <p className="shipping__desc">
                    Once the order leaves our facilities, the transport company becomes responsible
                    for any incident, be it breakage, incidents with packages, delays, etc.
                </p>
                <p className="shipping__desc">
                    For shipments outside of Spain and Portugal, consult us and for the Balearic
                    Islands, Ceuta, Melilla, and the Canary Islands, also consult us, since the
                    shipping rates are different.
                </p>
                <p className="shipping__desc">
                    We do not know the delivery times of the transport company, nor do we know if
                    they call by phone before making the delivery, each area is different, and each
                    delivery person is different.{' '}
                </p>
                <p className="shipping__desc">
                    We can help you by giving you the telephone number of the transport company’s
                    office and the shipping number of your order, so that you can get in touch with
                    them and agree on the delivery, it is the only thing we can do for your
                    shipment.
                </p>
            </div>
            <div className="shipping__item shipping__item--time">
                <TimeIcon />
                <h2 className="shipping__title">Delivery times</h2>
                <dl className="shipping__option-list">
                    <dt className="shipping__option">We have a 24-hour service:</dt>
                    <dd className="shipping__result">All Spain Peninsula.</dd>
                    <dt className="shipping__option">We have a 48-hour service:</dt>
                    <dd className="shipping__result">Balearic Islands.</dd>
                </dl>
                <p className="shipping__desc">Normally sent 24 hours in 90% of cases.</p>
                <p className="shipping__desc">
                    As in all transport companies sometimes they do not meet the delivery deadline,
                    if you call us, we can give you all the information so that you can get in touch
                    with them. And we will try to help you.
                </p>
                <p className="shipping__desc">Your satisfaction is a priority for us.</p>
            </div>
            <div className="shipping__item shipping__item--return">
                <ReturnIcon />
                <h2 className="shipping__title">Return and cancellation policies</h2>
                <div className="shipping__chapter">
                    <h3 className="shipping__subtitle">Return of merchandise:</h3>
                    <p className="shipping__desc">
                        Our policy, according to current regulations in Spain, is to grant you any
                        right to return any product purchased from Uptown Supply Co SL
                        (www.groundedgenetics.com). You have a period of 14 days from the date of
                        receipt.
                    </p>
                    <p className="shipping__desc">
                        For the return it is essential that the product has its original packaging,
                        that it is intact, just as we sent it to you at the time.
                    </p>
                    <p className="shipping__desc">
                        Once returned, within 3 days of receiving it, we can refund the money, or a
                        discount voucher, as you prefer.{' '}
                    </p>
                    <p className="shipping__desc">
                        When a return is made, we can find these two cases:
                    </p>
                    <ul className="shipping__inner-list">
                        <li className="shipping__inner-item">
                            If you return an item because you ordered it wrong, you don’t want it,
                            or you don’t like it. You should bear the cost of return shipping.
                        </li>
                        <li className="shipping__inner-item">
                            On the other hand, if we have sent you a product that does not
                            correspond or is defective, Uptown Supply Co SL
                            (www.groundedgenetics.com) will bear the shipping costs. And without any
                            hassle for the customer. Giving you all the facilities for your return,
                            such as picking up the package at your home, etc.
                        </li>
                    </ul>
                    <p className="shipping__desc">
                        In cases where you classify a product as “defective”, please check all
                        products before making your return; Returned products that are in good
                        working order will be returned to the customer and a round trip shipping
                        charge will be made to the customer.
                    </p>
                </div>
                <div className="shipping__chapter">
                    <h3 className="shipping__subtitle">Return conditions:</h3>
                    <p className="shipping__desc">
                        We are not responsible for returns that are not properly packaged, for
                        example: If you want to return a product and you send the product without
                        packing it in another box, the transport company will stick a shipping
                        sticker on it and that product will be unusable for subsequent sale. In
                        addition to insufficient packaging, the product will most likely be damaged.
                    </p>
                    <p className="shipping__desc">We cannot accept these types of returns.</p>
                    <p className="shipping__desc">
                        We are not responsible for customs fees or tariffs, etc. Generated by
                        customs.
                    </p>
                    <p className="shipping__desc">
                        All products have to be sent to us with their original packaging.
                    </p>
                    <p className="shipping__desc">
                        All souvenir products are sold for decorative and collectable purposes.
                        Uptown Supply Co SL (www.groundedgenetics.com) is not responsible for the
                        use of these products.
                    </p>
                    <p className="shipping__desc">
                        * Keep in mind that we cannot accept returns of unsealed items that can be
                        reproduced or copied (DVDs, CDs, etc), shipments without an incidence number
                        abroad or without their original packaging.
                    </p>
                </div>
            </div>
            <div className="shipping__notice">
                <AttentionIcon />
                <strong className="shipping__warning">Attention!</strong>
                <p className="shipping__notice-desc">
                    It is not permitted to sell or send
                    <br /> cannabis seeds outside Spain.
                </p>
                <p className="shipping__notice-desc shipping__notice-desc--add">
                    The sale and shipment of cannabis seeds
                    <br className="shipping__br" /> to the United States and Canada
                    <br className="shipping__br shipping__br--temp" /> is not permitted.{' '}
                </p>
            </div>
        </section>
    );
};
