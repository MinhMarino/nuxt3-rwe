import { AxiosInstance } from "axios";

export default (http: AxiosInstance) => {
    return {
        getAllArticles(params: any = {}) {
            // console.log("http", http);
            return http.get(`/articles`, {
                params,
            });
        }
    }   
}

