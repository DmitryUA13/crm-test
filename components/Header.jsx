import React from "react";
import styles from '../styles/Header.module.scss'
import UsersIcon from '../public/images/tabler-icon-user-circle.svg';
import Logo from '../public/images/logo65-130.svg';


export default function Header({ children }) {

    return (
        <section className={styles.Header}>
            <nav className={styles.headerNav}>
                <div className={styles.logoHeader}>
                    <Logo className={styles.Logo} />
                </div>
                <div className={styles.userInfoHeader}>
                    <div className={styles.userData}>
                        <div className={styles.userName}>Dmitry Filimonov</div>
                        <div className={styles.userId}>ua-123-456</div>
                    </div>
                    <div className={styles.userIcon}>
                        <UsersIcon className={styles.userIcon} />
                    </div>
                </div>
            </nav>
        </section>
    )
}