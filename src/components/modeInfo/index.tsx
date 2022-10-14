import { FC } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  children: JSX.Element
}

const ModeInfo: FC<Props> = ({ children }) => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  //   dispatch(changeDarkModeStatus(darkMode))
  // }, [dispatch])

  return children
}

export default ModeInfo
