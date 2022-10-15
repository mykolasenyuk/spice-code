import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { AppLink } from '../appLink'
import blogPageClasses from '../blogPage/styles.module.scss'
import { Sprite } from '../sprite'
import classes from './styles.module.scss'

interface Props {
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  info: string
}

const BlogCard: FC<Props> = ({ imgSrc, imgAlt, title, info }) => {
  return (
    <div className={classes.card}>
      <Image className={classes.card__img} src={imgSrc} alt={imgAlt} />
      <h3 className={classes.card__title}>{title}</h3>
      <p className={blogPageClasses.blog__description}>{info}</p>
      <AppLink href='/single-blog'>
        <Sprite
          id='icon-arrow-btn'
          width={59.04}
          height={28.69}
          className={classes.card__btn}
        />
      </AppLink>
    </div>
  )
}

export default BlogCard
