import BlogCard from '../blogCard'
import { BluredBack } from '../bluredBackground'
import en from '../../../public/languages/en'
import styles from './styles.module.scss'
import { cardList } from '../../data'

const BlogPage = () => {
  return (
    <div className={styles.blog}>
      <h1 className={styles.blog__title}>{en.socialImpactInitiatives}</h1>
      <p className={styles.blog__description}>{en.blogDescription}</p>
      <div className={styles.blog__cards}>
          {cardList.map(card => (
            <BlogCard
              key={card.id}
              imgSrc={card.imgSrc}
              imgAlt={card.alt}
              info={card.description}
              title={card.title}
            />
          ))}
        </div>
      </div>
  )
}

export { BlogPage }
