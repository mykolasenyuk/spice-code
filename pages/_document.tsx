import { Html, Head, Main, NextScript } from 'next/document'
import { useSelector } from 'react-redux'
import { useDeviceWidth } from '../src/hooks/useDeviceWidth'
import { RootState } from '../src/redux/store'

const Document = () => {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  )
}

export default Document
