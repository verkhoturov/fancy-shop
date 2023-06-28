export const ProductSlider = () => {
    return (
        <div className="product-slider product-slider--discount">
            <span className="product-slider__discount">-35%</span>
            <picture>
                <img className="product-slider__image" src="#" alt="RAINBOWZ" />
            </picture>
            <ol className="product-slider__pagination pagination">
                <li className="pagination__item">
                    <button className="pagination__button" type="button"></button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button pagination__button--active" type="button"></button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button" type="button"></button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button" type="button"></button>
                </li>
            </ol>
            <button className="product-slider__button" type="button"></button>
            <button className="product-slider__button product-slider__button--reverse" type="button"></button>
        </div>
    );
};
