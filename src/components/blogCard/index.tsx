import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { AppLink } from '../appLink'
import blogPageClasses from '../blogPage/styles.module.scss'
import classes from './styles.module.scss'

interface Props {
  id: string
  imgSrc: StaticImageData
  title: string
  info: string
}

const BlogCard: FC<Props> = ({ id, imgSrc, title, info }) => {
  return (
    <div className={classes.card}>
      <Image
        className={classes.card__img}
        src={imgSrc}
        alt={title}
        width={316}
        height={200}
      />
      <h3 className={classes.card__title}>
        {title.length > 40 ? title.slice(0, 40).trim() + '...' : title}
      </h3>
      <p
        className={`${blogPageClasses.blog__description} ${classes.card__description}`}>
        {info.length > 120 ? info.slice(0, 120).trim() + '...' : info}
      </p>
      <AppLink href={`/blog/${id}`}>
        <div className={classes.backBtn}>
          <svg className={classes.svgBtn}>
            <use href={`/sprite.svg#icon-mail-arrow`} />
          </svg>
        </div>
      </AppLink>
    </div>
  )
}

export default BlogCard
