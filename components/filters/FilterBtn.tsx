import {useState} from 'react';

interface TFilterBtn {
	onSelect: (slug: string)=> void,
	data: {
		name: string,
		count: number | string,
		slug: string,
	},
}

const styles = {
	fontWeight: 800,
	color: '#6b5a25',
	backgroundColor: '#fbffca'
}

export const FilterBtn = ({ data, onSelect } : TFilterBtn) => {
	const [toggle, setToggle] = useState(false)
	const onClick = ()=> ()=> {
		if (data.count === 0) return
		setToggle(!toggle)
		onSelect(data.slug)
	}

	return (
		<li className="filters__item">
			<button
				disabled={data.count === 0}
				className="filters__control"
				onClick={onClick()} style={ toggle ? styles : {} }
			>
				<span className="filters__label">
					{data.name}{' '}
					<span className="filters__count">
							{data.count}
						</span>
				</span>
			</button>
		</li>
	)
}
