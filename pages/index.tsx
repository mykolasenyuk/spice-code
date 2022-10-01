import type { NextPage } from 'next'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { useState } from 'react'
import Background from '../src/components/background'
import Hero from '../src/components/hero'

const Home: NextPage = () => {
  const [isHeaderListOpen, setIsHeaderListOpen] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('normal')

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header
        isHeaderListOpen={isHeaderListOpen}
        setIsHeaderListOpen={setIsHeaderListOpen}
      />
      <Background bgColor={bgColor}>
        {isHeaderListOpen ? (
          ''
        ) : (
          <Hero bgColor={bgColor} isHeaderListOpen={isHeaderListOpen} />
        )}
        {/* <Hero bgColor={bgColor} isHeaderListOpen={isHeaderListOpen} /> */}
      </Background>
      <Footer isHeaderListOpen={isHeaderListOpen} />
    </div>
  )
}

export default Home
