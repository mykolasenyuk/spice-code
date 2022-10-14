import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Contacts from '../src/components/contactUS'
import PageWrapper from '../src/components/pageWrapper'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

const ContactUs: NextPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(true))
  }, [dispatch])

  return (
    <PageWrapper>
      <Contacts />
    </PageWrapper>
  )
}

export default ContactUs
