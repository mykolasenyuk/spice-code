import { HeaderList } from '../headerList'
import LogoSvg from '../../../public/icons/logo'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Header = () => {
  const { isDarkModeEnabled } = useSelector((state: RootState) => state.darkMode)

  return (
    <div
      style={{ backgroundColor: isDarkModeEnabled ? '#202124' : 'transparent' }}
      className={styles.header}>
      <LogoSvg
        svgTag={{ style: { cursor: 'pointer' } }}
        pathTag={isDarkModeEnabled ? { fill: '#fff' } : {}}
      />
      <HeaderList />
    </div>
  )
}

export { Header }
