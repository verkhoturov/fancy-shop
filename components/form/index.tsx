export const Form = () => {
    return (
        <form className="form" action="#" method="post">
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
            <button type="submit" className="form__button button button--form">
                Log in
            </button>
        </form>
    );
};
