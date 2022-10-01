import React, { FC } from 'react'
import en from '../../../public/languages/en'
import styles from './styles.module.scss'

interface Props {
  isHeaderListOpen: boolean
}

const Footer: FC<Props> = ({ isHeaderListOpen }) => {
  const darkMode = false
  const colorByDarkMode = darkMode ? '#fff' : '#202124'
  const borderColorByDarkMode = `0.5px solid ${colorByDarkMode}`

  return (
    <footer
      style={{
        color: colorByDarkMode,
        borderTop: borderColorByDarkMode,
        transform: `translateY(${isHeaderListOpen ? '100%' : 0})`,
      }}
      className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={`${styles.footer__block} ${styles.footer__info}`}>{en.footerBigText}</div>
        <div
          style={{ borderRight: borderColorByDarkMode, borderLeft: borderColorByDarkMode }}
          className={`${styles.footer__block} ${styles.footer__social}`}>
          <h6 className={styles.footer__title}>{en.socialMedia}</h6>
          <ul className={styles.footer__list}>
            <li>{en.linkedin}</li>
            <li>{en.instagram}</li>
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
