export const FormItem = () => {
    return (
        <div className="form-item">
            <label className="form-item__label" htmlFor="email">
                E-mail
            </label>
            <input
                className="form-item__input"
                type="email"
                id="email"
                name="email"
                placeholder="wannabegrower@gmail.com"
            />
        </div>
    );
};
