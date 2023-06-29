export const Pagination = () => {
    return (
        <ol className="pagination">
            <li className="pagination__item">
                <button className="pagination__button" type="button"></button>
            </li>
            <li className="pagination__item">
                <button
                    className="pagination__button pagination__button--active"
                    type="button"
                ></button>
            </li>
            <li className="pagination__item">
                <button className="pagination__button" type="button"></button>
            </li>
            <li className="pagination__item">
                <button className="pagination__button" type="button"></button>
            </li>
        </ol>
    );
};
