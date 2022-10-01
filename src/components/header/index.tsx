import { HeaderList } from '../headerList'
import LogoSvg from '../../../public/icons/logo'
import styles from './styles.module.scss'
import { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  isHeaderListOpen: boolean
  setIsHeaderListOpen: Dispatch<SetStateAction<boolean>>
}

const Header: FC<Props> = ({ isHeaderListOpen, setIsHeaderListOpen }) => {
  const isDarkMode = false

  return (
    <div style={{ backgroundColor: isDarkMode ? '#202124' : '#fff' }} className={styles.header}>
      <LogoSvg
        svgTag={{ style: { cursor: 'pointer' } }}
        pathTag={isDarkMode ? { fill: '#fff' } : {}}
      />
      <HeaderList
        isDarkMode={isDarkMode}
        isHeaderListOpen={isHeaderListOpen}
        setIsHeaderListOpen={setIsHeaderListOpen}
      />
    </div>
  )
}

export { Header }
