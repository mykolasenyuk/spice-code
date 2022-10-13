import React, { useEffect } from 'react'
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
      <BluredBack>
        <About />
      </BluredBack>
    </PageWrapper>
  )
}

export default AboutUs
