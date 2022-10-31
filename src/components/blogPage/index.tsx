import en from '../../../public/languages/en'
import { cardList } from '../../data'
import BlogCard from '../blogCard'
import classes from './styles.module.scss'

const BlogPage = () => {
  return (
    <div className={classes.blog}>
      <h1 className={classes.blog__title}>{en.socialImpactInitiatives}</h1>
      <p className={classes.blog__description}>{en.blogDescription}</p>
      <div className={classes.blog__cards}>
        {cardList.map(card => (
          <BlogCard
            key={card.id}
            imgSrc={card.imgSrc}
            imgAlt={card.alt}
            info={card.description}
            title={card.title}
            descr1={card.descr1}
            descr2={card.descr2}
            descr3={card.descr3}
            descrImg={card.descrImg?.src}
          />
        ))}
      </div>
    </div>
  )
}

export { BlogPage }
