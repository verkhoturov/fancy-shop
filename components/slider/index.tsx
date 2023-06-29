import Image from 'next/image';
import zerberryImg from './img/zerberry.png';
import pitayaImg from './img/pitaya.png';

export const Slider = () => {
    return (
        <section className="section slider">
            <div className="slider__wrapper">
                <div className="slider__item">
                    <div className="slider__content-wrapper">
                        <span className="slider__product-status">drop soon</span>
                        <h2 className="slider__title">
                            zerberry <span className="slider__title-push">& pitaya</span>
                        </h2>
                        <p className="slider__desc">
                            we used as the female in this hybrid was bred and selected in-house from
                            regular seeds.
                        </p>
                        <button className="button button--slider slider__button">
                            Preorder now
                        </button>
                    </div>
                    <div className="slider__image-wrapper">
                        <div className="slider__picture-wrapper">
                            <picture>
                                <Image
                                    className="slider__picture"
                                    src={zerberryImg.src}
                                    width={zerberryImg.width}
                                    height={zerberryImg.height}
                                    alt="zerberry seeds"
                                />
                            </picture>
                        </div>
                        <div className="slider__picture-wrapper slider__picture-wrapper--top">
                            <picture>
                                <Image
                                    className="slider__picture slider__picture--top"
                                    src={pitayaImg.src}
                                    width={pitayaImg.width}
                                    height={pitayaImg.height}
                                    alt="pitaya seeds"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
