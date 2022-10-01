import React from 'react'
import type { NextPage } from 'next'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { useState } from 'react'
import Background from '../src/components/background'
import { About } from '../src/components/aboutUs'
import { BluredBack } from '../src/components/bluredBackground'

const AboutUs = () => {
  const [isHeaderListOpen, setIsHeaderListOpen] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('dark')
  const isDarkMode = true

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
        <BluredBack>{isHeaderListOpen ? '' : <About />}</BluredBack>
      </Background>
      <Footer isHeaderListOpen={isHeaderListOpen} />
    </div>
  )
}

export default AboutUs
