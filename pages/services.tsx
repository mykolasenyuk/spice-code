import { useEffect } from 'react'
import { BluredBack } from '../src/components/bluredBackground'

import { useDispatch } from 'react-redux'
import PageWrapper from '../src/components/pageWrapper'
import OurServices from '../src/components/services'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

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
