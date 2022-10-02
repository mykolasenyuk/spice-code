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
  const { isDarkModeEnabled } = useSelector((state: RootState) => state.darkMode)

  // const testColor = () => {
  //   if (bgColor === 'normal') {
  //     return s.circles
  //   }
  //   if (bgColor === 'dark') {
  //     return s.circlesDark
  //   }
  //   return s.circlesLight
  // }

  return (
    <>
      <div className={s.area}>
        <ul className={isDarkModeEnabled ? s.circlesDark : s.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={s.container}>{children}</div>
    </>
  )
}

export default Background
