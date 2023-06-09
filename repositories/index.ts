import axios, { AxiosInstance  } from 'axios';
import config from '@/config/axiosConfig';

const axiosConfig: AxiosInstance = axios.create(config);

export default {
    getAllArticles(params: any = {}) {
        return axiosConfig.get(`/articles`, {
            params,
        });
    }
}

