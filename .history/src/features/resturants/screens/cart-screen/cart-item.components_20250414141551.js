import React, { useContext, useCallback } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { CartContext } from "../../../../services/cart/cart.context";
import { colors } from "../../../../infastructure/theme/colors";
import { fonts } from "../../../../infastructure/theme/fonts";
import { useNavigation } from "@react-navigation/native";

export const CartItem = ({ item, showToast }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation?.navigate("All", {
      screen: "categoryItemDetails",
      params: { item },
    });
  }, [navigation]);

  const onRemove = (event) => {
    event.stopPropagation();
    removeItemToCart(item);
  };

  const onAdd = (event) => {
    event.stopPropagation();
    addItemToCart(item);
  };

  const onClear = (event) => {
    event.stopPropagation();
    clearItemFromCart(item);
    showToast();
  };

  return (
    <Pressable
      onPress={handleNavigation}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
    >
      <View style={styles.container}>
        <View>
          <Image source={{ uri: item?.photo }} style={styles.image} />
          <View style={styles.quantityRow}>
            <Pressable style={styles.circleButton} onPress={onRemove}>
              <Icon name="angle-left" size={24} color={colors.ui.accent} />
            </Pressable>

            <View style={styles.quantityText}>
              <Text style={styles.name}>x</Text>
              <Text style={styles.name}>{item?.quantity}</Text>
            </View>

            <Pressable style={({pressed})=>[styles.circleButton,pressed&&colors.bg.lightBackground ]} onPress={onAdd}>
              <Icon name="angle-right" size={24} color={colors.ui.primary} />
            </Pressable>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$</Text>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
          <Text style={styles.name}>{item?.name}</Text>
        </View>

        <Pressable style={({pressed})=>[styles.deleteButton,pressed&&{backgroundColor:colors.ui.primary}]} onPress={onClear}>
          <EvilIcons name="close" size={24} />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: "5%",
    borderBottomWidth: 0.3,
  },
  cardPressed: {
    backgroundColor: colors.bg.card,
    opacity: 0.3,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 2000,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "2%",
  },
  circleButton: {
    marginHorizontal: "2%",
	backgroundColor:"red",
    width: 30,
    height: 30,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: "2%",
    flexDirection: "row",
  },
  details: {
    width: "40%",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: colors.ui.primary,
    fontFamily: fonts.body,
    fontSize: 15,
    fontWeight: "bold",
  },
  name: {
    color: colors.ui.secondary,
    fontFamily: fonts.body,
    fontSize: 15,
    textTransform: "capitalize",
  },
  deleteButton: {
    marginHorizontal: "5%",
    width: 50,
    height: 50,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
});
