export const NewPassword = () => {
    return (
        <div className="new-password">
            <h1 className="new-password__title">Set up your password</h1>
            <form className="new-password__form form" action="#" method="post">
                <div className="form__item form-item">
                    <label className="form-item__label" htmlFor="password">
                        New password
                    </label>
                    <input
                        className="form-item__input"
                        type="password"
                        id="password"
                        name="new-pass"
                        placeholder="Enter new password"
                        required
                    />
                </div>
                <div className="form__item form-item">
                    <label className="form-item__label" htmlFor="confirm">
                        Confirm password
                    </label>
                    <input
                        className="form-item__input"
                        type="password"
                        id="confirm"
                        name="confirm-pass"
                        placeholder="Confirm your new password"
                        required
                    />
                </div>
                <button type="submit" className="form__button button button--form">
                    Change password
                </button>
            </form>
        </div>
    );
};
