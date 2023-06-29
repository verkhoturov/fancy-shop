import { Filters } from '../filters';
import { ProductsList } from '../products-list';
import { SearchIcon } from './icons';

export const Catalog = () => {
    return (
        <section className="section catalog">
            <Filters />
            <ProductsList />
            <div className='catalog__matching-text'>
                <SearchIcon />
                <span>Sorry, there is no items<br></br>matching your search request</span>
            </div>
        </section>
    );
};
