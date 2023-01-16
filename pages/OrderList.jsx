import styles from '../styles/OrderList.module.scss';
import React, { useState } from 'react';
import Head from "next/head";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";
import AnaliticAreaOrders from '../components/OrdersArea/AnaliticAreaOrders';
import MainOrdersListAreaOrders from '../components/OrdersArea/OrdersListAreaOrders/MainOrdersListAreaOrders';
import mysql from 'mysql2/promise';



export async function getServerSideProps(context) {
  async function main() {
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'fd_crm'});
    // query database
    const [rows, fields] = await connection.execute('SELECT `orders`.`order_dateAdd`, `orders`.`order_id`,`orders`.`order_title`, `orders`.`order_description`, `orders`.`order_summ`, `users`.`name`, `users`.`secondName`, `orderStatuses`.`statusName` FROM `orders`, `users`,`orderStatuses` WHERE `order_status`!=7 AND `user_id`=`users`.`id` AND `orders`.`order_status`=`orderStatuses`.`id`');
    return rows;
  }
  
  const ress = await main();
  return {
    props: {
      data: JSON.stringify(ress),
    }
  }
}




export default function OrderList({ data }) {
 const [dataInOut, setDataIn] = useState(data);
 console.log("dataIn: " + dataInOut);
  return (
    <>
      <Header />
      <LeftBar titleTab="ЗАЯВКИ" >
        <div className={styles.OrdersWrapper}>
          <AnaliticAreaOrders dataIn={data}/> 
          
          <MainOrdersListAreaOrders />
        </div>

      </LeftBar>
    </>
  );
}