import { useEffect, useState } from 'react'
import Background from '../src/components/background'
import { About } from '../src/components/aboutUs'
import { BluredBack } from '../src/components/bluredBackground'

import { useDispatch, useSelector } from 'react-redux'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'
import PageWrapper from '../src/components/pageWrapper'
import OurServices from '../src/components/services'

const AboutUs = () => {
  const darkMode = true
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  return (
    <PageWrapper>
      <BluredBack>
        <OurServices />
      </BluredBack>
    </PageWrapper>
  )
}

export default AboutUs
