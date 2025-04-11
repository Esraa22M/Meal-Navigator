import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { Favourite } from "../../../../../components/favourites/favourite.components";
import { colors } from "../../../../../infastructure/theme/colors";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
const { width } = Dimensions.get("screen");
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import { styles } from "./resturant-details-header.styles";
import { MapButton } from "./map-button/map-button.components";
export const Header = ({ item }) => {


	return (
		<>
			<BackButton />
			<View style={styles.itemContainer}>
				<Image
					source={{
						uri: item.images?.[3] || "https://via.placeholder.com/500",
					}}
					style={styles.image}
					resizeMode={ImageResizeMode.contain}
				/>
				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.8)"]}
					style={[styles.background]}
				>
					<View style={styles.infoContainer}>
						<Text style={styles.title}>{item.name}</Text>
						<Text style={styles.description}> {item.address}</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							justifyContent: "space-around",
							width: width,
						}}
					>
						<View style={styles.timeContainer}>
							<Icon name="truck-fast" size={24} color={colors.ui.primary} />
							<Text style={styles.deliveryTime}>Delivery time is 30-40</Text>
						</View>
						<View
							style={styles.favouriteContainer}
						>
							<Favourite resturant={item} />
						</View>
						<MapButton item={item}/>
					</View>
				</LinearGradient>
			</View>
		</>
	);
};
