import Image from 'next/image'
import { useState } from 'react'
import cubes from '../../../public/images/3d rectangles cube.png'
import en from '../../../public/languages/en'
import classes from './styles.module.scss'

const Contacts = () => {
  const [email, setEmail] = useState('')

  const handleChange = e => {
    const { value } = e.currentTarget
    setEmail(value)
    console.log(email)
  }

  const handleSubmit = e => {
    e.preventDefault()

    reset()
  }
  const reset = () => {
    setEmail('')
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{en.contactUs}</h1>
      <ul className={classes.contactsWrapper}>
        <li>
          <h3 className={classes.contactsTitle}>
            Subscribe for <br />
            monthly newsletter
          </h3>
          <div className={classes.socialInput}>
            <form className={classes.inputForm}>
              <input
                className={classes.input}
                type='email'
                value={email}
                placeholder='hello@mendee.digital'
                onChange={handleChange}
              />

              <div>
                <svg className={classes.inputBtn} onClick={handleSubmit}>
                  <use href={`/sprite.svg#icon-mail-arrow`} />
                </svg>
              </div>
            </form>
          </div>
        </li>
        <li>
          <h3 className={classes.contactsTitle}>{en.socialMedia}</h3>
          <ul className={classes.linkWrapper}>
            <li className={classes.socialLink}>
              <a
                className={classes.socialLink}
                target='blank'
                href='https://www.linkedin.com/company/mendee/'
              >
                {en.linkedin}
              </a>
            </li>
            <li className={classes.socialLink}>
              <a
                className={classes.socialLink}
                target='blank'
                href='https://www.instagram.com/mendee_digital/'
              >
                {en.instagram}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={classes.contactsTitle}>{en.getAQuote}</h3>
          <ul className={classes.linkWrapper}>
            <li className={classes.socialLink}>
              <a
                className={classes.socialLink}
                target='blank'
                href='mailto:hello@mendee.digital'
              >
                {en.mendeeEmail}
              </a>
            </li>
            {/* <li className={classes.socialLink}>
              <a className={classes.socialLink} href='tel:+44(0)77777777'>
                {en.mendeePhoneNumber}
              </a>
            </li> */}
          </ul>
        </li>
      </ul>
      <div className={classes.imageContainer}>
        <Image className={classes.image} src={cubes} alt='cubes' />
      </div>
    </div>
  )
}

export default Contacts
