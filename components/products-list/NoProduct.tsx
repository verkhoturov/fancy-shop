import { SearchIcon } from '@/components/catalog/icons';

export const NoProduct = () => {
    return (
        <div className="no-product">
            <SearchIcon />
            <div className="no-product__text">
                Sorry, there is no items <br /> matching your search request
            </div>
        </div>
    );
};
