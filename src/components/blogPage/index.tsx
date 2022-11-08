import { useEffect, useState } from 'react'
import en from '../../../public/languages/en'
import { getPosts } from '../../../services/api'
import { cardList } from '../../data'
import BlogCard from '../blogCard'
import classes from './styles.module.scss'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (error) {}
    }
    getData()
  }, [])

  return (
    <div className={classes.blog}>
      <h1 className={classes.blog__title}>{en.socialImpactInitiatives}</h1>
      <p className={classes.blog__description}>{en.blogDescription}</p>
      <div className={classes.blog__cards}>
        {posts.map(card => (
          <BlogCard
            key={card.id}
            imgSrc={card.imgUrl}
            info={card.info}
            title={card.title}
            id={card.id}
          />
        ))}
      </div>
    </div>
  )
}

export { BlogPage }
