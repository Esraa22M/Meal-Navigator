import { View, Text } from "react-native";
import { Rating } from "react-native-elements";
import React, { Component } from "react";
import SwipeableRating from "react-native-swipeable-rating";

const MyStarRating = ({ rating }) => {
	return (
		<View style={{ marginHorizontal: 30 }}>
			<SwipeableRating rating={rating} size={32} gap={4} xOffset={30} />
		</View>
	);
};
import { styles } from "../category-item.styles";
const ItemMainInfo = ({ item }) => {
	const rating = (item?.rating && +item?.rating) || 0;
	console.log(rating);
	return (
		<View style={styles.mainInfo}>
			<Text style={styles.productName}>{item?.name}</Text>
			<View style={styles.subInfo}>
				{rating > 0 && (
					<View style={styles.ratingContainer}>
						<Text style={styles.rating}>{rating}</Text>
						<SwipeableRating rating={rating} />
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
