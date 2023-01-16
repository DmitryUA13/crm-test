import styles from './AnaliticAreaOrders.module.scss';
import DateInterval from '../../scripts/dateInterval.js'
//import { Db } from '../../scripts/db.js'



export default function AnaliticAreaOrders({ dataIn }) {

   const date = DateInterval();
   const dateTo  = date[0];// дата на мемент открытия приложения
   const dateFrom  = date[1];//дата на момент открытия приложения минус 30 дней без часов, минут и секунд
   const dataDb = JSON.parse(dataIn); //данные из базы данных полученные из родительского элемента
   const arrDataToSet = [];
   
   
   /* Выбираем данные для первичной загрузки на страницу согласно фильтру между dateFrom и dateTo*/
   dataDb.map( item => {
    
    if(item.order_dateAdd.slice(0,10) <= dateTo && item.order_dateAdd.slice(0,10) >= dateFrom){
        arrDataToSet.push(item);
    }
   });
    /*Функция считает количество каждого статуса заявки */
    const countStatuses = (arrDataToSet) => {
        return arrDataToSet.reduce((acc, el, index) => {
            acc[el.statusName] = (acc[el.statusName] || 0) + 1;//cчитаем количество статусов по их именам
            acc.statusCounter = index+1;
            return acc;
        }, {});
    }

    const totslStatuses = countStatuses(arrDataToSet);

    const getSumData = (arrDataToSet) => {
        return arrDataToSet.reduce((total, current, index) => {
            total[current.statusName]  = (typeof(total[current.statusName]) == 'undefined' ? 0 : total[current.statusName] ) + current.order_summ;            return total;
        }, {}, 0);
    }

    let totalActiveData = totslStatuses.statusCounter-totslStatuses["Успішні"]; //Всего сделок всех стадий кроме Успешных и Неуспешных
    console.log( getSumData(arrDataToSet));

    /*  **sumData**  Массив в формате 
        {
        'В роботі': 36545.55,
        'Лід': 26628.94,
        'Замір': 1450.55,
        'В роботі менеджера': 127765.75,
        'Успішні': 1100,
        'Розрахунок': 3578.91
        } */
    const sumData = getSumData(arrDataToSet);
    const handleClick = (e) => {
        e.preventDefault();
        //const obj = Db("SELECT * FROM `users`");
       //console.log(obj);
       }

    return (
        <section className={styles.AnaliticWrapper}>
            <div className={styles.Total}>
                <div className={styles.TotalLeft}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.Text}>Всього:</td>
                                <td><b>{totalActiveData}</b></td>
                            </tr>
                            <tr>
                                <td className={styles.Text}>Ліди:</td>
                                <td><b>{totslStatuses['Лід']}</b></td>
                            </tr>
                            <tr>
                                <td className={styles.Text}>Менеджер:</td>
                                <td><b>{totslStatuses['В роботі менеджера']}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.TotalRight}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.Text}>Замір:</td>
                                <td><b>{totslStatuses['Замір']}</b></td>
                            </tr>
                            <tr>
                                <td className={styles.Text}>В роботі:</td>
                                <td><b>{totslStatuses['В роботі']}</b></td>
                            </tr>
                            <tr>
                                <td className={styles.Text}>Розрахунок:</td>
                                <td><b>{totslStatuses['Розрахунок']}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.TotalMoney}>
                <div className={styles.TotalMoneyLeft}>
                    <div className={styles.TotalMoneyLeftTopBox}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.Text}>В роботі:</td>
                                    <td><b>{totslStatuses["В роботі"]} шт</b></td>
                                </tr>
                                <tr>
                                    <td className={styles.Text}>на суму:</td>
                                    <td><b>{sumData["В роботі"]} грн.</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.TotalMoneyLeftBottBox}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.Text}>Розрахунок:</td>
                                    <td><b>{totslStatuses["Розрахунок"]} шт</b></td>
                                </tr>
                                <tr>
                                    <td className={styles.Text}>на суму:</td>
                                    <td><b>{sumData["Розрахунок"]} грн.</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.TotalMoneyRight}>
                    <div className={styles.TotalMoneyRightHeading}>Успішні</div>
                    <div>{totslStatuses["Успішні"]} шт</div>
                    <div>на суму:</div>
                    <div>{sumData["Успішні"]} грн</div>
                </div>
            </div>
            <div className={styles.FilterDate}>
                <form id="FilterDate" >
                    <div className={styles.FilterDateRowWrapper}>

                        <div className={styles.FilterDateLeft}>

                            <div className={styles.FilterDateHead}>
                                Фільтр  по даті отримання
                            </div>
                            <div className={styles.FilterDateInput}>
                                <div className={styles.FilterDateInputText}>з:</div>
                                <div><input type="date" name="dateFrom" id="dateFrom" defaultValue={dateFrom}/></div>
                                <div className={styles.FilterDateInputText}>до:</div>
                                <div><input type="date" name="dateTo" id="dateTo" defaultValue={dateTo} /></div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.FilterDateButton}>
                        <input type="submit" value="Старт" onClick={handleClick} />
                    </div>
                </form>
            </div>
        </section>
    )
}


// export async function getStaticProps(context) {
//     const res = await fetch(`https://.../data`)
//     const data = await res.json()
  
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { data }, // will be passed to the page component as props
//     }
//   }