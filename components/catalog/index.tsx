import { Filters } from "../filters";
import { Products } from "../products";

export const Catalog = () => {
    return (
        <section className="catalog">
            <Filters />
            <Products />
        </section>


    );
};