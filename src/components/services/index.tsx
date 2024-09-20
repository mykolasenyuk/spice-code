import { FC, ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { serviceList } from '../../data'
import { changeDarkModeStatus } from '../../redux/darkModeSlice'
import Modal from '../modal'
import classes from './styles.module.scss'

interface Props {
  children?: ReactNode
}

const OurServices: FC<Props> = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [description, setDescription] = useState<string>('')

  const darkMode = false
  const dispatch = useDispatch()

  const openModal = (info: string) => {
    setModalIsOpen(true)
    setDescription(info)
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
            {/* <Image src={globe} alt='cubes' /> */}
            <picture>
              <source
                className={classes.image}
                srcSet='/images/services.png'
                type='image/webp'
              />
              <img
                className={classes.image}
                src='/images/services.png'
                alt='cubes'
              />
            </picture>
          </div>
        </div>

        <ul className={classes.servicesList}>
          {serviceList.map(item => (
            <li
              key={item.id}
              className={classes.servicesLink}
              onClick={() => openModal(item.description)}
            >
              <div>
                <svg className={classes.inputBtn}>
                  <use href={`/sprite.svg#icon-plus`} />
                </svg>
              </div>
              <p>{item.text}</p>
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
