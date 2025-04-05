import {  MD2Colors } from "react-native-paper";
import { DataLoadingIndicatorContainer , Loading} from "./loading-data.styles";
export const LoadingDataIndicator = () => {
	return (
		<DataLoadingIndicatorContainer>
			<Loading animating={true} color={MD2Colors.red800} style={{marginLeft:-25}} />
		</DataLoadingIndicatorContainer>
	);
};
