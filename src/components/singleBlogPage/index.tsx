import Image from 'next/image'
import laptopImg from '../../../public/images/laptop.png'
import en from '../../../public/languages/en'
import classes from './styles.module.scss'
import { Sprite } from '../sprite'
import { AppLink } from '../appLink'
import { useRouter } from 'next/router'

const SingleBlogPage = () => {
  const {
    query: { imgAlt, title, info },
  } = useRouter()

  return (
    <div className={classes['single-blog']}>
      <AppLink href='/blog'>
        <div className={classes.backBtn}>
          <svg className={classes.svgBtn}>
            <use href={`/sprite.svg#icon-mail-arrow`} />
          </svg>
        </div>
      </AppLink>
      <div className={classes['single-blog__container']}>
        <h2
          className={`${classes['single-blog__title']} ${classes['single-blog__title_phone']}`}
        >
          {title || en.codeYourFuture.toLowerCase()}
        </h2>
        <div className={classes['single-blog__img']}>
          <Image
            className={classes['single-blog__img-container']}
            alt={(imgAlt as string) || 'Laptop'}
            src={laptopImg}
          />
        </div>
        <h2
          className={`${classes['single-blog__title']} ${classes['single-blog__title_laptop']}`}
        >
          {title || en.codeYourFuture.toLowerCase()}
        </h2>
        <p className={classes['single-blog__description']}>
          {info || en.codeYourFutureInfo}
        </p>
      </div>
    </div>
  )
}

export default SingleBlogPage
