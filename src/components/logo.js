import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Logo() {
    const router = useRouter()
  if (router.pathname == "/edmonton-area") {
    return (
        <div className={"nav_logo"}>
            <Link href="/">
            <a>
                <Image src="/others.png" width={100} height={100} />
                </a>
            </Link>
        </div>
    )
  } else if (router.pathname == "/sellers") {
    return (
        <div className={"nav_logo"}>
            <Link href="/">
            <a>
                <Image src="/others.png" width={100} height={100} />
                </a>
            </Link>
            
        </div>
    ) 
  } else if (router.pathname == "/mortgage") { 
    return (
        <div className={"nav_logo"}>
            <Link href="/">
            <a>
                <Image src="/logo.png" width={100} height={100} />
                </a>
            </Link>
        </div>
    ) 
  } else if (router.pathname == "/commercial") {
    return (
        <div className={"nav_logo"}>
            <Link href="/">
            <a>
                <Image src="/others.png" width={100} height={100} />
                </a>
            </Link>
        </div>
    ) 
  } else {
    return (
        <div className={"nav_logo"}>
            <Link href="/">
            <a>
                <Image src="/others.png" width={100} height={100} />
                </a>
            </Link>
        </div>
    ) 
  }
}
export default Logo