export const RegisterExtend = () => {
    return (
        <div className="register-extend login-form">
            <div className="register-extend__toggle login-form__toggle toggle">
                <button type="button" className="toggle__button">
                    Log in
                </button>
                <button type="button" className="toggle__button toggle__button--active">
                    Register
                </button>
            </div>
            <div className="register-extend__wrapper login-form__wrapper">
                <h1 className="visually-hidden">Register</h1>
                <form className="register-extend__form login-form__form" action="#" method="post">
                    <fieldset className="register-extend__account-part form">
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                className="form-item__input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="wannabegrower@gmail.com"
                                required
                            />
                            <span className="form-item__notice form-item__notice--extend">
                                Link to set up a password for your account will be sent to provided
                                e-mail
                            </span>
                        </div>
                        <div className="register-extend__item form-item">
                            {/* <label className="form-item__label" htmlFor="UserType">User type</label>
                            <select 
                            className="form-item__select" 
                            id="UserType" 
                            name="UserType"
                            required>
                                <option className="form-item__select-option" value="b2b" selected>B2B (requires approval)</option>
                                <option className="form-item__select-option" value="retail">Retail client</option>
                            </select> */}
                            <span className="form-item__label">User type</span>
                            <div className="form-item__select" data-state="">
                                <div className="form-item__select-title" data-default="b2b">
                                    B2B (requires approval)
                                </div>
                                <div className="form-item__select-content">
                                    <input
                                        className="form-item__select-input"
                                        id="b2b"
                                        type="radio"
                                        name="singleSelect"
                                        checked
                                    />
                                    <label className="form-item__select-label" htmlFor="b2b">
                                        B2B (requires approval)
                                    </label>
                                    <input
                                        className="form-item__select-input"
                                        id="retail"
                                        type="radio"
                                        name="singleSelect"
                                    />
                                    <label className="form-item__select-label" htmlFor="retail">
                                        Retail client
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="register-extend__item register-extend__item--upload form-item">
                            <span className="form-item__label">Please upload your business ID</span>
                            <input
                                className="form-item__input visually-hidden"
                                type="file"
                                accept=".jpg, .jpeg, .png, .pdf, .txt, .doc, .docx"
                                id="upload"
                                name="upload"
                                required
                            />
                            <label className="form-item__label-upload" htmlFor="upload">
                                Choose file
                                <span className="form-item__desk-upload">or drag it here</span>
                            </label>
                            <span className="form-item__upload-warning">No file chosen</span>
                            <span className="form-item__notice form-item__notice--extend">
                                Supported file types: jpg, jpeg, png, pdf, txt, doc, docx
                            </span>
                        </div>
                    </fieldset>
                    <fieldset className="register-extend__main-part form">
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="FirstName">
                                First name
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="FirstName"
                                name="FirstName"
                                placeholder="Enter your first name here"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="LastName">
                                Last name
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="LastName"
                                name="LastName"
                                placeholder="Enter your last name here"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="CompanyName">
                                Company name
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="CompanyName"
                                name="CompanyName"
                                placeholder="Enter your company name here"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="address">
                                Street address
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your address here"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="AddressReserve">
                                Address line 2
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="AddressReserve"
                                name="AddressReserve"
                                placeholder="If necessary"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="State">
                                Country and state
                            </label>
                            {/* <select 
                            className="form-item__select" 
                            id="SelectCountry" 
                            name="country"
                            required>
                                <option value="" selected>Select a country/region</option>
                            </select> */}
                            <div className="form-item__select" data-state="">
                                <div
                                    className="form-item__select-title"
                                    data-default="Select a country/region"
                                >
                                    Select a country/region
                                </div>
                                <div className="form-item__select-content">
                                    <input
                                        className="form-item__select-input"
                                        id="spain"
                                        type="radio"
                                        name="singleSelect"
                                    />
                                    <label className="form-item__select-label" htmlFor="spain">
                                        Spain
                                    </label>
                                    <input
                                        className="form-item__select-input"
                                        id="Canada"
                                        type="radio"
                                        name="singleSelect"
                                    />
                                    <label className="form-item__select-label" htmlFor="retail">
                                        Canada
                                    </label>
                                </div>
                            </div>
                            <input
                                className="form-item__input"
                                type="text"
                                id="State"
                                name="State"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="City">
                                Town/city
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="City"
                                name="City"
                                placeholder="Enter your town/city here"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="zip">
                                Postcode/ZIP
                            </label>
                            <input
                                className="form-item__input"
                                type="text"
                                id="zip"
                                name="zip"
                                placeholder="Enter your ZIP here"
                                required
                            />
                        </div>
                        <div className="register-extend__item form-item">
                            <label className="form-item__label" htmlFor="phone">
                                Phone number
                            </label>
                            <input
                                className="form-item__input"
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone number for contact"
                                required
                            />
                        </div>
                    </fieldset>
                    <button type="submit" className=" form__button button button--form">
                        Register Account
                    </button>
                </form>
                <span className="login-form__register-notice">
                    All the data provided is using according to{' '}
                    <a className="login-form__policy" href="#">
                        Privacy Policy
                    </a>
                </span>
            </div>
        </div>
    );
};
