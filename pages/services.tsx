import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import PageWrapper from '../src/components/pageWrapper'
import OurServices from '../src/components/services'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

const AboutUs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(true))
  }, [dispatch])

  return (
    <PageWrapper>
      <OurServices />
    </PageWrapper>
  )
}

export default AboutUs
