export const Pagination = () => {
    return (
        <ol className="pagination">
            <li className="pagination__item">
                <button className="pagination__button"></button>
            </li>
            <li className="pagination__item">
                <button className="pagination__button pagination__button--active"></button>
            </li>
            <li className="pagination__item">
                <button className="pagination__button"></button>
            </li>
            <li className="pagination__item">
                <button className="pagination__button"></button>
            </li>
        </ol>
    );
};