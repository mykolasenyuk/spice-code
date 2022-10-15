import { FC, ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Background from '../background'
import { BluredBack } from '../bluredBackground'
import classes from './styles.module.scss'

interface Props {
  description: string
  onClose: () => void
  children: ReactNode
}

const Modal: FC<Props> = ({ onClose, description, children }) => {
  //   const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    // setIsBrowser(true)

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return
    }
    onClose()
  }

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return
    }
    onClose()
  }
  const onBackBtnClick = () => {
    onClose()
  }

  return ReactDOM.createPortal(
    <div
      className={classes.overlay}
      onClick={handleBackdropClick}
      role='presentation'
    >
      <Background>
        <BluredBack>
          <div className={classes.modal}>
            <div className={classes.backBtn} onClick={onBackBtnClick}>
              <svg className={classes.svgBtn}>
                <use href={`/sprite.svg#icon-mail-arrow`} />
              </svg>
            </div>
            <h2 className={classes.description}>{description}</h2>
          </div>
        </BluredBack>
      </Background>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
