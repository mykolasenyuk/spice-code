import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { AppLink } from '../appLink'
import blogPageClasses from '../blogPage/styles.module.scss'
import classes from './styles.module.scss'

interface Props {
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  info: string
  description1?: string
  descrImg?: string
}

const BlogCard: FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  info,
  description1,
  descrImg,
}) => {
  const img = imgSrc.src
  // const desImg = descrImg.src

  return (
    <div className={classes.card}>
      <Image className={classes.card__img} src={imgSrc} alt={imgAlt} />
      <h3 className={classes.card__title}>{title}</h3>
      <p
        className={`${blogPageClasses.blog__description} ${classes.card__description}`}
      >
        {info.length > 100 ? info.slice(0, 100).trim() + '...' : info}
      </p>
      <AppLink
        href='/single-blog'
        query={{ img, imgAlt, title, info, description1, descrImg }}
      >
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
