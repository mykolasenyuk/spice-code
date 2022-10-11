import Image from 'next/image'
import laptopImg from '../../../public/images/laptop.png'
import en from '../../../public/languages/en'
import styles from './styles.module.scss'
import { Sprite } from '../sprite'

const SingleBlogPage = () => {
  return (
    <div className={styles['single-blog']}>
      <div className={styles['single-blog__go-back']}>
        <Sprite id={'icon-arrow-back'} width={15.22} height={11.28} />
      </div>
      <div className={styles['single-blog__container']}>
        <h2
          className={`${styles['single-blog__title']} ${styles['single-blog__title_phone']}`}>
          {en.codeYourFuture.toLowerCase()}
        </h2>
        <div className={styles['single-blog__img']}>
          <Image
            className={styles['single-blog__img-container']}
            alt='Laptop'
            src={laptopImg}
          />
        </div>
        <h2
          className={`${styles['single-blog__title']} ${styles['single-blog__title_laptop']}`}>
          {en.codeYourFuture.toLowerCase()}
        </h2>
        <p className={styles['single-blog__description']}>
          {en.codeYourFutureInfo}
        </p>
      </div>
    </div>
  )
}

export default SingleBlogPage
