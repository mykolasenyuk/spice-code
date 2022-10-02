import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Background from '../background'
import { Footer } from '../footer'
import { Header } from '../header'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ children }) => {
  const { isHeaderListOpen } = useSelector((state: RootState) => state.headerList)

  return (
    <div className={styles.wrapper}>
      <Header />
      <Background>{!isHeaderListOpen && children}</Background>
      <Footer />
    </div>
  )
}

export default PageWrapper
