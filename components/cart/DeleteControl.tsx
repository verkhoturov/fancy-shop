import {useProducts} from '@/store';

interface TDeleteControl {
	productId: number
}

export const DeleteControl = ({ productId } : TDeleteControl) => {
	const [basket, addBasket] = useProducts((state: any) => [state.basket, state.addBasket])
	const onDelete =  ()=> {
		addBasket(basket.filter((item: any) => item.id !== productId))
	}

	return (
		<button className="cart__delete-button" type="button" onClick={onDelete}>
			Delete
		</button>
	)
}
