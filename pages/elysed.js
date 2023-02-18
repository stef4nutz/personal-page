import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>Elysed</title>
        <meta name="description" content="landing page for elysed" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>ELYSED</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>landing page for elysed, made in <span class={styles.used}>html and css</span></p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/elysed.gif"/>
            </div>
        </div>
    </div>
    </>
    )
}
