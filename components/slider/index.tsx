export const Slider = () => {
    return (
        <section className="slider">
            <div className="slider__wrapper">
                <div className="slider__item">
                    <div className="slider__content-wrapper">
                        <span className="slider__product-status">drop soon</span>
                        <h2 className="slider__title">zerberry <span className="slider__title-push">& pitaya</span></h2>
                        <p className="slider__desc">we used as the female in this hybrid was bred and selected in-house from regular seeds.</p>
                        <button className="button button--slider slider__button">Preorder now</button>
                    </div>
                    <div className="slider__image-wrapper">
                        <div className="slider__picture-wrapper">
                            <picture>
                                <img className="slider__picture" src="#" alt="zerberry seeds" />
                            </picture>
                        </div>
                        <div className="slider__picture-wrapper slider__picture-wrapper--top">
                            <picture>
                                <img className="slider__picture slider__picture--top" src="#" alt="pitaya seeds" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};