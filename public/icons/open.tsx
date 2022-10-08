import { FC, memo, SVGProps } from 'react'

interface Props {
  svgTag?: SVGProps<SVGSVGElement>
  lineTag?: SVGProps<SVGLineElement>
  className?: string
}

const OpenSvg: FC<Props> = ({ svgTag, lineTag, className }) => (
  <svg
    width='26'
    height='26'
    viewBox='0 0 26 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...svgTag}>
    <line
      x1='13.5'
      y1='1.5'
      x2='13.5'
      y2='24.5'
      stroke='black'
      strokeWidth='3'
      strokeLinecap='square'
      {...lineTag}
    />
    <line
      x1='1.5'
      y1='12.5'
      x2='24.5'
      y2='12.5'
      stroke='black'
      strokeWidth='3'
      strokeLinecap='square'
      {...lineTag}
    />
  </svg>
)

export default memo(OpenSvg)
