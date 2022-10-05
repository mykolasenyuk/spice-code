import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { useState } from 'react'
import Background from '../src/components/background'
import { About } from '../src/components/aboutUs'
import { BluredBack } from '../src/components/bluredBackground'

import { useDispatch, useSelector } from 'react-redux'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

const AboutUs = () => {
  const [isHeaderListOpen, setIsHeaderListOpen] = useState<boolean>(false)
  const darkMode = true
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />

      <Background>
        <BluredBack>{isHeaderListOpen ? '' : <About />}</BluredBack>
      </Background>
    </div>
  )
}

export default AboutUs
