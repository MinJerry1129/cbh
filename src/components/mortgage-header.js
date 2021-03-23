import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Nav from './nav';
import Logo from './logo'

function Header() {
    const router = useRouter()
    return (
        <div className={"header"}>
            <Head>
            <title>Next</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={"nav_menu"}>
                <Nav />
                <Logo/>
            </div>
            <div className={"container mainmenu"}>
                <div className={"nav"}>
                    <div className={"primary"}>
                        <Link href="/">
                            <a>
                            <p className={router.pathname == "/" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Calgary Area Real estate</p>
                            </a>
                        </Link>
                        <Link href="/edmonton-area">
                        <a>
                            <p className={router.pathname == "/edmonton-area" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Edmonton area real estate</p>
                            </a>
                        </Link>
                        <Link href="/sellers">
                        <a>
                            <p className={router.pathname == "/sellers" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Seller</p>
                            </a>
                        </Link>
                        <Link href="/mortgage">
                        <a>
                            <p className={router.pathname == "/mortgage" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Mortgage</p>
                            </a>
                        </Link>
                        <Link href="/commercial">
                        <a>
                            <p className={router.pathname == "/commercial" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Commercial</p>
                            </a>
                        </Link>
                    </div>
                    <div className={"secondary"}>
                        <Link href="/">
                        <a>
                            <p className={styles.nav_link}>Special Offers</p>
                            </a>
                        </Link>
                        <Link href="/">
                        <a>
                            <p className={styles.nav_link}>Login</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header