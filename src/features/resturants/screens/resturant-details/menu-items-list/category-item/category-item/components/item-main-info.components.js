import {View , Text} from "react-native";
import { Rating } from "react-native-ratings";
import { styles } from "../category-item.styles";
export const ItemMainInfo = ({item}) => {
	return (
		<View style={styles.mainInfo}>
			<Text style={styles.productName}>{item?.name}</Text>
			<View style={styles.subInfo}>
				<View style={styles.ratingContainer}>
					<Text style={styles.rating}>{+item?.rating}</Text>
					<Rating
						ratingColor="#3498db"
						ratingBackgroundColor="#c8c7c8"
						ratingCount={5}
						startingValue={+item?.rating}
						readonly
						imageSize={20}
						style={{ paddingVertical: 10 }}
					/>
				</View>
				<View style={styles.priceContainer}>
					<Text style={styles.price}>{item?.price} $</Text>
				</View>
			</View>
		</View>
	);
};
