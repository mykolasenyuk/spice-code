import { CSSProperties } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OpenSvg from '../../../public/icons/open'
import { menuList } from '../../data'
import { useDeviceWidth } from '../../hooks/useDeviceWidth'
import { changeHeaderListStatus } from '../../redux/headerListSlice'
import { RootState } from '../../redux/store'
import styles from './styles.module.scss'

const HeaderList = () => {
  const {
    headerList: { isHeaderListOpen },
    darkMode: { isDarkModeEnabled },
  } = useSelector(state => state as RootState)
  const dispatch = useDispatch()
  const { isSmallDevice } = useDeviceWidth()

  const listItemStyle = (i: number) => {
    const listItemCursorStyle: CSSProperties = {
      cursor: !isHeaderListOpen ? 'default' : 'pointer',
    }
    const marginRightStyle = isHeaderListOpen && !isSmallDevice ? '32px' : 0

    return {
      marginRight: menuList.length - 1 === i ? marginRightStyle : 'inherit',
      ...listItemCursorStyle,
    }
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
        }}
        className={styles.header__list}>
        {menuList.map((item, i) => (
          <li
            key={item.id}
            style={listItemStyle(i)}
            className={`${styles['header__list-item']} ${
              isDarkModeEnabled ? styles['header__list-item_dark-mode'] : ''
            }`}>
            {item.text}
          </li>
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
