import styles from './Ordered.module.scss';
import {useProducts} from '@/store';
import {useEffect, useState} from 'react';
import {Spinner} from '@/components/spinner';

interface TP {
	isLoading: boolean
}

export const OrderTotal = ({ isLoading }: TP) => {
	const [basket, lineItems] = useProducts((state: any) => [state.basket, state.lineItems])
	const [data, setData] = useState({
		items: 0,
		total: 0
	})

	useEffect(()=> {
		const t = basket.reduce((acc: number, cur: any) => {
			const pt =
				Number(cur.price) *
				lineItems.find((item: any) => item.product_id === cur.id).quantity;
			return acc + pt;
		}, 0);
		setData({
			items: lineItems.length,
			total: t
		})
	}, [setData, basket, lineItems])

	return (
		<div className={styles.total}>
			<div className={styles.title}>
				<span>Total</span>

				<span>{data.total} €  </span>
			</div>

			<div className={styles.total_calculation}>
				<div className={styles.total_calcItem}>
					<span>{data.items} items for</span>
					<span>{data.total} €</span>
				</div>

				{/*<div className={styles.total_calcItem}>*/}
				{/*	<span>Shipping cost</span>*/}
				{/*	<span>40.50 €</span>*/}
				{/*</div>*/}
			</div>

			<div className={styles.submit}>
				<button type="submit" className="button" disabled={isLoading} >
					{isLoading && <div className={styles.submit_loader}><Spinner/></div>}
					<span>Confirm order and pay</span>
				</button>
			</div>

			<div className={styles.policy}>
				By clicking the button you agree to <a href="#" target="_blank" rel="noreferrer">Terms & Conditions</a> <br/>
				as well as <a href="#" target="_blank" rel="noreferrer">Privacy Policy</a>
			</div>
		</div>
	)
}
