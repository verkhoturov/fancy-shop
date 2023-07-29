import { useEffect } from 'react';
import { Page } from '@/components/page';
import { Product } from '@/components/product';
import { FreshOffers } from '@/components/fresh-offers';
import { fetchWooCommerceProducts } from '@/libs';
import { useProducts } from '@/store';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export default function ProductPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const [addProducts] = useProducts((state: any) => [state.addProducts]);
    useEffect(() => {
        addProducts(props?.products);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    return (
        <Page>
            <Product {...props} />
            <FreshOffers freshOffers={props?.freshOffers} />
        </Page>
    );
}

export const getStaticPaths = async () => {
    const wooCommerceProducts = await fetchWooCommerceProducts('products?per_page=100').catch(
        (error) => console.log(error),
    );
    const paths = wooCommerceProducts.data.map(({ slug }: any) => ({
        params: { slug },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    const slug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug;
    const products = slug
        ? await fetchWooCommerceProducts('products?per_page=100').catch((error) =>
              console.log(error),
          )
        : [];

    const product = products.data.find((item: any) => item.slug === slug);
    const freshOffers = products?.data.filter((item: any) => item.slug !== slug);
    const reviews = slug
        ? await fetchWooCommerceProducts(`products/reviews?product=${product.id}`).catch((error) =>
              console.log(error),
          )
        : [];
    const productAcf = await fetch(
        `${process.env.NEXT_API_BACKEND_AFC}product/${product.id}?acf_format=standard`,
    ).then((res) => res.json());

    return {
        props: {
            product,
            products: products.data,
            freshOffers: freshOffers,
            productAcf,
            reviews: reviews?.data,
        },
        revalidate: 60,
    };
};
