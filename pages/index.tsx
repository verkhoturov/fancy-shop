import {useEffect} from 'react';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import { Page } from '../components/page';
import { Slider } from '../components/slider';
import { Services } from '../components/services';
import { Catalog } from '../components/catalog';
import {fetchWooCommerceProducts} from '@/libs';
import {useProducts} from '@/store';

export default function Home(props: InferGetStaticPropsType<typeof  getStaticProps>) {
	const [addProducts, addCategories] = useProducts((state: any) => [state.addProducts, state.addCategories])
	useEffect(()=> {
		addProducts(props.products)
		addCategories(props.categories)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props])

    return (
        <Page>
            <Slider />
            <Services />
            <Catalog />
        </Page>
    );
}

export const getStaticProps: GetStaticProps = async () => {
	const wooCommerceProducts = await fetchWooCommerceProducts('products?per_page=100').catch((error) =>
		console.log(error)
	);
	const wooCommerceCategories = await fetchWooCommerceProducts('products/categories').catch((error) =>
		console.log(error)
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
		revalidate: 60 // regenerate page with new data fetch after 60 seconds
	};
};
