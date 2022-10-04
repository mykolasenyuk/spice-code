import { FC } from 'react'
import s from './styles.module.scss'

// interface Props {
//   bgColor: 'normal' | 'dark'
//   isHeaderListOpen: boolean
// }
const Contacts = () => {
  return (
    <div className={s.container}>
      <h1>Contact us</h1>
      <ul className={s.contactsWrapper}>
        <li>
          <h3 className={s.contactsTitle}> Subscribe for monthly newsletter</h3>
          <div>
            <form>
              <input />
              <button>Go</button>
            </form>
          </div>
        </li>
        <li>
          <h3 className={s.contactsTitle}> Social Media</h3>
          <div></div>
        </li>
        <li>
          <h3 className={s.contactsTitle}>Get a quote</h3>
          <div></div>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
