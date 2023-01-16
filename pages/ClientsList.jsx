import styles from '../styles/ClientsList.module.scss';
import React from 'react';

import Head from "next/head";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function ClientsList() {
  return (
    <>
      <Header />
      <LeftBar titleTab="КЛІЄНТИ">
        <div className={styles.ClintsListWrapper}>КЛІЄНТИ</div>
      </LeftBar>
    </>
  );
}