import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <div class="my-8 mx-10">
          <h1 class="text-3xl underline decoration-double font-bold mb-4">
            Contact Us
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default contact;
