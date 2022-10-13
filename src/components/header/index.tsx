import { HeaderList } from '../headerList'
import LogoSvg from '../../../public/icons/logo'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { AppLink } from '../appLink'

const Header = () => {
  const { isDarkModeEnabled } = useSelector(
    (state: RootState) => state.darkMode
  )

  return (
    <header className={styles.header}>
      <AppLink href='/'>
        <LogoSvg
          svgTag={{ style: { cursor: 'pointer' } }}
          pathTag={isDarkModeEnabled ? { fill: '#fff' } : {}}
        />
      </AppLink>
      <HeaderList />
    </header>
  )
}

export { Header }
