import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { AgeConfirmation } from '../components/age-confirmation';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <AgeConfirmation />
        </>
    );
}
