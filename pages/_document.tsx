import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {
  return (
    <Html>
      <title>SpiceCode.Solution</title>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-Y9MEX7RHSS'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y9MEX7RHSS');
        `}
        </Script>
      </Head>
      <body style={{ overflowX: 'hidden' }}>
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}

export default Document
