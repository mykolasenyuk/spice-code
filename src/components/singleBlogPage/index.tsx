import Image from 'next/image'
import en from '../../../public/languages/en'
import classes from './styles.module.scss'
import { Sprite } from '../sprite'
import { AppLink } from '../appLink'
import { useRouter } from 'next/router'

const SingleBlogPage = () => {
  const {
    query: { img, imgAlt, title, info, description1, descrImg },
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
          {title || en.alexStory.toLowerCase()}
        </h2>
        <div className={classes['single-blog__img']}>
          <Image
            className={classes['single-blog__img-container']}
            alt='desc'
            src={img as string}
            width={640}
            height={330}
          />
        </div>
        <h2
          className={`${classes['single-blog__title']} ${classes['single-blog__title_laptop']}`}
        >
          {title || en.alexStory.toLowerCase()}
        </h2>
        <p className={classes['single-blog__description']}>
          {info || en.alexStoryDescr}
        </p>
        <div>
          {descrImg && (
            <Image
              // className={classes['single-blog__img-container']}
              alt='descImg'
              src={descrImg as string}
              width={640}
              height={330}
            />
          )}
        </div>

        {description1 && (
          <p className={classes['single-blog__description2']}>{description1}</p>
        )}
      </div>
    </div>
  )
}

export default SingleBlogPage
