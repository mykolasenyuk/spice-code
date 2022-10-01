import type { NextPage } from 'next'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isHeaderListOpen, setIsHeaderListOpen] = useState<boolean>(false)

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Header isHeaderListOpen={isHeaderListOpen} setIsHeaderListOpen={setIsHeaderListOpen} />
      <Footer isHeaderListOpen={isHeaderListOpen} />
    </div>
  )
}

export default Home
