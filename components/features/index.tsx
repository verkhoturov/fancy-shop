export const Features = () => {
    return (
        <div className="features">
            <h1 className="features__title">RAINBOWZ</h1>
            <dl className="features__list">
                <div className="features__item features__item--lineage">
                    <dt className="features__subtitle">Lineage:</dt>
                    <dd className="features__desc">Zunami (Zkittlez x Jealousy)</dd>
                    <dd className="features__desc">x RS11 (Sunset Sherb x Pink Guava)</dd>
                </div>
                <div className="features__item">
                    <dt className="features__subtitle">Pack size:</dt>
                    <dd className="features__desc">7 per pack. Plus 3 freebies.</dd>
                </div>
                <div className="features__item">
                    <dt className="features__subtitle">Type:</dt>
                    <dd className="features__desc">Feminised</dd>
                </div>
                <div className="features__item">
                    <dt className="features__subtitle">Yield:</dt>
                    <dd className="features__desc">Medium to high</dd>
                </div>
                <div className="features__item">
                    <dt className="features__subtitle">Flowering time:</dt>
                    <dd className="features__desc">8-9 weeks</dd>
                </div>
            </dl>
        </div>
    );
};