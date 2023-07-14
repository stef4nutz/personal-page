import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>Crowland</title>
        <meta name="description" content="ips theme for crowland" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>CROWLAND</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>ips theme for crowland</p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/crowland.png"/>
            </div>
        </div>
    </div>
    </>
    )
}
