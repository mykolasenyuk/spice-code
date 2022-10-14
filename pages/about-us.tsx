import { useEffect } from 'react'
import { About } from '../src/components/aboutUs'

import { useDispatch } from 'react-redux'
import PageWrapper from '../src/components/pageWrapper'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

const AboutUs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(true))
  }, [dispatch])

  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  )
}

export default AboutUs
