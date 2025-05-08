import Link from 'next/link';
import { getAllBlogPosts, getAllTopics } from "../Lib/Data";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

export async function getStaticProps() {
  const allTopics = getAllTopics();
  const allBlogs = getAllBlogPosts();
  
  return {
    props: {
      topics: allTopics,
      blogs: allBlogs.filter(blog => blog.data.isPublished).map(blog => ({
        title: blog.data.Title,
        slug: String(blog.data.Title.split(" ").join("-").toLowerCase()),
      }))
    }
  };
}

export default function Custom404({ topics, blogs }) {
  return (
    <>
      <Head>
        <title>404 - Page non trouvée | CodeNexus</title>
        <meta name="description" content="La page que vous cherchez n'existe pas." />
      </Head>
      
      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        
        <div className="py-24 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            404 - Page non trouvée
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="mb-12">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Retourner à l'accueil
            </Link>
          </div>
          
          {blogs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Articles disponibles
              </h2>
              <ul className="space-y-2 text-left max-w-lg mx-auto">
                {blogs.map((blog, index) => (
                  <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                    <Link href={`/blogs/${blog.slug}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </>
  );
} 