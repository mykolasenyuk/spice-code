import { FC, MouseEventHandler } from 'react'

interface Props {
  id: string
  width?: number
  height?: number
  onClick?: MouseEventHandler<SVGSVGElement>
  onHover?: MouseEventHandler<SVGSVGElement>
  onLeave?: MouseEventHandler<SVGSVGElement>
  fill?: string
  className?: string
}

const Sprite: FC<Props> = ({
  id,
  width,
  height,
  onClick = () => {},
  onHover = () => {},
  onLeave = () => {},
  fill,
  className,
}) => {
  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${height}px`}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      fill={fill}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}
export { Sprite }
