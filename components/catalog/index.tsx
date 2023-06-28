import { Filters } from "../filters";
import { ProductsList } from "../products-list";

export const Catalog = () => {
    return (
        <section className="catalog">
            <Filters />
            <ProductsList />
        </section>


    );
};