export const Toggle = () => {
    return (
        <div className="toggle">
            <button type="button" className="toggle__button toggle__button--active">
                Log in
            </button>
            <button type="button" className="toggle__button">
                Register
            </button>
        </div>
    );
};
