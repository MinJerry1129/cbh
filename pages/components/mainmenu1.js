import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

function MainMenu1() {
    return (
      <div className={"main_menu"}>
        <div className={"container"}>
            <div className={"main_nav"}>
                <Link href="/">
                    <a className={"main_nav_link main_nav_link_active"}>Item 1</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 2</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 3</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 4</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 5</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 6</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 7</a>
                </Link>
                <Link href="/">
                    <a className={"main_nav_link"}>Item 8</a>
                </Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default MainMenu1