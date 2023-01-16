import styles from '../styles/LeftBar.module.scss';
import A from './A'

export default function LeftBar(props) {
    return (
            <section className={styles.wrapper}>
                <div className={styles.LeftBar}>
                    <h3 className={styles.h3White}>{props.titleTab}</h3>
                    <div className="linkBlock">
                        <A />
                    </div>
                </div>
                <div className={styles.contentBlock}>
                    {props.children}
                <footer>Торгівельна марка та право власності на FD-CRM - захищені законодавством України. 2022р.</footer>
                </div>
            </section>
    )
    
}

