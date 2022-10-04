import type { NextPage } from 'next'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../src/redux/store'
import PageWrapper from '../src/components/pageWrapper'
import Contacts from '../src/components/contactUS'

const ContactUs: NextPage = () => {
  const { isHeaderListOpen } = useSelector(
    (state: RootState) => state.headerList,
  )
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('normal')

  return (
    <PageWrapper>
      <Contacts />
    </PageWrapper>
  )
}

export default ContactUs
