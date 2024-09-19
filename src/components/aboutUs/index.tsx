import Image from 'next/image'
import globe from '../../../public/images/aboutUsImg.webp'
import { aboutUsDescriptions, aboutUsDescriptionWithSub } from '../../data'
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
            <span className={classes.socialLink}> Vision:</span>
            <p key={aboutUsDescriptions[1].id}>
              {aboutUsDescriptions[1].description}
            </p>
          </li>
          <li className={classes.description}>
            <span className={classes.socialLink}>Specialize:</span>

            <p key={aboutUsDescriptions[2].id}>
              {aboutUsDescriptions[2].description}
            </p>
          </li>

        </ul>
        <div className={classes.rightSide}>
          <div className={classes.imageContainer}>
            <picture>
              <source
                className={classes.image}
                srcSet='images/planet.png'
                type='image/webp'
              />
              <img
                className={classes.image}
                src='/images/planet.png'
                alt='about us picture'
              />
            </picture>
            {/* <Image
              className={classes.image}
              width={500}
              height={500}
              src={globe}
              alt='about us picture'
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
