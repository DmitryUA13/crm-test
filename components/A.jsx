import React, { Component } from 'react'
import Link from "next/link";
import { useState } from "react";
import styles from '../styles/A.module.scss';
import Image from 'next/image';
import {default as DashIco} from '../public/images/tabler-icon-dashboard.svg';
import OrderListIco from '../public/images/tabler-icon-list-check.svg';
import ClientListIco from '../public/images/tabler-icon-users.svg';
import AddCliientIco from '../public/images/tabler-icon-file-plus.svg';

export default function A({ href }) {
    const [aList, getRoute] = useState([
        { href: '/', text: 'Дашборд', icon: <DashIco className={styles.svgIco}/> },
        { href: '/OrderList', text: 'Замовлення', icon: <OrderListIco className={styles.svgIco}/> },
        { href: '/ClientsList', text: 'Клієнти', icon: <ClientListIco className={styles.svgIco}/> },
        { href: '/AddClient', text: 'Додати клієнта', icon: <AddCliientIco className={styles.svgIco}/> }
    ])
    // console.log(<DashIco />);
    return (

        <div>
            <nav className={styles.navBox}>
                <menu className={styles.menuBox}>
                    {aList.map((item, index) =>
                        <li className={styles.li} key={index}>
                            <Link className={styles.linkBox} href={item.href}>
                                <div className={styles.iconBox}>
                                    {item.icon}
                                    {/* <Image className="imgIcon" src={item.icon} width={30} height={30} alt={item.text} /> */}
                                </div>
                                <div className={styles.cardBox}>
                                    {item.text}
                                </div>
                            </Link>
                        </li>
                    )}
                </menu>
            </nav>
        </div>
    )
}