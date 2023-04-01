import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    {...props}
  >
    <Path d='M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4 4h2v3h-2v-3zm-8 0h2v8h-2v-8zm4 13h-2v3h-2v-3h-2v-3h6v3zm8-5h-2v8h-2v-8h-2v-3h6v3z' />
  </Svg>
)
export default SettingsIcon
