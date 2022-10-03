import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeDarkModeStatus } from '../../redux/darkModeSlice'

interface Props {
  children: JSX.Element
}

const ModeInfo: FC<Props> = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  return children
}

export default ModeInfo
