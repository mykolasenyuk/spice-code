import Image from 'next/image'
import globe from '../../../public/images/aboutUsImg.png'
import { aboutUsDescriptions } from '../../data'
import classes from './styles.module.scss'

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <h1 className={classes.title}>About Us</h1>
        <ul className={classes.aboutUsInfo}>
          <li className={classes.description}>
            <p key={aboutUsDescriptions[0].id}>
              {aboutUsDescriptions[0].description}
            </p>
          </li>
          <li className={classes.description}>
            <p key={aboutUsDescriptions[1].id}>
              {aboutUsDescriptions[1].description}
              <a
                className={classes.socialLink}
                href='https://mendee.digital/services'
              >
                here.
              </a>
            </p>
          </li>
          <li className={classes.description}>
            <p key={aboutUsDescriptions[2].id}>
              {aboutUsDescriptions[2].description}
            </p>
          </li>
          <li className={classes.description}>
            <p key={aboutUsDescriptions[3].id}>
              {aboutUsDescriptions[3].description}
              <a
                className={classes.socialLink}
                href='https://mendee.digital/contact-us'
              >
                here.
              </a>
            </p>
          </li>
        </ul>
        <div className={classes.rightSide}>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              width={500}
              height={500}
              src={globe}
              alt='about us picture'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
