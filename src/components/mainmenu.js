import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MainMenu() {
    const router = useRouter()
    if (router.pathname == "/edmonton-area") {
        return (
            <div className={"main_menu"}>
              <div className={"container"}>
                  <div className={"main_nav"}>
                      <Link href="/">
                          <p className={"main_nav_link main_nav_link_active"}>Item 6</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 7</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 8</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 9</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 10</p>
                      </Link>
                  </div>
              </div>
            </div>
        )
    } else if (router.pathname == "/sellers") {
        return (
            <div className={"main_menu"}>
              <div className={"container"}>
                  <div className={"main_nav"}>
                      <Link href="/">
                          <p className={"main_nav_link main_nav_link_active"}>Item 11</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 12</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 13</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 14</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 15</p>
                      </Link>
                  </div>
              </div>
            </div>
        )
    } else if (router.pathname == "/mortgage") {
        return (
            <div className={"main_menu"}>
              <div className={"container"}>
                  <div className={"main_nav"}>
                      <Link href="/">
                          <p className={"main_nav_link main_nav_link_active"}>Item 16</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 17</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 18</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 19</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 20</p>
                      </Link>
                  </div>
              </div>
            </div>
        )
    } else if (router.pathname == "/commercial") {
        return (
            <div className={"main_menu"}>
              <div className={"container"}>
                  <div className={"main_nav"}>
                      <Link href="/">
                          <p className={"main_nav_link main_nav_link_active"}>Item 21</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 22</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 23</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 24</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 25</p>
                      </Link>
                  </div>
              </div>
            </div>
        )
    } else {
        return (
            <div className={"main_menu"}>
              <div className={"container"}>
                  <div className={"main_nav"}>
                      <Link href="/">
                          <p className={"main_nav_link main_nav_link_active"}>Item 1</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 2</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 3</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 4</p>
                      </Link>
                      <Link href="/">
                          <p className={"main_nav_link"}>Item 5</p>
                      </Link>
                  </div>
              </div>
            </div>
        )
    }
  }

  export default MainMenu