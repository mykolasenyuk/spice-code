import Link from 'next/link'
import { CSSProperties, FC, forwardRef, memo, ReactNode } from 'react'
import { Url } from 'url'

interface Props {
  children: ReactNode
  href: Url | string
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const AppLinkComponent: FC<Props> = ({
  children,
  href,
  className,
  style,
  onClick = () => {},
}) => (
  <Link className={className} href={href} passHref>
    <a onClick={onClick} style={style}>
      {children}
    </a>
  </Link>
)

const AppLink = memo(AppLinkComponent)

export { AppLink }
