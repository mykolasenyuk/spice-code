import Image from 'next/image'
import laptopImg from '../../../public/images/laptop.png'
import en from '../../../public/languages/en'
import styles from './styles.module.scss'

const SingleBlogPage = () => {
  return (
    <div className={styles['single-blog']}>
      <div className={styles['single-blog__img']}>
        <Image
          className={styles['single-blog__img-container']}
          alt='Laptop'
          src={laptopImg}
        />
      </div>
      <h2 className={styles['single-blog__title']}>
        {en.codeYourFuture.toLowerCase()}
      </h2>
      <p className={styles['single-blog__description']}>
        {en.codeYourFutureInfo}
      </p>
    </div>
  )
}

export default SingleBlogPage
