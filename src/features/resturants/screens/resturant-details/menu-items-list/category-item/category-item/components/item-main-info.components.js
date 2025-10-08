import React from "react";
import { View, Text } from "react-native";
import { Rating } from "react-native-elements";
import { styles } from "../category-item.styles";
const ItemMainInfo = ({ item }) => {
  const rating = (item?.rating && +item?.rating) || 0;
  return (
    <View style={styles.mainInfo}>
      <Text style={styles.productName}>{item?.name}</Text>

      <View style={styles.subInfo}>
        <View style={styles.ratingContainer}>
          {rating > 0 ? (
            <>
              <Rating
                type="custom"
                ratingCount={5}
                imageSize={20}
                readonly={true}
                startingValue={rating}
               ratingColor="#FFD700"
              ratingBackgroundColor="#D3D3D3"
                style={{ paddingVertical: 5 }}
              />
              <Text style={styles.rating}>{rating}</Text>
            </>
          ) : (
            <Text style={styles.rating}>No ratings yet</Text>
          )}
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item?.price} $</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemMainInfo;
