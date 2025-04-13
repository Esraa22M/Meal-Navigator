import {  MD2Colors } from "react-native-paper";
import { DataLoadingIndicatorContainer , Loading} from "./loading-data.styles";
import { colors } from "../../infastructure/theme/colors";
export const LoadingDataIndicator = () => {
	return (
		<DataLoadingIndicatorContainer>
			<Loading animating={true} color={colors.ui.primary} style={{marginLeft:-25}} />
		</DataLoadingIndicatorContainer>
	);
};
