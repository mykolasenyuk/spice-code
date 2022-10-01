import React from 'react'
import type { NextPage } from 'next'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { useState } from 'react'
import Background from '../src/components/background'

const AboutUs = () => {
  const [isHeaderListOpen, setIsHeaderListOpen] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('dark')
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
        {isHeaderListOpen ? '' : <AboutUs />}
      </Background>
      <Footer isHeaderListOpen={isHeaderListOpen} />
    </div>
  )
}

export default AboutUs
