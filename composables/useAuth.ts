import useUserStore from '@/store/user';

const useAuth = () => {
    const { $pinia } = useNuxtApp();
    const userStore = useUserStore($pinia);
    const user = useState('user', () => userStore.getUser);
    const isLogined = useState('isLogined', () => userStore.getUser ? true : false);
    return {
        user,
        isLogined,
    }
}

export default useAuth;