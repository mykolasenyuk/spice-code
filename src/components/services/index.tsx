import Image from 'next/image'
import s from './styles.module.scss'
import globe from '../../../public/images/globe1.png'
import { serviceList } from '../../data'
import { ReactNode, useEffect, useState } from 'react'
import Modal from '../modal'
import { useDispatch } from 'react-redux'
import { changeDarkModeStatus } from '../../redux/darkModeSlice'

interface Props {
  children: ReactNode
}

const OurServices = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [description, setDescription] = useState<string>('')

  const darkMode = false
  const dispatch = useDispatch()
  const openModal = descr => {
    setModalIsOpen(true)
    setDescription(descr)
    dispatch(changeDarkModeStatus(darkMode))
  }
  const closeModal = () => {
    setModalIsOpen(false)
    dispatch(changeDarkModeStatus(!darkMode))
  }

  return (
    <div className={s.container}>
      <div className={s.serviceWrapper}>
        <h1 className={s.title}>Services</h1>
        <div className={s.imageContainer}>
          <div className={s.imageWrapper}>
            <Image src={globe} alt='cubes' />
          </div>
        </div>
        <ul className={s.servicesList}>
          {serviceList.map(item => (
            <li
              key={item.id}
              className={s.servicesLink}
              onClick={() => openModal(item.decrs)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      {modalIsOpen && (
        <Modal onClose={closeModal} description={description}>
          {children}
        </Modal>
      )}
    </div>
  )
}

export default OurServices
