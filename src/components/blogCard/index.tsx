import { FC } from 'react'
import styles from './styles.module.scss'
import blogPageStyles from '../blogPage/styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Sprite } from '../sprite'

interface Props {
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  info: string
}

const BlogCard: FC<Props> = ({ imgSrc, imgAlt, title, info }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.card__img} src={imgSrc} alt={imgAlt} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={blogPageStyles.blog__description}>{info}</p>
      <Sprite
        id='icon-arrow-btn'
        width={59.04}
        height={28.69}
        className={styles.card__btn}
      />
    </div>
  )
}

export default BlogCard
