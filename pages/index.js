import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome User | Home</title>
      </Head>
      <Layout>
        <main>
          <div class="mt-10 flex flex-col items-center">
            <h1 class="font-bold text-3xl font-serif">Welcome Everyone</h1>
            <h2 class="mt-8 text-lg font-bold font-mono">Blog App</h2>
            <div class="border-2 border-black p-3 mt-8">
              <h1 class="text-2xl font-bold font-serif">Today's News</h1>
              <p class="mt-4 font-mono">
                "We are all aware that we currently live and work in a world
                where AI technologies are rapidly advancing."
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
