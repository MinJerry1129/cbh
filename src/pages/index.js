import Header from '../components/header'
import MainMenu from '../components/mainmenu'
import TopBar from '../components/topbar'
import Blog from './blog'
import Link from 'next/link'
import styles from '../../styles/Blog.module.css'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <TopBar></TopBar>
      <MainMenu></MainMenu>
      <div className={styles.body_container}>
        <p>
          You can find more articles on the{' '}
          <Link href='/blog' className={`${styles.body_container} a`}>
          <a>blog articles page</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
