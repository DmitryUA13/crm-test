import styles from '../styles/AddClient.module.scss';
import React from 'react'

import Head from "next/head";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function AddClient() {
  return (
    <>
      <Header />
      <LeftBar titleTab="+ КЛІЄНТА">
        <section className={styles.SectionAddClient}>
          
        </section>
      </LeftBar>
    </>
  );
  componentWillUnmount(console.log('Удаление обїекта и візов функции componentWillUnmount'))
}

