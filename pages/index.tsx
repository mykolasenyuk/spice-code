import type { NextPage } from 'next'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Hero from '../src/components/hero'
import { RootState } from '../src/redux/store'
import PageWrapper from '../src/components/pageWrapper'

const Home: NextPage = () => {
  const { isHeaderListOpen } = useSelector((state: RootState) => state.headerList)
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('normal')

  return (
    <PageWrapper>
      <Hero bgColor={bgColor} isHeaderListOpen={isHeaderListOpen} />
    </PageWrapper>
  )
}

export default Home
