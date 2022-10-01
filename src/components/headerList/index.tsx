import { CSSProperties, Dispatch, FC, memo, SetStateAction, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import OpenSvg from '../../../public/icons/open'
import en from '../../../public/languages/en'
import styles from './styles.module.scss'

const list = [
  { text: en.aboutUs, id: uuid() },
  { text: en.services, id: uuid() },
  { text: en.contactUs, id: uuid() },
  { text: en.blog, id: uuid() },
]

interface Props {
  isDarkMode: boolean
  isHeaderListOpen: boolean
  setIsHeaderListOpen: Dispatch<SetStateAction<boolean>>
}

const Component: FC<Props> = ({
  isDarkMode,
  isHeaderListOpen: isListOpen,
  setIsHeaderListOpen: setIsListOpen,
}) => {
  const maxPhoneWidth = 769
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false)
  const listItemCursorStyle: CSSProperties = { cursor: !isListOpen ? 'default' : 'pointer' }

  const listItemStyle = (i: number) =>
    list.length - 1 === i
      ? {
          marginRight: isListOpen && !isSmallDevice ? '32px' : 0,
          ...listItemCursorStyle,
        }
      : listItemCursorStyle

  useEffect(() => {
    setIsSmallDevice(maxPhoneWidth > window.innerWidth)
  }, [])

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsSmallDevice(maxPhoneWidth > window.innerWidth)
    }
    window.addEventListener('resize', checkWindowWidth)

    return () => window.addEventListener('resize', checkWindowWidth)
  }, [])

  return (
    <div
      className={`${styles.header__content} ${
        isDarkMode ? styles['header__content_dark-mode'] : ''
      }`}>
      <ul
        style={{ gap: `${isListOpen ? 32 : 5}px`, opacity: isListOpen ? 1 : 0 }}
        className={styles.header__list}>
        {list.map((item, i) => (
          <li
            key={item.id}
            style={listItemStyle(i)}
            className={`${styles['header__list-item']} ${
              isDarkMode ? styles['header__list-item_dark-mode'] : ''
            }`}>
            {item.text}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsListOpen(!isListOpen)}
        className={`${styles.header__btn} ${isListOpen ? styles.header__btn_close : ''}`}>
        <OpenSvg lineTag={isDarkMode ? { stroke: 'white' } : {}} />
      </div>
    </div>
  )
}

const HeaderList = memo(Component)

export { HeaderList }
