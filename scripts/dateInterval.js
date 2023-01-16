export default function getDatesInterval(){
    const date  = new Date();
    const month = 60*60*24*30*1000; //1000 миллисекунд в секунде
    const dateToday = date.toISOString().slice(0,10);
    const dateMinusMonthUNIX = date.setTime(date.getTime() - month);
    const dateMinusMonth = new Date(dateMinusMonthUNIX).toISOString().slice(0,10);

    const dateInterval = [dateToday, dateMinusMonth]

    return dateInterval;
    }