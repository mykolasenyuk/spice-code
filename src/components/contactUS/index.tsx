import Image from 'next/image'
import s from './styles.module.scss'
import cubes from '../../../public/images/3d rectangles cube.png'

const Contacts = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Contact</h1>
      <ul className={s.contactsWrapper}>
        <li>
          <h3 className={s.contactsTitle}>
            Subscribe for <br />
            monthly newsletter
          </h3>
          <div className={s.socialInput}>
            <form className={s.inputForm}>
              <input
                className={s.input}
                type="email"
                placeholder="hello@mendee.digital"
              />

              <div>
                <svg className={s.inputBtn}>
                  <use href={`/sprite.svg#icon-mail-arrow`} />
                </svg>
              </div>
            </form>
          </div>
        </li>
        <li>
          <h3 className={s.contactsTitle}> Social Media</h3>
          <ul className={s.linkWrapper}>
            <li className={s.socialLink}>linkedin</li>
            <li className={s.socialLink}>instagram</li>
          </ul>
        </li>
        <li>
          <h3 className={s.contactsTitle}>Get a quote</h3>
          <ul className={s.linkWrapper}>
            <li className={s.socialLink}>Hello@mendee.digital</li>
            <li className={s.socialLink}>+44(0)77777777</li>
          </ul>
        </li>
      </ul>
      <div className={s.imageContainer}>
        <Image className={s.image} src={cubes} alt="cubes" />
      </div>
    </div>
  )
}

export default Contacts
