import React from 'react'
import { useSelector } from 'react-redux'
import en from '../../../public/languages/en'
import { useDeviceWidth } from '../../hooks/useDeviceWidth'
import { RootState } from '../../redux/store'
import styles from './styles.module.scss'

const Footer = () => {
  const {
    headerList: { isHeaderListOpen },
    darkMode: { isDarkModeEnabled },
  } = useSelector(state => state as RootState)
  const { isSmallDevice } = useDeviceWidth()

  const colorByDarkMode = isDarkModeEnabled ? '#fff' : '#202124'
  const borderColorByDarkMode = (px: number = 0.5) =>
    `${px}px solid ${colorByDarkMode}`

  return (
    <footer
      style={{
        color: colorByDarkMode,
        borderTop: borderColorByDarkMode(),
        transform: `translateY(${isHeaderListOpen ? '100%' : 0})`,
      }}
      className={styles.footer}
    >
      <div className={styles.footer__content}>
        <div className={`${styles.footer__block} ${styles.footer__info}`}>
          {en.footerBigText}
        </div>
        <div
          style={{
            borderRight: borderColorByDarkMode(),
            borderLeft: borderColorByDarkMode(isSmallDevice ? 0 : undefined),
          }}
          className={`${styles.footer__block} ${styles.footer__social}`}
        >
          <h6 className={styles.footer__title}>{en.socialMedia}</h6>
          <ul className={styles.footer__list}>
            <li>
              <a
                className={styles.socialLink}
                href='https://www.linkedin.com/company/mendee/'
              >
                {en.linkedin}
              </a>
            </li>
            <li>
              {' '}
              <a
                className={styles.socialLink}
                href='https://www.instagram.com/mendee_digital/'
              >
                {en.instagram}
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__block} ${styles.footer__social}`}>
          <h6 className={styles.footer__title}>{en.getAQuote}</h6>
          <ul className={styles.footer__list}>
            <li>{en.mendeeEmail}</li>
            <li>{en.mendeePhoneNumber}</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
