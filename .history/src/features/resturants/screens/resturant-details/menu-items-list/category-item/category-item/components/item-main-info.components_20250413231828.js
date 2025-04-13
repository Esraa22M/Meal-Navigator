import { View, Text } from "react-native";
import { Rating } from "react-native-elements";
import React, { Component } from "react";
import SwipeableRating from "react-native-swipeable-rating";

import { styles } from "../category-item.styles";
const ItemMainInfo = ({ item }) => {
	const rating = (item?.rating && +item?.rating) || 0;
	console.log(rating);
	return (
		<View style={styles.mainInfo}>
			<Text style={styles.productName}>{item?.name}</Text>
			<View style={styles.subInfo}>
				{rating > 0 && (
					<View >
						<Text >{rating}</Text>
						{rating > 0 ? (
							<SwipeableRating rating={rating} gap={4} />
						) : (
							<Text style={styles.noRating}>No ratings yet</Text>
						)}
					</View>
				)}
				<View style={styles.priceContainer}>
					<Text style={styles.price}>{item?.price} $</Text>
				</View>
			</View>
		</View>
	);
};
export default ItemMainInfo;
