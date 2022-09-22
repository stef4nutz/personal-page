import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>Treed Project</title>
        <meta name="description" content="namelessmc theme for treed.ro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>TREED ROMÂNIA</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>namelessmc made for treed.ro. made in <span class={styles.used}>tpl/css</span></p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/treed.png"/>
            </div>
        </div>
    </div>
    </>
    )
}