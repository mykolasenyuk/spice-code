import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { pagesWithFooter } from '../../data'
import { useDeviceWidth } from '../../hooks/useDeviceWidth'
import { RootState } from '../../redux/store'
import Background from '../background'
import { Footer } from '../footer'
import { Header } from '../header'
import classes from './styles.module.scss'

interface Props {
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ children }) => {
  const [blur, setBlur] = useState<boolean>(false)
  const [showFooter, setShowFooter] = useState<boolean>(false)
  const { isHeaderListOpen } = useSelector(
    (state: RootState) => state.headerList
  )
  const { isSmallDevice } = useDeviceWidth()

  const isShowChildren = () => {
    if (!isHeaderListOpen) {
      return children
    }
    return !isSmallDevice && children
  }

  useEffect(() => {
    setBlur(!(location.pathname === '/'))
    setShowFooter(
      pagesWithFooter.some(page => location.pathname === `/${page}`)
    )
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    if (isHeaderListOpen && isSmallDevice) {
      body.classList.add(classes['wrapper_small-menu-open'])
    } else {
      body.classList.remove(classes['wrapper_small-menu-open'])
    }
  }, [isHeaderListOpen, isSmallDevice])

  return (
    <>
      <div className={blur ? classes.wrapper__blur : ''}></div>
      <div className={classes.wrapper}>
        <Header />
        <Background>{isShowChildren()}</Background>
        {showFooter && <Footer />}
      </div>
    </>
  )
}

export default PageWrapper
