import Image from 'next/image'
import classes from './styles.module.scss'
import globe from '../../../public/images/globe1.png'
import { serviceList } from '../../data'
import { FC, ReactNode, useEffect, useState } from 'react'
import Modal from '../modal'
import { useDispatch } from 'react-redux'
import { changeDarkModeStatus } from '../../redux/darkModeSlice'

interface Props {
  children: ReactNode
}

const OurServices: FC<Props> = ({ children }) => {
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
    <div className={classes.container}>
      <div className={classes.serviceWrapper}>
        <h1 className={classes.title}>Services</h1>
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper}>
            <Image src={globe} alt='cubes' />
          </div>
        </div>
        <ul className={classes.servicesList}>
          {serviceList.map(item => (
            <li
              key={item.id}
              className={classes.servicesLink}
              onClick={() => openModal(item.decrs)}>
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
