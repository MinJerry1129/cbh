import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/header'
import MainMenu from '../../components/mainmenu'
import TopBar from '../../components/topbar'

//data
import { getAllPostsWithSlug, getPost } from '../../../lib/api'
import styles from '../../../styles/Blog.module.css'

export default function Post({ postData }) {
    const router = useRouter()

    if(!router.isFallback && !postData?.slug) {
        return (
            <div>
            <Header></Header>
            <TopBar></TopBar>
            <MainMenu></MainMenu>
            <p>hmm...looks like an error</p>
            </div>
        )
    }

    const formatDate = date => {
        const newDate = new Date(date)

        return `${newDate.getDate()}/${
            newDate.getMonth() + 1
        }/${newDate.getFullYear()}`
    }

    return (
        <div>
            <Header></Header>
            <TopBar></TopBar>
            <MainMenu></MainMenu>
            <main>
                {router.isFallback ? (
                    <h2>Loading...</h2>
                ) : (
                    <article>
                        <div>
                            <h1>{postData.title}</h1>
                            <p>{formatDate(postData.date)}</p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html : postData.content }} />
                    </article>
                )}
                <p>
                    <Link href="/blog">
                        <a>back to articles</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();

    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) ||  [],
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const data = await getPost(params.slug);

    return {
        props: {
            postData: data.post
        }
    }
}