import { ChangeEvent, useEffect, useState } from 'react';
import { FilterBtn } from './FilterBtn';
import { useProducts } from '@/store';

export const Filters = () => {
    const [products, categories, addProducts] = useProducts((state: any) => [
        state.products,
        state.categories,
        state.addProducts,
    ]);
    const [search, setSearch] = useState('');
    const [selectCategory, setSelectCategory] = useState<string[]>([]);
    const [actualData] = useState(products);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setCategory(categories);
    }, [categories, setCategory]);

    useEffect(() => {
        const filtered =
            selectCategory.length > 0
                ? actualData.filter(
                      (data: any) =>
                          data.categories.filter((item: any) => selectCategory.includes(item.slug))
                              .length > 0,
                  )
                : actualData;
        addProducts(filtered);
    }, [selectCategory, addProducts, actualData]);

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        const fl = actualData?.filter((item: any) =>
            item.name.toUpperCase().includes(value.toUpperCase()),
        );
        addProducts(fl);
    };

    const onSelect = (slug: string) => {
        const hasAlready = selectCategory.includes(slug);
        if (hasAlready) return setSelectCategory(selectCategory.filter((s) => s !== slug));
        setSelectCategory([...selectCategory, slug]);
    };

    return (
        <div className="catalog__filters filters">
            <div className="filters__search-form">
                <label className="visually-hidden" htmlFor="search"></label>
                <input
                    className="filters__search-input"
                    id="search"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={onSearch}
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M20.9984 21L16.6484 16.65"
                            stroke="#EAEDBD"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </div>
            <ul className="filters__list">
                {category?.map((item: any) => (
                    <FilterBtn key={item.id} onSelect={onSelect} data={item} />
                ))}
            </ul>
        </div>
    );
};
