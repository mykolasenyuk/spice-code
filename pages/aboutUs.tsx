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
import PageWrapper from '../src/components/pageWrapper'

const AboutUs = () => {
  const darkMode = true
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  )
}

export default AboutUs
