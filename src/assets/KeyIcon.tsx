import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const KeyIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fillRule='evenodd'
    clipRule='evenodd'
    {...props}
  >
    <Path d='M12.804 9c1.038-1.793 2.977-3 5.196-3 3.311 0 6 2.689 6 6s-2.689 6-6 6c-2.219 0-4.158-1.207-5.196-3h-3.804l-1.506-1.503-1.494 1.503-1.48-1.503-1.52 1.503-3-3.032 2.53-2.968h10.274zm7.696 1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z' />
  </Svg>
)

export default KeyIcon
