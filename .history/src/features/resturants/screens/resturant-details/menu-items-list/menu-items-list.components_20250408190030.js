import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";
import { MenuListItem } from "./menu-list-item.components";
import { useState, useRef, useCallback } from "react";
import { CategoryItem } from "./category-item/category-item/category-item.components";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuItems = ({ item, navigation }) => {
	const categories = item?.categories || [];
	let updatedCategories = categories.map((category, index) => ({
		...category,
		isActive: index === 0,
	}));
	const [activeIndex, setActiveIndex] = useState(0);
	const [categoryNameList, setCategoryNameList] = useState(updatedCategories);
	const flatListRef = useRef(null); // Ref للفلاتلست بتاع الـ items

	const toggleActive = useCallback((id) => {
		setCategoryNameList((prevState) =>
			prevState.map((item, index) => {
				if (item.name === id) {
					setActiveIndex(index);
					return { ...item, isActive: true };
				} else return { ...item, isActive: false };
			})
		);
		flatListRef.current?.scrollToOffset({ animated: false, offset: 0 });
	}, [setCategoryNameList,setActiveIndex]);

	return (
		<View style={{ marginTop: 60, height: "70%" }}>
			<View>
				<FlatList
					data={categoryNameList}
					extraData={categoryNameList}
					horizontal
					keyExtractor={(item) => item.name}
					showsHorizontalScrollIndicator={false}
					renderItem={(item) => (
						<MenuListItem item={item.item} toggleActive={toggleActive} />
					)}
				/>
			</View>
			<View style={styles.categoryItemsContainer}>
				<FlatList
					ref={flatListRef} // توصيل الـ ref
					horizontal
					pagingEnabled
					style={{ flex: 1 }}
					data={categoryNameList[activeIndex]?.items}
					extraData={activeIndex}
					initialNumToRender={1}
					renderItem={(item, index) => (
						<CategoryItem item={item.item} navigation={navigation} />
					)}
					keyExtractor={(item) => `${item.name}+${item.description}`}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	categoryItemsContainer: {
		marginVertical: 20,
		borderTopWidth: 0.5,
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		borderTopColor: colors.brand.muted,
	},
});
