interface TCardItem {
    data: {
        id: number;
        regular_price: string;
        price: string;
        images: { src: string; alt: string }[];
        slug: string;
        name: string;
    };
}
