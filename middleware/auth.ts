import useUserStore from '@/store/user';

export default defineNuxtRouteMiddleware((to, from) => {
    const { $pinia } = useNuxtApp();
    const userStore = useUserStore($pinia);
    // only run in client
    if (process.client) {
        const access_token = useCookie('access_token').value || '';
        try {
            const decodedData = decodeJWT(access_token);
            userStore.setUser(decodedData?.payload);            
        } catch (err) {
            return navigateTo('/', { redirectCode: 301 });
        }
    }
})

function decodeJWT(token: string) {
    const [headerBase64, payloadBase64, signature] = token.split('.');
    const header = JSON.parse(atob(headerBase64));
    const payload = JSON.parse(atob(payloadBase64));

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTime = payload.exp;
    const isExpired = currentTimestamp >= expirationTime;

    return {
        header,
        payload,
        signature,
        isExpired
    };
}