import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import ModeInfo from '../src/components/modeInfo'
import { store } from '../src/redux/store'
import '../src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ModeInfo>
        <Component {...pageProps} />
      </ModeInfo>
    </Provider>
  )
}

export default MyApp
