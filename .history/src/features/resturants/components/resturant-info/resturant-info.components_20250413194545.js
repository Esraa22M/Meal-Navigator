import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/icons/star.js";
import open from "../../../../../assets/icons/open.js";
import { Pressable } from "react-native";
import {
	ResturantCard,
	IconsContainerView,
	RowView,
	Icon,
	CardBody,
	ResturantCardCover,
	Title,
	Address,
	RatingContainer,
} from "./resturant-info.styles.js";
import { useMemo , useCallback} from "react";
import { Favourite } from "../../../../components/favourites/favourite.components.js";
import { Spacer } from "../../../../components/spacer/spacer.component.js";
import { TextComponent } from "../../../../components/typography/text.components.js";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../infastructure/theme/colors.js";
export const ResturantInfoCard = ({ resturant = {} }) => {
	const {
		name = "",
		icon = "",
		photos = [""],
		address = "",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = resturant;

	let ratingArray = useMemo(() => {
		return Array.from(new Array(Math.floor(rating)));
	}, [rating]);
	const navigation = useNavigation();
	const handleMapNavigation =useCallback( (event) => {
		event.stopPropagation();
		navigation.navigate("resturantMapView", { resturant: resturant });
	},[resturant, navigation]);
	return (
		<ResturantCard
			style={{
				elevation: 0,
				shadowOpacity: 0,
				borderWidth: 0,
				padding: 0,
				shadowOffset: { height: 0, width: 0 },
				shadowRadius: 0, //default is 1
				borderColor: "transparent",
			}}
			mode="contained"
		>
			<Card.Content
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
				<Spacer postion="bottom" size="large">
					<IconsContainerView>
						<RowView>
							{isClosedTemporarily && (
								<TextComponent variant="error">
									is closed temporarily
								</TextComponent>
							)}
							{isOpenNow && (
								<Spacer postion="left" size="medium">
									<SvgXml xml={open} width={30} height={30} />
								</Spacer>
							)}
						</RowView>
						<RowView>
							<Favourite resturant={resturant} />
							<Spacer postion="left" size="medium" />

							{icon && (
								<>
									<Icon source={{ uri: icon }} size={20} />
									<Spacer postion="left" size="medium" />
								</>
							)}
							<Pressable
								style={({ pressed }) => [
									pressed && { backgroundColor: colors.ui.accent },
									{
										justifyContent: "center",
										width: 30,
										height: 30,
										alignItems: "center",
										borderRadius: 1000,
									},
								]}
								onPress={handleMapNavigation}
							>
								<FontAwesome name="map-marker" color="red" size={24} />
							</Pressable>
						</RowView>
					</IconsContainerView>
				</Spacer>
				<ResturantCardCover source={{ uri: photos[0] }} />
				<CardBody>
					<Title variant="label">{name}</Title>
					<RatingContainer>
						{ratingArray?.length > 0 &&
ratingArray?.map((item, index) => (
							<SvgXml xml={star} width={20} height={20} key={`${index}+${item}`} />
						))}
					</RatingContainer>
					<Address variant="label">{address}</Address>
				</CardBody>
			</Card.Content>
		</ResturantCard>
	);
};
