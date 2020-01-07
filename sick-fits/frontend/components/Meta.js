// contains all the elements that you would add to the head tag
// such as facebook open graph, twitter, title, external css, etc

import Head from "next/head";

export default () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <title>Sick Fits!</title>
    </Head>
  );
};
