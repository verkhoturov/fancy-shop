import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import { NextPageContext } from 'next';
import { AgeConfirmation } from '../components/age-confirmation';
import NextNProgress from 'nextjs-progressbar';
import { checkBasicAuth } from '../libs/basicAuth';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress color="#fff" />
            <Component {...pageProps} />
            <AgeConfirmation />
        </>
    );
}

MyApp.getInitialProps = async (appContext: { ctx: NextPageContext }) => {
    if (appContext.ctx.res && !checkBasicAuth(appContext.ctx.req)) {
        appContext.ctx.res.setHeader(
            'WWW-Authenticate',
            'Basic realm="Access to site", charset="UTF-8"',
        );
        appContext.ctx.res.statusCode = 401;
        appContext.ctx.res.end('Authentication required.');
        return { pageProps: {} };
    }

    return { pageProps: {} };
};

export default MyApp;
