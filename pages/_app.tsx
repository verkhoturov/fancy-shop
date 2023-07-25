import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { AgeConfirmation } from '../components/age-confirmation';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
	        <NextNProgress color="#fff" />
	        <Component {...pageProps} />
            <AgeConfirmation />
        </>
    );
}
