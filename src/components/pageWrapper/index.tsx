import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDeviceWidth } from '../../hooks/useDeviceWidth'
import { RootState } from '../../redux/store'
import Background from '../background'
import { Footer } from '../footer'
import { Header } from '../header'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ children }) => {
  const [blur, setBlur] = useState<boolean>(false)
  const { isHeaderListOpen } = useSelector(
    (state: RootState) => state.headerList
  )
  const { isSmallDevice } = useDeviceWidth()

  const isShowChildren = () => {
    if (!isHeaderListOpen) {
      return children
    }
    return isSmallDevice ? null : children
  }

  useEffect(() => {
    setBlur(!(window.location.pathname === '/'))
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    if (isHeaderListOpen && isSmallDevice) {
      body.classList.add(styles['wrapper_small-menu-open'])
    } else {
      body.classList.remove(styles['wrapper_small-menu-open'])
    }
  }, [isHeaderListOpen, isSmallDevice])

  return (
    <>
      <div className={blur ? styles.wrapper__blur : ''}></div>
      <div className={styles.wrapper}>
        <Header />
        <Background>
          <div>{isShowChildren()}</div>
        </Background>
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper
