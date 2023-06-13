import useUserStore from '@/store/user';

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();
    // only run in client
    if (process.client) {
        const access_token = useCookie('access_token').value || '';
        try {
            const decodedData = decodeJWT(access_token);
            const nuxtApp = useNuxtApp();
            const userStore = useUserStore(nuxtApp.$pinia);
            userStore.setUser({name: "minh"});
            console.log("nuxtApp: ", nuxtApp);
        } catch (err) {
            
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