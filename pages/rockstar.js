import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

export default function Project() {
    return(
    <>
    <Head>
        <title>Rockstar Games Project</title>
        <meta name="description" content="concept page for rockstar games" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.stefanMain}>
        <div className={styles.goBack}>
            <Link href="/">go back</Link>
        </div>

        <div className={styles.projectExpand}>
            <div className={styles.projectTitle}>
                <h1>ROCKSTAR GAMES</h1>
            </div>
            <div className={styles.projectDescription}>
                <p>concept homescreen for rockstar games. made in <span class={styles.used}>figma</span> <br /> job application was made in <span class={styles.used}>html/css</span></p> 
            </div>
            <div className={styles.projectFull}>
                <img src="../full/rockstar.png"/>
                <br />
                <img src="../full/jobapp.gif" />
            </div>
        </div>
    </div>
    </>
    )
}