import '@/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Razuberri - Your Pi Manager</title>
      <meta name="description" content="Razuberri is a Raspberry Pi cluster manager that allows you to easily manage and monitor all nodes of your cluster. Receive updates when things go wrong, or get warnings before they do." />
      <meta name="keywords" content="raspberry pi, cluster, manager, monitor, monitoring, cluster manager, raspberry pi cluster, raspberry pi cluster manager, raspberry pi cluster monitor, raspberry pi cluster monitoring, raspberry pi cluster manager monitor, raspberry pi cluster manager monitoring, raspberry pi cluster manager monitor, raspberry pi cluster manager monitoring" />
      <meta name="author" content="Nico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Razuberri - Your Pi Manager" />
      <meta property="og:description" content="Razuberri is a Raspberry Pi cluster manager that allows you to easily manage and monitor all nodes of your cluster. Receive updates when things go wrong, or get warnings before they do." />
    </Head>
    <Component {...pageProps} />
  </>
}
