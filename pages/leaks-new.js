import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>leaksOS Project</title>
        <meta name="description" content="ips theme for leaks.ro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>LEAKS ROMÂNIA</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>ips theme made for leaks.ro. made in <span class={styles.used}>php/html/css</span></p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/leaks-new.png"/>
                <img src="../full/leaks-new-white.png"/>
            </div>
        </div>
    </div>
    </>
    )
}
