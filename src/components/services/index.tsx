import Image from 'next/image'
import s from './styles.module.scss'
import globe from '../../../public/images/globe1.png'
import { serviceList } from '../../data'

const OurServices = () => {
  return (
    <div className={s.container}>
      <div className={s.serviceWrapper}>
        <div className={s.imageContainer}>
          <div className={s.imageWrapper}>
            <Image src={globe} alt="cubes" />
          </div>
        </div>
        <ul className={s.servicesList}>
          {serviceList.map((item) => (
            <li key={item.id} className={s.servicesLink}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OurServices
