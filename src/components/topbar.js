import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function TopBar() {
  const router = useRouter()
  if (router.pathname == "/edmonton-area") {
    return (
      <div>
        <div className={"container main_logo"}>
            <div className={"logo"}>
                <Link href="/">
                  <a>
                    <Image src="/others.png" width={100} height={100} />
                    </a>
                </Link>
            </div>
        </div>
      </div>
    )
  } else if (router.pathname == "/sellers") {
    return (
      <div>
        <div className={"container main_logo"}>
            <div className={"logo"}>
                <Link href="/">
                <a>
                    <Image src="/others.png" width={100} height={100} />
                    </a>
                </Link>
            </div>
        </div>
      </div>
    ) 
  } else if (router.pathname == "/mortgage") { 
    return (
      <div>
        <div className={"container main_logo"}>
            <div className={"logo"}>
                <Link href="/">
                <a>
                    <Image src="/logo.png" width={100} height={100} />
                    </a>
                </Link>
            </div>
        </div>
      </div>
    ) 
  } else if (router.pathname == "/commercial") {
    return (
      <div>
        <div className={"container main_logo"}>
            <div className={"logo"}>
                <Link href="/">
                <a>
                    <Image src="/others.png" width={100} height={100} />
                    </a>
                </Link>
            </div>
        </div>
      </div>
    ) 
  } else {
    return (
      <div>
        <div className={"container main_logo"}>
            <div className={"logo"}>
                <Link href="/">
                <a>
                    <Image src="/others.png" width={100} height={100} />
                    </a>
                </Link>
            </div>
        </div>
      </div>
    ) 
  }
}
  
export default TopBar