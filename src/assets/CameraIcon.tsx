import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CameraIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    {...props}
  >
    <Path d='M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z' />
  </Svg>
)

export default CameraIcon
