import { useEffect, useState } from 'react'

const useDeviceWidth = () => {
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false)
  const maxPhoneWidth = 769

  useEffect(() => {
    setIsSmallDevice(maxPhoneWidth > window.innerWidth)
  }, [])

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsSmallDevice(maxPhoneWidth > window.innerWidth)
    }
    window.addEventListener('resize', checkWindowWidth)

    return () => window.addEventListener('resize', checkWindowWidth)
  }, [])

  return { isSmallDevice, maxPhoneWidth }
}

export { useDeviceWidth }
