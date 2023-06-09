export const useAuth = () => {
    const accessToken = String(useCookie('access_token'));
    if (accessToken) {
        const { payload } = decodeJWT(accessToken);
        return {
            isLogin: true,
            user: payload,
        }
    }
    return {
        isLogin: false,
        user: null,
    }
}

function decodeJWT(token: string) {
    const [headerBase64, payloadBase64, signature] = token.split('.');
    const header = JSON.parse(atob(headerBase64));
    const payload = JSON.parse(atob(payloadBase64));
    return {
        header,
        payload,
        signature
    };
}