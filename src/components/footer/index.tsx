import React from 'react'
import { useSelector } from 'react-redux'
import en from '../../../public/languages/en'
import { useDeviceWidth } from '../../hooks/useDeviceWidth'
import { RootState } from '../../redux/store'
import styles from './styles.module.scss'
import classes from '@/components/services/styles.module.scss'

const Footer = () => {
  const {
    headerList: { isHeaderListOpen },
    darkMode: { isDarkModeEnabled },
  } = useSelector(state => state as RootState)
  const { isSmallDevice } = useDeviceWidth()

  const colorByDarkMode = isDarkModeEnabled ? '#fff' : '#ec9613'
  const borderColorByDarkMode = (px: number = 2) =>
    `${px}px solid ${colorByDarkMode}`

  return (
    <footer
      // style={{
      //   color: colorByDarkMode,
      //   borderTop: borderColorByDarkMode(),
      //   transform: `translateY(${isHeaderListOpen ? '100%' : 0})`,
      // }}
      className={styles.footer}>
      <div className={styles.footer__content}>
        {/*<div className={`${styles.footer__block} ${styles.footer__info}`}>*/}
        {/*  {en.footerBigText}*/}
        {/*</div>*/}
        <div
          // style={{
          //   borderRight: borderColorByDarkMode(),
          //   borderLeft: borderColorByDarkMode(isSmallDevice ? 0 : undefined),
          // }}
          className={`${styles.footer__block} ${styles.footer__social}`}>
          <h6 className={styles.footer__title}>{en.socialMedia}</h6>
          <ul className={styles.footer__socialList}>
            <li>
              <a className={styles.socialLink} target='blank' href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-linkedin`} />
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.socialLink} target='blank' href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-facebook`} />
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.socialLink} target='blank' href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-instagram`} />
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.socialLink} target='blank' href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-github`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__block} ${styles.footer__social}`}>
          <h6 className={styles.footer__title}>{en.getAQuote}</h6>
          <ul className={styles.footer__list}>
            <li>
              <a
                className={styles.socialLink}
                target='blank'
                href='mailto:spicecode.solution@gmail.com'>
                <svg className={styles.socialLink__icon}>
                  <use href={`/spiceSprite.svg#icon-send`} />
                </svg>
                {/*{en.email}*/}
                <span className={styles.socialLink__span}>spiceCode.email</span>
              </a>
            </li>
            <li>
              {/*<a className={styles.socialLink} href='tel:+447570944705'>*/}
              {/*  {en.phoneNumber1}*/}
              {/*</a>*/}
              <a className={styles.socialLink} href='tel:+380678872500'>
                <svg className={styles.socialLink__icon}>
                  <use href={`/spiceSprite.svg#icon-phone`} />
                </svg>
                <span className={styles.socialLink__span}>{en.phoneNumber}</span>


              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
