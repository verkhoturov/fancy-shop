import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
	url: process.env.NEXT_API_BACKEND ?? '/',
	consumerKey: process.env.WOOCOMMERCE_KEY ?? '',
	consumerSecret: process.env.WOOCOMMERCE_SECRET ?? '',
	version: "wc/v3",
});

export async function fetchWooCommerceProducts(apiKey: string) {
	try {
		const response = await api.get(apiKey);
		return response;
	} catch (error:any) {
		throw new Error(error);
	}
}

