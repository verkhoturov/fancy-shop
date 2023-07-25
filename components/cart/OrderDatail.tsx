import {useProducts} from '@/store';
import {useEffect, useState} from 'react';
import {fetchWooCommerceProductsPost} from '@/libs';
import {Spinner} from '@/components/spinner';

interface TOrderDatail {
	closeOrder: ()=> void
}
const postData = {
	payment_method: "paypal test",
	payment_method_title: "PayPal Test",
	set_paid: true,
	billing: {
		first_name: "John",
		last_name: "Doe",
		address_1: "969 Market",
		address_2: "",
		city: "San Francisco",
		state: "CA",
		postcode: "94103",
		country: "US",
		email: "john.doe@example.com",
		phone: "(555) 555-5555"
	},
	shipping: {
		first_name: "John",
		last_name: "Doe",
		address_1: "969 Market",
		address_2: "",
		city: "San Francisco",
		state: "CA",
		postcode: "94103",
		country: "US",
		email: "john.doe@example.com",
		phone: "(555) 555-5555"
	},
	shipping_lines: [
		{
			method_id: "local_delivery",
			method_title: "Local delivery",
			total: "0"
		}
	]
}

export const OrderDetail = ({ closeOrder }: TOrderDatail) => {
	const [isLoading, setIsLoading] = useState(false)
	const [basket, lineItems, addBasket, addLineItems] = useProducts((state: any) => [
		state.basket,
		state.lineItems,
		state.addBasket,
		state.addLineItems
	])
	const [total, setTotal] = useState(0)

	useEffect(()=> {
		const t = basket.reduce((acc:number, cur: any) => {
			const pt = Number(cur.price) * lineItems.find((item: any) => item.product_id === cur.id).quantity
			return acc + pt
		}, 0)
		setTotal(t)
	}, [lineItems, basket, setTotal])

	const sendOrder = async ()=> {
		if (isLoading) return
		setIsLoading(true)
		await fetchWooCommerceProductsPost('orders', {
			...postData,
			lineItems
		}).then(()=> {
			addLineItems([])
			addBasket([])
			closeOrder()
		}).finally(()=> {
			setIsLoading(false)
		})
	}

	const { shipping } = postData

	return (
		<div className={`order-detail${isLoading ? ' is-loading' : ''}`}>
			{isLoading &&
                <div className="order-detail__loader">
                    <Spinner />
                </div>
			}
			<div className="order-detail__contact">
				<div className="order-detail__contact-item">
					Recipient: <strong>{shipping.first_name} {shipping.last_name}</strong>
				</div>
				<div className="order-detail__contact-item">
					Address: <strong>{shipping.address_1}, {shipping.city}, {shipping.country}</strong>
				</div>
				<div className="order-detail__contact-item">
					Email: <strong>{shipping.email}</strong>
				</div>
				<div className="order-detail__contact-item">
					Phone: <strong>{shipping.phone}</strong>
				</div>
			</div>
			<div className="order-detail__sum">
				<div className="order-detail__sum-item">
					Quantity: <strong>{basket.length}</strong>
				</div>
				<div className="order-detail__sum-item">
					Total: <strong>{total} €</strong>
				</div>
			</div>
			<div className="order-detail__button">
				<button className="button" onClick={sendOrder}>Send</button>
				<button className="button" onClick={()=> !isLoading && closeOrder()}>Back</button>
			</div>
		</div>
	)
}
