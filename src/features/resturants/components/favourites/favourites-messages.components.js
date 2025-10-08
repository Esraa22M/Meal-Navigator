import { Spacer } from "../../../../components/spacer/spacer.component";
import { TextComponent } from "../../../../components/typography/text.components";
export const FavouritesMessage = ({ message }) => {
	return (
		<>
			<Spacer postion="top" size="medium" />
            <TextComponent variant="caption">{message }</TextComponent>
			<Spacer postion="bottom" size="medium" />
		</>
	);
};
