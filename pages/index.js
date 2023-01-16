import React from 'react';
import styles from '../styles/DashboardComponent.module.scss';
import Image from 'next/image';
import daddyImg from '../public/images/1.jpg';
import Head from "next/head";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <Header />
        <LeftBar titleTab="ДАШБОРД">
          <section className={styles.mainWrapDashboard}>
          <Image 
            src={daddyImg}
            alt="Daddy"
            width={200}
            height={200}
          />
          </section>
        </LeftBar>
      </React.StrictMode>
    </>
  );
}
