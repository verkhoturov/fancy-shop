import styles from './Ordered.module.scss';
import {Input} from './Input';
import {ProductListOrder} from '@/components/cart/ProductListOrder';
import {ChangeEvent} from 'react';

interface TP {
	values: any,
	onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void,
	errors: any,
	isLoading: boolean,
}

export const OrderFrom = ({ values, errors, onChangeInput, isLoading }: TP) => {

	return (
		<div className={styles.form}>
			<div className={styles.title +' ' + styles.mb32}>Checkout</div>

			<div className={styles.form_block}>
				<div className={styles.form_title}>
					Personal info
				</div>
				<div className={styles.form_wrap}>
					<div className={styles.form_input}>
						<Input
							name="first_name"
							label="First name"
							placeholder="First name"
							value={values.first_name}
							onChangeInput={onChangeInput}
							error={errors?.first_name}
							disabled={isLoading}
						/>
					</div>

					<div className={styles.form_input}>
						<Input
							name="last_name"
							label="Last name"
							placeholder="Last name"
							value={values.last_name}
							onChangeInput={onChangeInput}
							error={errors?.last_name}
							disabled={isLoading}
						/>
					</div>

					<div className={styles.form_input}>
						<Input
							name="phone"
							label="Phone number"
							placeholder="Phone number"
							value={values.phone}
							onChangeInput={onChangeInput}
							error={errors?.phone}
							disabled={isLoading}
						/>
					</div>

					<div className={styles.form_input}>
						<Input
							name="email"
							label="E-mail"
							placeholder="E-mail"
							value={values.email}
							onChangeInput={onChangeInput}
							error={errors?.email}
							disabled={isLoading}
						/>
					</div>
				</div>
			</div>

			<div className={styles.form_block} style={{ pointerEvents: isLoading ? 'none' : 'initial' }}>
				<div className={styles.form_title}>
					Order items
				</div>
				<ProductListOrder />
			</div>

			<div className={styles.form_block}>
				<div className={styles.form_title}>
					Shipping
				</div>

				<div className={styles.form_input}>
					<Input
						name="street_address"
						label="Street address"
						placeholder="Enter your address here"
						value={values.street_address}
						onChangeInput={onChangeInput}
						error={errors?.street_address}
						disabled={isLoading}
					/>
				</div>
				<div className={styles.form_input}>
					<Input
						name="address_line1"
						label="Address line 1"
						placeholder="If necessary"
						value={values.address_line1}
						onChangeInput={onChangeInput}
						error={errors?.address_line1}
						disabled={isLoading}
					/>
				</div>
				<div className={styles.form_input}>
					<Input
						name="address_line2"
						label="Address line 2"
						placeholder="If necessary"
						value={values.address_line2}
						onChangeInput={onChangeInput}
						error={errors?.address_line2}
						disabled={isLoading}
					/>
				</div>

				<div className={styles.form_input}>
					<Input
						name="country"
						label="Country and state"
						placeholder="Country"
						value={values.country}
						onChangeInput={onChangeInput}
						error={errors?.country}
						disabled={isLoading}
					/>
					<Input
						name="state"
						placeholder="State"
						value={values.state}
						onChangeInput={onChangeInput}
						error={errors?.state}
						disabled={isLoading}
					/>
				</div>

				<div className={styles.form_input}>
					<Input
						name="city"
						label="Town/City"
						placeholder="Enter your town/city here"
						value={values.city}
						onChangeInput={onChangeInput}
						error={errors?.city}
						disabled={isLoading}
					/>
				</div>
				<div className={styles.form_input}>
					<Input
						name="postcode"
						label="Postcode/ZIP"
						placeholder="Enter your ZIP here"
						value={values.postcode}
						onChangeInput={onChangeInput}
						error={errors?.postcode}
						disabled={isLoading}
					/>
				</div>

			</div>
		</div>
	)
}
