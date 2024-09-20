import { useRouter } from 'next/router'
import { CSSProperties } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OpenSvg from '../../../public/icons/open'
import { menuList } from '../../data'
import { useDeviceWidth } from '../../hooks/useDeviceWidth'
import { changeHeaderListStatus } from '../../redux/headerListSlice'
import { RootState } from '../../redux/store'
import { AppLink } from '../appLink'
import styles from './styles.module.scss'

const HeaderList = () => {
  const {
    headerList: { isHeaderListOpen },
    darkMode: { isDarkModeEnabled },
  } = useSelector(state => state as RootState)
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const { isSmallDevice } = useDeviceWidth()

  const listItemStyle = (i: number, href: string) => {
    const listItemCursorStyle: CSSProperties = {
      cursor: !isHeaderListOpen ? 'default' : 'pointer',
    }
    const marginRightStyle = isHeaderListOpen && !isSmallDevice ? '32px' : 0

    const outputStyle: CSSProperties = {
      marginRight: menuList.length - 1 === i ? marginRightStyle : 'inherit',
      ...listItemCursorStyle,
    }

    if (pathname === href) {
      outputStyle.color = '#fae746'
    }

    return outputStyle
  }

  return (
    <div
      className={`${styles.header__content} ${
        isDarkModeEnabled ? styles['header__content_dark-mode'] : ''
      }`}>
      <ul
        style={{
          gap: `${isHeaderListOpen ? 32 : 5}px`,
          opacity: isHeaderListOpen ? 1 : 0,
          visibility: isHeaderListOpen ? 'visible' : 'hidden',
        }}
        className={styles.header__list}>
        {menuList.map((item, i) => (
          <AppLink
            href={item.href}
            key={item.id}
            style={{ zIndex: isHeaderListOpen ? 'auto' : '-100' }}
            onClick={() => isSmallDevice && dispatch(changeHeaderListStatus())}>
            <li
              style={listItemStyle(i, item.href)}
              className={`${styles['header__list-item']} ${
                isDarkModeEnabled ? styles['header__list-item_dark-mode'] : ''
              }`}>
              {item.text}
            </li>
          </AppLink>
        ))}
      </ul>
      <div
        onClick={() => dispatch(changeHeaderListStatus())}
        className={styles.header__btn}>
        <OpenSvg
          className={isHeaderListOpen ? styles.header__btn_close : ''}
          lineTag={isDarkModeEnabled ? { stroke: 'white' } : {}}
        />
      </div>
    </div>
  )
}

export { HeaderList }
