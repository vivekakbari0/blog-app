import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
/*Server Side Fetching*/
// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

const blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <div className="flex justify-center text-4xl font-serif my-9">
          Blogs
        </div>
        {data.slice(0, 6).map((elem) => {
          return (
            <div
              key={elem.id}
              className="flex justify-center m-3 border-2 border-black mx-36 p-3"
            >
              <h3 className="mr-5 font-bold">{elem.id}.</h3>
              <Link href={`/blog/${elem.id}`}>
                <h2 className="font-mono text-lg capitalize hover:text-blue-700">
                  {elem.title}
                </h2>
              </Link>
            </div>
          );
        })}
      </Layout>
    </>
  );
};

export default blog;
