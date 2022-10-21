import Image from 'next/image'
import laptopImg from '../../../public/images/laptop.png'
import en from '../../../public/languages/en'
import classes from './styles.module.scss'
import { Sprite } from '../sprite'
import { AppLink } from '../appLink'

const SingleBlogPage = () => {
  return (
    <div className={classes['single-blog']}>
      <AppLink href='/blog'>
        {/* <div className={classes['single-blog__go-back']}> */}
        <div className={classes.backBtn}>
          <svg className={classes.svgBtn}>
            <use href={`/sprite.svg#icon-mail-arrow`} />
          </svg>
        </div>
        {/* <Sprite id={'icon-arrow-back'} width={15.22} height={11.28} /> */}
        {/* </div> */}
      </AppLink>
      <div className={classes['single-blog__container']}>
        <h2
          className={`${classes['single-blog__title']} ${classes['single-blog__title_phone']}`}
        >
          {en.codeYourFuture.toLowerCase()}
        </h2>
        <div className={classes['single-blog__img']}>
          <Image
            className={classes['single-blog__img-container']}
            alt='Laptop'
            src={laptopImg}
          />
        </div>
        <h2
          className={`${classes['single-blog__title']} ${classes['single-blog__title_laptop']}`}
        >
          {en.codeYourFuture.toLowerCase()}
        </h2>
        <p className={classes['single-blog__description']}>
          {en.codeYourFutureInfo}
        </p>
      </div>
    </div>
  )
}

export default SingleBlogPage
