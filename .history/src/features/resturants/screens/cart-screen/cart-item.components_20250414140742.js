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

            <Pressable style={styles.circleButton} onPress={onAdd}>
              <Icon name="angle-right" size={24} color={colors.ui.primary} />
            </
