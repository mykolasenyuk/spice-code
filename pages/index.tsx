import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../src/components/hero'
import { RootState } from '../src/redux/store'
import PageWrapper from '../src/components/pageWrapper'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

const Home: NextPage = () => {
  const { isHeaderListOpen } = useSelector(
    (state: RootState) => state.headerList,
  )
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('normal')

  const darkMode = false
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  return (
    <PageWrapper>
      <Hero bgColor={bgColor} isHeaderListOpen={isHeaderListOpen} />
    </PageWrapper>
  )
}

export default Home
