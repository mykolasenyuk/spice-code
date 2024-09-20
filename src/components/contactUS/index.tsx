import Image from 'next/image'
import React, { useState } from 'react'
import cubes from '../../../public/images/3drectangles.webp'
import en from '../../../public/languages/en'
import { addEmail } from '../../../services/api'
import classes from './styles.module.scss'
import styles from '@/components/footer/styles.module.scss'

const Contacts = () => {
  const [email, setEmail] = useState('')

  const handleChange = e => {
    const { value } = e.currentTarget
    setEmail(value)
    console.log(email)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addEmail(email)

    reset()
  }
  const reset = () => {
    setEmail('')
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{en.contactUs}</h1>
      <ul className={classes.contactsWrapper}>
        {/*<li>*/}
        {/*  <h3 className={classes.contactsTitle}>*/}
        {/*    Subscribe for <br />*/}
        {/*    monthly newsletter*/}
        {/*  </h3>*/}
        {/*  <div className={classes.socialInput}>*/}
        {/*    <form className={classes.inputForm}>*/}
        {/*      <input*/}
        {/*        className={classes.input}*/}
        {/*        type='email'*/}
        {/*        value={email}*/}
        {/*        placeholder='hello@mendee.digital'*/}
        {/*        onChange={handleChange}*/}
        {/*      />*/}

        {/*      <div>*/}
        {/*        <svg className={classes.inputBtn} onClick={handleSubmit}>*/}
        {/*          <use href={`/sprite.svg#icon-mail-arrow`} />*/}
        {/*        </svg>*/}
        {/*      </div>*/}
        {/*    </form>*/}
        {/*  </div>*/}
        {/*</li>*/}
        <li>
          <h3 className={classes.contactsTitle}>{en.socialMedia}</h3>
          <ul className={classes.linkWrapper}>
            <li className={classes.socialLink}>
              <a className={classes.socialLink} target='blank' href='https://www.linkedin.com/company/spicecode-solution'>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-linkedin`} />
                </svg>
              </a>
            </li>
            <li className={classes.socialLink}>
              <a className={classes.socialLink} target='blank' href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-facebook`} />
                </svg>
              </a>
            </li>
            <li className={classes.socialLink}>
              <a
                className={classes.socialLink}
                target='blank'
                href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-instagram`} />
                </svg>
              </a>
            </li>
            <li className={classes.socialLink}>
              <a
                className={classes.socialLink}
                target='blank'
                href=''>
                <svg className={styles.socialLink__iconColor}>
                  <use href={`/colorSprite.svg#icon-github`} />
                </svg>
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
                href={`mailto:${en.email}`}>
                send email
                <svg className={classes.socialLink__icon}>
                  <use href={`/spiceSprite.svg#icon-send`} />
                </svg>
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
      {/*<div className={classes.imageContainer}>*/}
      {/*  /!* <Image className={classes.image} src={cubes} alt='cubes' /> *!/*/}
      {/*  <picture>*/}
      {/*    <source*/}
      {/*      className={classes.image}*/}
      {/*      srcSet='/images/3drectangles.webp'*/}
      {/*      type='image/webp'*/}
      {/*    />*/}
      {/*    <img*/}
      {/*      className={classes.image}*/}
      {/*      src='/images/3drectangles.webp'*/}
      {/*      alt='contact us picture'*/}
      {/*    />*/}
      {/*  </picture>*/}
      {/*</div>*/}
    </div>
  )
}

export default Contacts
