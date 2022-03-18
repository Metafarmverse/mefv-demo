import { Svg, SvgProps } from '@pancakeswap/uikit'

const GradientLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path 
        transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)"
        d="M1240 1514 c-591 -430 -1076 -788 -1078 -796 -4 -18 102 -176 176 -263 193 -226 492 -390 800 -441 118 -19 389 -14 496 11 273 61 508 194 698 394 191 200 308 438 354 721 21 126 14 378 -15 500 -51 222 -160 436 -302 595 l-54 60 -1075 -781z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#36db5c" />
          <stop offset="1" stopColor="#0a7422" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default GradientLogo
