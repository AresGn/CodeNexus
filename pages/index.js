import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BlogHeader from "../Components/BlogHeader";
import { getAllBlogPosts, getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  const allTopics = getAllTopics();
  return {
    props: {
      blogs: allBlogs,
      topics: allTopics,
    },
  };
};

export default function Home({ blogs, topics }) {
  return (
    <>
      <Head>
        <title>CodeNexus 🚀</title>
        <meta name="title" content="CodeNexus 🚀" />
        <meta
          name="description"
          content="CodeNexus is a tech blog created by Arès GNIMAGNON."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codenexus.tech/" />
        <meta
          property="og:title"
          content="CodeNexus - A Tech Blog by Arès GNIMAGNON"
        />
        <meta
          property="og:description"
          content="A Tech Blog created by Arès GNIMAGNON"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/aresgnimagnon/CodeNexus/main/Extra/sc.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codenexus.tech/" />
        <meta
          property="twitter:title"
          content="CodeNexus - A Tech Blog by Arès GNIMAGNON"
        />
        <meta
          property="twitter:description"
          content="A Tech Blog created by Arès GNIMAGNON using Next.js and Firebase"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/aresgnimagnon/CodeNexus/main/Extra/sc.png"
        />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        <Header />

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map(
                (blog) =>
                  blog.data.isPublished && (
                    <BlogHeader
                      key={blog.data.Id}
                      data={blog.data}
                      content={blog.content}
                      readTime={blog.readTime.text}
                    />
                  )
              )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
