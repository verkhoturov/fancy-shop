import {useState} from 'react';

interface TFilterBtn {
	data: {
		title: string,
		count: number | string,
	}
}

const styles = {
	fontWeight: 800,
	color: '#6b5a25',
	backgroundColor: '#fbffca'
}

export const FilterBtn = ({ data } : TFilterBtn) => {
	const [toggle, setToggle] = useState(false)
	const onClick = ()=> ()=> {
		setToggle(!toggle)
	}

	return (
		<li className="filters__item">
			<button className="filters__control" onClick={onClick()} style={ toggle ? styles : {} }>
				<span className="filters__label">
					{data.title}{' '}
					<span className="filters__count">
						{data.count}
					</span>
				</span>
			</button>
		</li>
	)
}
