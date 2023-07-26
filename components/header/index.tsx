import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from './logo.png';

import { Cart } from '../cart';
import { useProducts } from '@/store';

export const Header = () => {
    const [basket] = useProducts((state: any) => [state.basket]);
    const [showCart, setShowCart] = useState(false);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        setProductCount(basket.length);
    }, [basket, setProductCount]);

    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <Link href="/">
                        <Image
                            className="header__logo"
                            src={logoImg.src}
                            width={logoImg.width}
                            height={logoImg.height}
                            alt="logo"
                        />
                    </Link>

                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link href="/shipping">Shipping & Returns</Link>
                            </li>
                            <li>
                                <Link href="/legal/terms-and-conditions">Legal documents</Link>
                            </li>
                        </ul>
                    </nav>
                    <button
                        onClick={() => setShowCart(true)}
                        className="button header__cart-button  button--header"
                        type="button"
                    >
                        <span className="card-count">{productCount}</span>
                        <svg
                            width="65"
                            height="23"
                            viewBox="0 0 65 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40.048 17.196C38.5267 17.196 37.262 16.72 36.254 15.768C35.246 14.7973 34.742 13.5747 34.742 12.1C34.742 10.6067 35.2413 9.384 36.24 8.432C37.248 7.48 38.5173 7.004 40.048 7.004C41 7.004 41.8633 7.20933 42.638 7.62V9.65C41.882 9.146 41.0233 8.894 40.062 8.894C39.138 8.894 38.3587 9.19733 37.724 9.804C37.108 10.4013 36.8 11.1667 36.8 12.1C36.8 13.0333 37.1173 13.8033 37.752 14.41C38.3773 15.0073 39.1753 15.306 40.146 15.306C41.2193 15.306 42.1153 15.0213 42.834 14.452V16.482C42.0407 16.958 41.112 17.196 40.048 17.196ZM51.0906 15.474C51.2586 15.474 51.3939 15.446 51.4966 15.39V16.832C51.2446 17.028 50.8899 17.126 50.4326 17.126C49.6393 17.126 49.1119 16.8273 48.8506 16.23C48.2346 16.8647 47.4319 17.182 46.4426 17.182C45.6773 17.182 45.0566 16.9673 44.5806 16.538C44.1046 16.1087 43.8666 15.544 43.8666 14.844C43.8666 14.0973 44.1373 13.528 44.6786 13.136C45.2199 12.744 45.8686 12.548 46.6246 12.548C47.4179 12.548 48.0899 12.6927 48.6406 12.982V12.772C48.6406 11.8947 48.0246 11.456 46.7926 11.456C46.0366 11.456 45.3319 11.652 44.6786 12.044V10.392C45.3879 10.0187 46.2513 9.832 47.2686 9.832C48.2766 9.832 49.0793 10.0747 49.6766 10.56C50.2926 11.0453 50.6006 11.7173 50.6006 12.576V14.942C50.6006 15.2967 50.7639 15.474 51.0906 15.474ZM48.6406 14.942V14.242C48.2299 13.9713 47.7446 13.836 47.1846 13.836C46.7646 13.836 46.4286 13.9153 46.1766 14.074C45.9339 14.2327 45.8126 14.4567 45.8126 14.746C45.8126 15.0447 45.9246 15.2733 46.1486 15.432C46.3726 15.5813 46.6759 15.656 47.0586 15.656C47.7493 15.656 48.2766 15.418 48.6406 14.942ZM54.8365 17H52.8625V10.014H54.8365V11.19C55.0512 10.8167 55.3778 10.4993 55.8165 10.238C56.2738 9.96733 56.7592 9.832 57.2725 9.832C57.3845 9.832 57.4592 9.83667 57.4965 9.846V11.778C57.3098 11.7313 57.1045 11.708 56.8805 11.708C56.4232 11.708 56.0032 11.8293 55.6205 12.072C55.2472 12.3053 54.9858 12.59 54.8365 12.926V17ZM59.8642 14.83V11.666H58.4922V10.014H59.8642V8.096H61.8382V10.014H63.8262V11.666H61.8382V14.438C61.8382 14.7833 61.9129 15.0353 62.0622 15.194C62.2116 15.3433 62.4542 15.418 62.7902 15.418C63.1356 15.418 63.4762 15.334 63.8122 15.166V16.804C63.4016 17.056 62.8462 17.182 62.1462 17.182C60.6249 17.182 59.8642 16.398 59.8642 14.83Z"
                                fill="#6B5A25"
                            />
                            <path
                                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                stroke="#6B5A25"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                stroke="#6B5A25"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                stroke="#6B5A25"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            {showCart && (
                <div className="modal">
                    <Cart onClose={() => setShowCart(false)} />
                </div>
            )}
        </>
    );
};
