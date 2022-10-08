import React, { FC, ReactNode, useState } from 'react'
import { useEffect } from 'react'
// import { createPortal } from 'react-dom'
import ReactDOM from 'react-dom'
import s from './styles.module.scss'
import Background from '../background'
import { BluredBack } from '../bluredBackground'

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

  const handleKeyPress = (e) => {
    if (e.code !== 'Escape') {
      return
    }
    onClose()
  }

  const handleBackdropClick = (e) => {
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
      className={s.overlay}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <Background>
        <BluredBack>
          <div className={s.modal}>
            <div className={s.backBtn} onClick={onBackBtnClick}>
              <svg className={s.svgBtn}>
                <use href={`/sprite.svg#icon-mail-arrow`} />
              </svg>
            </div>
            <h2 className={s.description}>{description}</h2>
          </div>
        </BluredBack>
      </Background>
    </div>,
    document.getElementById('modal-root'),
  )
}

export default Modal
