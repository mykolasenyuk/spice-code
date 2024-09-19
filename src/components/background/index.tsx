import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import classes from './styles.module.scss'

interface Props {
  children: ReactNode
}

const Background: FC<Props> = ({ children }) => {
  const { isDarkModeEnabled } = useSelector(
    (state: RootState) => state.darkMode
  )

  const num = 12
  const arr = Array.from(Array(num).keys())

  return (
    <main className={classes.container}>
      <div className={classes.area}>
        <ul
          className={isDarkModeEnabled ? classes.circlesDark : classes.circles}>
          {arr.map(el => (
            <li key={el}></li>
          ))}
        </ul>
      </div>
      {children}
    </main>
  )
}

export default Background
