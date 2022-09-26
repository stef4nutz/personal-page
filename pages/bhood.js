import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>BROTHERHOOD Project</title>
        <meta name="description" content="landing page for bhood.ro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>BROTHERHOOD ROMÂNIA</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>landing page made for BROTHERHOOD ROMÂNIA community. made in <span class={styles.used}>html/css</span></p>
                <p>I do not own the fist logo.</p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/bhood.png" />
            </div>
        </div>
    </div>
    </>
    )
}
