import { IncomingMessage } from 'http';

export const checkBasicAuth = (req?: IncomingMessage): boolean => {
    if (!req) return false;

    const auth = { login: 'admin', password: 'iloveseeds' };

    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    return login === auth.login && password === auth.password;
};
