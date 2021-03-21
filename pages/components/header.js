import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import TopBar from './topbar'
import MainMenu from './mainmenu1'
import Nav from './nav';
import Image from 'next/image'

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
                <div className={"nav_logo"}>
                    <img src="/logo.png" width={100} height={100} />
                </div>
            </div>
            <div className={"container mainmenu"}>
                <div className={"nav"}>
                    <div className={"primary"}>
                        <Link href="/">
                            <a className={router.pathname == "/" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Calgary Area Real estate</a>
                        </Link>
                        <Link href="/all/menu/edmonton">
                            <a className={router.pathname == "/all/menu/edmonton" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Edmonton area real estate</a>
                        </Link>
                        <Link href="/all/menu/seller">
                            <a className={router.pathname == "/all/menu/seller" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Seller</a>
                        </Link>
                        <Link href="/all/menu/mortgage">
                            <a className={router.pathname == "/all/menu/mortgage" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Mortgage</a>
                        </Link>
                        <Link href="/all/menu/commercial">
                            <a className={router.pathname == "/all/menu/commercial" ? styles.nav_link + " " + styles.nav_link_active : styles.nav_link}>Commercial</a>
                        </Link>
                    </div>
                    <div className={"secondary"}>
                        <Link href="/">
                            <a className={styles.nav_link}>Special Offers</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.nav_link}>Login</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header