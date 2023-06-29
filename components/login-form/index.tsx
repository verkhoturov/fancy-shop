export const LoginForm = () => {
    return (
        <div className="login-form">
            <div className="login-form__toggle toggle">
                <button type="button" className="toggle__button toggle__button--active">
                    Log in
                </button>
                <button type="button" className="toggle__button">
                    Register
                </button>
            </div>
            <div className="login-form__wrapper">
                <h2 className="visually-hidden">Log In</h2>
                <form className="login-form__form form" action="#" method="post">
                    <div className="form__item form-item">
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
                    </div>
                    <div className="form__item form-item">
                        <label className="form-item__label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="form-item__input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className=" form__button button button--form">
                        Log in
                    </button>
                </form>
                <a href="" className="login-form__forgot-password">
                    Lost your password?
                </a>
            </div>
            <div className="login-form__wrapper">
                <h2 className="visually-hidden">Register</h2>
                <form className="login-form__form form" action="#" method="post">
                    <div className="form__item form-item">
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
                        <span className="form-item__notice">
                            You’ll receive a link to set up a password for account shortly to e-mail
                            address provided in the field above.
                        </span>
                    </div>
                    <button type="submit" className="form__button button button--form ">
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
