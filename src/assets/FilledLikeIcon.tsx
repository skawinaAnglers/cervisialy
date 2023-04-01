import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const FilledLikeIcon = (props: SvgProps) => (
	<Svg
		clipRule="evenodd"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={ 2 }
		viewBox="0 0 24 24"
		{ ...props }
	>
		<Path
			d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
			fillRule="nonzero"
		/>
	</Svg>
);
export default FilledLikeIcon;
