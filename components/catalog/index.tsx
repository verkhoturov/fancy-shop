import { Filters } from "../filters";
import { Products } from "../products";

export const Catalog = () => {
    return (
        <section className="section catalog">
            <Filters />
            <Products />
        </section>


    );
};