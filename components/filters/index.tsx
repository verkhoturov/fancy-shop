export const Filters = () => {
    return (
        <div className="catalog__filters filters">
            <form className="filters__search-form">
                <label className="visually-hidden" htmlFor="search"></label>
                <input
                    className="filters__search-input"
                    id="search"
                    type="text"
                    placeholder="Search"
                ></input>
            </form>
            <ul className="filters__list">
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="all"></input>
                    <label className="filters__control" htmlFor="all">
                        <span className="filters__label">
                            All Seeds&nbsp;
                            <span className="filters__count">145</span>
                        </span>
                    </label>
                </li>
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="rs11"></input>
                    <label className="filters__control" htmlFor="rs11">
                        <span className="filters__label">
                            RS-11 Line&nbsp;
                            <span className="filters__count">2</span>
                        </span>
                    </label>
                </li>
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="zroad"></input>
                    <label className="filters__control" htmlFor="zroad">
                        <span className="filters__label">
                            Z Road line&nbsp;
                            <span className="filters__count">6</span>
                        </span>
                    </label>
                </li>
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="runtz"></input>
                    <label className="filters__control" htmlFor="runtz">
                        <span className="filters__label">
                            Runtz line&nbsp;
                            <span className="filters__count">2</span>
                        </span>
                    </label>
                </li>
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="jealousy"></input>
                    <label className="filters__control" htmlFor="jealousy">
                        <span className="filters__label">
                            Jealousy line&nbsp;
                            <span className="filters__count">1</span>
                        </span>
                    </label>
                </li>
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="fem"></input>
                    <label className="filters__control" htmlFor="fem">
                        <span className="filters__label">
                            Feminized&nbsp;
                            <span className="filters__count">62</span>
                        </span>
                    </label>
                </li>
                <li className="filters__item">
                    <input className="filters__option" type="checkbox" id="regular"></input>
                    <label className="filters__control" htmlFor="regular">
                        <span className="filters__label">
                            Regular&nbsp;
                            <span className="filters__count">81</span>
                        </span>
                    </label>
                </li>
            </ul>
        </div>
    );
};
