/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import s from './styles.module.scss'
import globe from '../../../public/images/globe.png'

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.leftSide}>
        <h1 className={s.title}>About Us</h1>
        <div>
          <p>
            Mendee.Digital is a web development studio with a social impact.
          </p>
          We are an international community who believe that the internet should
          be a place where everyone can contribute and be valued for their
          talents and skills, regardless of their location or circumstances.
        </div>
        <div>
          <p>
            We've got amazing people from the UK, Poland, Ukraine, Turkey and
            Mongolia right now, but we're always looking for more!
          </p>
          <p>
            If you would like to work with us on our mission to bring more
            fairness and opportunity online, please get in touch!
          </p>
        </div>
      </div>

      <div className={s.rightSide}>
        <Image
          className={s.image}
          // layout="responsive"
          width={500}
          height={500}
          src={globe}
          alt="about us picture"
        />
      </div>
    </div>
  )
}

export { About }
