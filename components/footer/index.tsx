import Link from 'next/link';
import Image from 'next/image';
import logoImg from './logo.png';
import { MasterCard, MastercardMobile, Visa } from './icons';

import { useScreenSize } from '@/utils';

export const Footer = () => {
    const { isTablet } = useScreenSize();
    return (
        <footer className="footer">
            <div className="footer__menu">
                <div className="section footer__inner">
                    <Link href="/">
                        <Image
                            className="footer__logo"
                            src={logoImg.src}
                            width={logoImg.width}
                            height={logoImg.height}
                            alt="logo"
                        />
                    </Link>

                    <nav className="footer__nav">
                        <ul>
                            <li>
                                <Link href="/shipping">Shipping & Returns</Link>
                            </li>
                            <li>
                                <Link href="/legal/terms-and-conditions">Legal info</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="footer__soc">
                        <Link href="/">
                            <svg
                                width="120"
                                height="44"
                                viewBox="0 0 120 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M35.3498 0H8.61674C3.97313 0 0.195312 3.77694 0.195312 8.42054V17.3157V35.1545C0.195312 39.7981 3.97313 43.575 8.61674 43.575H35.3506C39.9943 43.575 43.7712 39.7981 43.7712 35.1545V17.3149V8.41967C43.7703 3.77606 39.9934 0 35.3498 0ZM37.7652 5.02156L38.7285 5.01805V5.977V12.404L31.3671 12.4278L31.3417 5.04266L37.7652 5.02156ZM15.7637 17.3149C17.1595 15.3838 19.4237 14.1172 21.9833 14.1172C24.5428 14.1172 26.807 15.3838 28.2011 17.3149C29.1091 18.5753 29.6532 20.117 29.6532 21.7871C29.6532 26.0158 26.2093 29.4561 21.9824 29.4561C17.7528 29.4561 14.3125 26.0158 14.3125 21.7871C14.3133 20.117 14.8557 18.5753 15.7637 17.3149ZM39.5249 35.1536C39.5249 37.4574 37.6518 39.3287 35.3498 39.3287H8.61674C6.31383 39.3287 4.44074 37.4574 4.44074 35.1536V17.3149H10.9451C10.3835 18.6966 10.0679 20.2058 10.0679 21.7871C10.0679 28.3556 15.4121 33.7033 21.9833 33.7033C28.5536 33.7033 33.8977 28.3556 33.8977 21.7871C33.8977 20.2058 33.5804 18.6966 33.0187 17.3149H39.5249V35.1536Z"
                                    fill="#B0B38D"
                                />
                                <path
                                    d="M119.223 8.99528C117.631 9.70285 115.918 10.1801 114.12 10.3937C115.956 9.29501 117.363 7.55464 118.026 5.47851C116.31 6.49724 114.409 7.23646 112.385 7.63551C110.765 5.90921 108.456 4.82983 105.901 4.82983C100.995 4.82983 97.0181 8.80718 97.0181 13.7136C97.0181 14.4089 97.0963 15.0865 97.2484 15.7379C89.865 15.3669 83.3184 11.8308 78.9367 6.45593C78.172 7.76736 77.7343 9.29325 77.7343 10.9229C77.7343 14.0045 79.3024 16.7241 81.6862 18.3168C80.2306 18.2702 78.8603 17.8703 77.6622 17.2049C77.6614 17.2418 77.6614 17.2796 77.6614 17.3174C77.6614 21.6208 80.7237 25.2105 84.7881 26.028C84.0427 26.2301 83.2578 26.3391 82.4474 26.3391C81.8743 26.3391 81.3179 26.2838 80.7756 26.1792C81.9068 29.7082 85.1871 32.2775 89.0739 32.3487C86.0336 34.7316 82.2039 36.152 78.0411 36.152C77.3247 36.152 76.6171 36.1098 75.9219 36.0272C79.8544 38.5489 84.5235 40.0186 89.5398 40.0186C105.881 40.0186 114.815 26.4824 114.815 14.7429C114.815 14.3579 114.808 13.9738 114.791 13.5923C116.526 12.3424 118.033 10.777 119.223 8.99528Z"
                                    fill="#B0B38D"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="section footer__contacts">
                <div className="footer__note">
                    <p>
                        La titularidad del presente sitio web corresponde a Uptown Supply Co SL con
                        CIF B72445190 y domicilio social Rambla de Catalunya 38, 8-1, 08007,
                        Barcelona, España.
                        <br />
                        <br />
                        Las semillas de marihuana se venden con fines decorativos y para
                        coleccionismo. Uptown Supply Co SL no se hace responsable del uso o cultivo
                        de estas semillas.
                    </p>
                </div>

                <div className="footer__address">
                    <p className="footer__subtitle">Contacts:</p>
                    <p>
                        <span style={{ fontWeight: 700 }}>Phone:</span>{' '}
                        <a href="tel:+38224545235">+382 245 452 35</a>
                    </p>
                    <address style={{ fontStyle: 'normal' }}>
                        <span style={{ fontWeight: 700 }}>Address:</span> Rambla de Catalunya 38,
                        8-1, 08007, Barcelona, España.
                    </address>
                </div>

                <div className="footer__payment">
                    {isTablet ? <MastercardMobile /> : <MasterCard />}
                    <Visa />
                </div>
            </div>
        </footer>
    );
};
