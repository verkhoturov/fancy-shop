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

                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Search icon">
                        <path
                            id="Vector"
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="#EAEDBD"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M20.9984 21L16.6484 16.65"
                            stroke="#EAEDBD"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </svg>
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
