import Image from 'next/image'
import classes from './styles.module.scss'
import { AppLink } from '../appLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPostById, loadPostContent } from '../../../services/api'
import { v4 } from 'uuid'

interface IPost {
  id: string
  descrImg: string
  title: string
  info: string
  description?: string[]
  imgUrl?: string
  contentHtmlUrl?: string
}

const SingleBlogPage = () => {
  const router = useRouter()
  const {
    query: { slug: id },
  } = router

  const [post, setPost] = useState<IPost>()

  useEffect(() => {
    getPostById(id)
        .then(async (postFromApi) => {
          if (!postFromApi) {
            return
          }
          setPost(postFromApi)
        });
  }, [id])

  return (
    <div className={classes['single-blog']}>
      <AppLink href='/blog'>
        <div className={classes.backBtn}>
          <svg className={classes.svgBtn}>
            <use href={`/sprite.svg#icon-mail-arrow`} />
          </svg>
        </div>
      </AppLink>
      {post ? (
        <div className={classes['single-blog__container']}>
          <h2
            className={`${classes['single-blog__title']} ${classes['single-blog__title_phone']}`}
          >
            {post.title}
          </h2>
          <div className={classes['single-blog__img']}>
            {post.descrImg && (
              <Image
                className={classes['single-blog__img-container']}
                alt='descImg'
                src={post.imgUrl as string}
                width={640}
                height={330}
              />
            )}
          </div>
          <h2
            className={`${classes['single-blog__title']} ${classes['single-blog__title_laptop']}`}
          >
            {post.title}
          </h2>
          <p className={classes['single-blog__description']}>{post.info}</p>
          <div>
            {post.descrImg && (
              <Image
                alt='descImg'
                src={post.descrImg as string}
                width={640}
                height={330}
              />
            )}
          </div>
          {post.description &&
            post.description.map(descr => (
              <p key={v4()} className={classes['single-blog__description2']}>
                {descr}
              </p>
            ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SingleBlogPage
