import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Abe Hidek's Styles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <h3>Mark</h3>
        <p>Paragraph</p>
        <div className="card">
          <h1>Title</h1>
          <h2>Subtitle</h2>
          <h3>Mark</h3>
          <p>Paragraph</p>
        </div>

        <button className="button">Button</button>
      </main>
    </div>
  );
};

export default Home;
