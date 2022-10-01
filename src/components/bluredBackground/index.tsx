import React, { FC, ReactNode } from 'react'
import s from './styles.module.scss'
interface Props {
  children: ReactNode
}

const BluredBack: FC<Props> = ({ children }) => {
  return <div className={s.bluredBackgroung}>{children}</div>
}

export { BluredBack }
