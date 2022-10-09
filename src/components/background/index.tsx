import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import s from './styles.module.scss'

interface Props {
  children: ReactNode
  // bgColor: 'normal' | 'dark' | 'light'
  // open: string
}

const Background: FC<Props> = ({ children }) => {
  const { isDarkModeEnabled } = useSelector(
    (state: RootState) => state.darkMode,
  )

  const num = 12
  const arr = Array.from(Array(num).keys())

  return (
    <>
      <div className={s.area}>
        <ul className={isDarkModeEnabled ? s.circlesDark : s.circles}>
          {arr.map((el) => (
            <li key={el}></li>
          ))}
        </ul>
      </div>
      <div className={s.container}>{children}</div>
    </>
  )
}

export default Background
