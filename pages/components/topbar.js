import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'


function TopBar() {
    return (
      <div>
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/logo.png" width={100} height={100} />
                </Link>
            </div>
        </div>
      </div>
    )
}
  
export default TopBar