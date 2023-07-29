import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Page } from '../components/page';
import { Slider } from '../components/slider';
import { Services } from '../components/services';
import { Catalog } from '../components/catalog';
import { fetchWooCommerceProducts } from '@/libs';
import { useProducts } from '@/store';
import { checkBasicAuth } from '../libs/basicAuth';

interface HomeProps {
    categories: any[];
    products: any[];
}

export default function Home(props: HomeProps) {
    const [addProducts, addCategories] = useProducts((state: any) => [
        state.addProducts,
        state.addCategories,
    ]);
    useEffect(() => {
        addProducts(props.products);
        addCategories(props.categories);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    return (
        <Page>
            <Slider />
            <Services />
            <Catalog />
        </Page>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!checkBasicAuth(context.req)) {
        context.res.setHeader('WWW-Authenticate', 'Basic realm="Access to site", charset="UTF-8"');
        context.res.statusCode = 401;
        context.res.end('Authentication required.');
        return { props: {} };
    }

    const wooCommerceProducts = await fetchWooCommerceProducts('products?per_page=100').catch(
        (error) => console.log(error),
    );
    const wooCommerceCategories = await fetchWooCommerceProducts('products/categories').catch(
        (error) => console.log(error),
    );

    if (!wooCommerceProducts || !wooCommerceCategories) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            categories: wooCommerceCategories?.data,
            products: wooCommerceProducts?.data,
        },
    };
};
