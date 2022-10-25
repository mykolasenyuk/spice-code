import Link from 'next/link'
import { ParsedUrlQueryInput } from 'querystring'
import { CSSProperties, FC, memo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
  className?: string
  style?: CSSProperties
  onClick?: () => void
  query?: string | ParsedUrlQueryInput
}

const AppLinkComponent: FC<Props> = ({
  children,
  href,
  className,
  style,
  onClick = () => {},
  query = {},
}) => (
  <Link className={className} href={{ pathname: href, query }} passHref>
    <a onClick={onClick} style={style}>
      {children}
    </a>
  </Link>
)

const AppLink = memo(AppLinkComponent)

export { AppLink }
