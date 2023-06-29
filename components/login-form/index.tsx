import React, { useState } from 'react';
import { useRouter } from 'next/router';

export const LoginForm = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'login' | 'reg'>('login');
    return (
        <div className="login-form">
            <div className="login-form__toggle toggle">
                <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className={`toggle__button ${
                        activeTab === 'login' ? 'toggle__button--active' : ''
                    }`}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('reg')}
                    className={`toggle__button ${
                        activeTab === 'reg' ? 'toggle__button--active' : ''
                    }`}
                >
                    Register
                </button>
            </div>
            {activeTab === 'login' && (
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
                        <button
                            onClick={() => router.push('/')}
                            type="submit"
                            className=" form__button button button--form"
                        >
                            Log in
                        </button>
                    </form>
                    <a href="" className="login-form__forgot-password">
                        Lost your password?
                    </a>
                </div>
            )}
            {activeTab === 'reg' && (
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
                                You’ll receive a link to set up a password for account shortly to
                                e-mail address provided in the field above.
                            </span>
                        </div>
                        <button
                            onClick={() => router.push('/')}
                            type="submit"
                            className="form__button button button--form "
                        >
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
            )}
        </div>
    );
};
