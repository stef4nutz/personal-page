import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>Warfield Project</title>
        <meta name="description" content="concept ips theme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>WARFIELD PROJECT</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>concept forum theme named 'Warfield'. made in <span class={styles.used}>figma</span></p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/warfield.png"/>
            </div>
        </div>
    </div>
    </>
    )
}