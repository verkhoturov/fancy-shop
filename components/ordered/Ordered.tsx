import {ChangeEvent, FormEvent, useState} from 'react';
import styles from './Ordered.module.scss';
import {OrderFrom} from '@/components/ordered/OrderFrom';
import {OrderTotal} from '@/components/ordered/OrderTotal';
import {initValues, validateForm} from './validateForm';
import {SuccessModal} from './SuccessModal';
import {useProducts} from '@/store';
import {fetchWooCommerceProductsPost} from '@/libs';

const postData = {
	payment_method: 'paypal test',
	payment_method_title: 'PayPal Test',
	set_paid: true,
	shipping_lines: [
		{
			method_id: 'local_delivery',
			method_title: 'Local delivery',
			total: '0',
		},
	],
};

export const Ordered = () => {
	const [lineItems, addBasket, addLineItems] = useProducts((state: any) => [state.lineItems, state.addBasket, state.addLineItems])
	const [values, setValues] = useState(initValues)
	const [errors, setErrors] = useState<any>({})
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=> {
		const target = e.target
		setValues(state => ({
			...state,
			[target.name] : target.value
		}))
		if (errors[target.name]) {
			const clone = {...errors}
			delete clone[target.name]
			setErrors(clone)
		}
	}
	const onSubmit = async (e: FormEvent)=> {
		e.preventDefault()
		const validate = validateForm(values)
		if (!!validate) {
			return setErrors(validate)
		}

		setIsLoading(true)

		await fetchWooCommerceProductsPost('orders', {
			...postData,
			lineItems,
		})
			.then(() => {
				setIsLoading(false)
				setIsSuccess(true)
				addLineItems([])
				addBasket([])
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	return (
		<div className="section">
			{isSuccess ? <SuccessModal /> :
				<form className={styles.wrap} onSubmit={onSubmit}>
					<OrderFrom
						onChangeInput={onChangeInput}
						values={values}
						errors={errors}
						isLoading={isLoading}
					/>
					<OrderTotal
						isLoading={isLoading}
					/>
				</form>
			}
		</div>
	)
}
