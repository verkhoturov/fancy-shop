import {useEffect} from 'react';
import { Page } from '../components/page';
import { Slider } from '../components/slider';
import { Services } from '../components/services';
import { Catalog } from '../components/catalog';
import {GetStaticProps} from 'next';
import {fetchWooCommerceProducts} from '@/libs';
import {useProducts} from '@/store';

export default function Home(props: any) {
	const [addProducts] = useProducts((state: any) => [state.addProducts])
	useEffect(()=> {
		addProducts(props.products)
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
	const wooCommerceProducts = await fetchWooCommerceProducts('products').catch((error) =>
		console.log(error)
	);
	if (!wooCommerceProducts) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			products: wooCommerceProducts?.data,
		},
		revalidate: 60 // regenerate page with new data fetch after 60 seconds
	};
};
