import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const AgeConfirmation = () => {
    const router = useRouter();
    const [isAgeConfirmed, setIsAgeConfirmed] = useState(true);

    useEffect(() => {
        const isAgeConfirmed = localStorage.getItem('age-confirmation');

        if (!isAgeConfirmed) {
            setIsAgeConfirmed(false);
        }
    }, []);

    const onYesClick = () => {
        setIsAgeConfirmed(true);
        localStorage.setItem('age-confirmation', 'true');
    };

    if (isAgeConfirmed) return null;

    return (
        <div className="age-confirmation">
            <div className="age-confirmation__inner">
				<Image className="age-confirmation__logo" src="/images/logos/groundedgenetics.png" alt="" />
                <h1 className="age-confirmation__title">
                    Are you <br className="br" /> over 18 <br />
                    years of age?
                </h1>

                <div className="age-confirmation__buttons">
                    <button onClick={onYesClick} className="button age-confirmation__button">
                        Yes
                    </button>
                    <button
                        onClick={() => router.push('https://www.google.com/')}
                        className="button age-confirmation__button"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};
