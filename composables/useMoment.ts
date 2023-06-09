import moment from 'moment';

export const useMoment = () => {
    return (date: string, format: string, inputFormat: string = 'YYYY-MM-DD HH:mm:ss') => {
        let m = moment(date, inputFormat);
        return m.format(format);
    }    
}