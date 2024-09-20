import { HeaderList } from '../headerList'
import LogoSvg from '../../../public/icons/logo'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { AppLink } from '../appLink'
import Image from 'next/image'

const Header = () => {
  const { isDarkModeEnabled } = useSelector(
    (state: RootState) => state.darkMode
  )

  return (
    <header className={styles.header}>
      <AppLink href='/'>
        <div className={styles.logo}>
          <LogoSvg

            svgTag={{ style: { cursor: 'pointer' } }}
            pathTag={isDarkModeEnabled ? { fill: '#fff' } : {}}
          />
        </div>


      </AppLink>
      <HeaderList />
    </header>
  )
}

export { Header }
