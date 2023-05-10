import Head from 'next/head';
import React from 'react';
import Navbar from '../../components/navbar';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((elem) => {
    return {
      params: {
        page: elem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.page;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog Details</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center m-3 mx-36 mt-20 p-6 shadow-xl bg-zinc-300">
        <h2 className="font-mono text-xl capitalize mb-4">{data.title}</h2>
        <p className="font-mono text-lg capitalize">{data.body}</p>
      </div>
    </>
  );
};

export default myData;
