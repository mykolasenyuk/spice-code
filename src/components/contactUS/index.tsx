import Image from 'next/image'
import cubes from '../../../public/images/3d rectangles cube.png'
import en from '../../../public/languages/en'
import classes from './styles.module.scss'

const Contacts = () => {
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
                placeholder='hello@mendee.digital'
              />

              <div>
                <svg className={classes.inputBtn}>
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
                href='https://www.linkedin.com/company/mendee/'
              >
                {en.linkedin}
              </a>
            </li>
            <li className={classes.socialLink}>
              <a
                className={classes.socialLink}
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
                href='mailto:hello@mendee.digital'
              >
                {en.mendeeEmail}
              </a>
            </li>
            <li className={classes.socialLink}>
              <a className={classes.socialLink} href='tel:+44(0)77777777'>
                {en.mendeePhoneNumber}
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={cubes}
          alt='cubes'
          // width={350}
          // height={300}
        />
      </div>
    </div>
  )
}

export default Contacts
