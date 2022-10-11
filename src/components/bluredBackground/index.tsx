import React, { FC, ReactNode } from 'react'
import s from './styles.module.scss'

interface Props {
  children: ReactNode
}

const BluredBack: FC<Props> = ({ children }) => (<div className={s.bluredBackground}>{children}</div>)

export { BluredBack }
