import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BeerIcon = (props: SvgProps) => (
	<Svg
		width={ 24 }
		height={ 24 }
		viewBox='0 0 24 24'
		{...props}
	>
		<Path d='M11 14.699v6.256c-.667.014-1.5-.064-2-.183v-6.205c0-2.76 1.367-1.888 2.504-5.243-.283 1.753-.504 2.652-.504 5.375zm1 9.301c-3.741 0-6 0-6-2.299v-8.154c0-2.897 1.78-3.36 2.25-4.36.434-.924.937-4.585.954-5.049l-.048-.078c-.452-.687-.578-1.372.057-3.02.184-.483.669-1.04 2.787-1.04s2.603.557 2.788 1.042c.576 1.495.589 2.258.049 3.023-.024.535.479 4.196.913 5.121.471 1 2.25 1.464 2.25 4.36v8.154c0 2.3-2.259 2.3-6 2.3zm-1.039-21.917c-.211.619-.184.801-.182.81.292.374.425.809.425 1.257 0 .387-.51 4.534-1.144 5.886-.688 1.466-2.06 1.541-2.06 3.511v8.154c.458.426 7.544.401 8.042.023l-.042-8.177c0-1.968-1.372-2.046-2.061-3.51-.634-1.353-1.144-5.499-1.144-5.886 0-.661.265-1.037.407-1.238.028-.036.046-.225-.163-.829-.207-.042-.56-.084-1.039-.084-.479 0-.831.042-1.039.083z' />
	</Svg>
)
export default BeerIcon
