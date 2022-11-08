import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { StaticImageData } from 'next/image'
import data from '../../public/languages/postsData'

interface IBlog {
  coverImageUrl: string
  id: string
  description: string
  content: string
}

interface Post {
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  info: string
  descr1?: string
  descr2?: string
  descr3?: string
  descrImg?: string
}

// const postPath = '../../../mendee.digital-2.0/public/languages/postsData.json'
export default async function handler(req, res, next) {
  try {
    res.json({
      status: '✔️ Success',
      code: 200,
      data,
    })
  } catch (error) {
    next(error)
  }
}
