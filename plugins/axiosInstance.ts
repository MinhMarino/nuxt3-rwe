import { App } from 'vue';


export default function ({ app, store }: { app: App; store: any }, inject: (key: string, value: any) => void) {
    inject('a', { data: 1}); 
}