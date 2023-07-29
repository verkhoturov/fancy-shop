export const initValues = {
	first_name: '',
	last_name: '',
	phone: '',
	email: '',
	street_address: '',
	address_line1: '',
	address_line2: '',
	country: '',
	state: '',
	city: '',
	postcode: '',
}

export const validateForm = (values: typeof initValues) => {
	const newErrors: any = {};
	if (values.first_name === '') {
		newErrors.first_name = 'This field is required'
	}
	if (values.last_name === '') {
		newErrors.last_name = 'This field is required'
	}
	if (values.phone === '') {
		newErrors.phone = 'This field is required'
	}
	if (values.email === '') {
		newErrors.email = 'This field is required'
	}
	if (values.street_address === '') {
		newErrors.street_address = 'This field is required'
	}
	if (values.address_line1 === '') {
		newErrors.address_line1 = 'This field is required'
	}
	// if (values.address_line2 === '') {
	// 	// newErrors.address_line2 = 'This field is required'
	// }
	if (values.country === '') {
		newErrors.country = 'This field is required'
	}
	if (values.state === '') {
		newErrors.state = 'This field is required'
	}
	if (values.city === '') {
		newErrors.city = 'This field is required'
	}
	if (values.postcode === '') {
		newErrors.postcode = 'This field is required'
	}
	return Object.keys(newErrors).length > 0 ? newErrors : null
};
