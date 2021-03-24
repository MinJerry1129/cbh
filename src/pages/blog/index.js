import { getAllPosts } from '../../../lib/api'
import Link from 'next/link'
import Header from '../../components/header'
import MainMenu from '../../components/mainmenu'
import TopBar from '../../components/topbar'

const Blog = ({ allPosts: { edges } }) => (
  <div>
    <Header></Header>
    <TopBar></TopBar>
    <MainMenu></MainMenu>
    <main >
      <section>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <div>
              <figure>
                <img
                  src={node.extraPostInfo.thumbImage.mediaItemUrl}
                  alt={node.title}
                />
              </figure>
            </div>
            <div >
              <h2>{node.title}</h2>
              <p>{node.extraPostInfo.authorExcerpt}</p>
              <Link href={`/blog/${node.slug}`}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}

export default Blog