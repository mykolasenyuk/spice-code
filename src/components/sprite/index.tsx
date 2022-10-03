import { FC, MouseEventHandler } from 'react'

interface Props {
  id: string
  width?: number
  height?: number
  onClick?: MouseEventHandler<SVGSVGElement>
  fill?: string
}

const Sprite: FC<Props> = ({ id, width, height, onClick = () => {}, fill }) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} onClick={onClick} fill={fill}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}
export { Sprite }
