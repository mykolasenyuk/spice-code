import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BlogPage } from '../src/components/blogPage'
import PageWrapper from '../src/components/pageWrapper'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'

const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(true))
  }, [dispatch])

  return (
    <PageWrapper>
      <BlogPage />
    </PageWrapper>
  )
}

export default Blog
