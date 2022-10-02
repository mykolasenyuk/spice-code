import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDarkModeStatus } from '../../redux/darkModeSlice'
import { RootState } from '../../redux/store'

interface Props {
  children: JSX.Element
}

const ModeInfo: FC<Props> = ({ children }) => {
  const { isDarkModeEnabled } = useSelector((state: RootState) => state.darkMode)
  const dispatch = useDispatch()

  useEffect(() => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  console.log(isDarkModeEnabled)

  return children
}

export default ModeInfo
