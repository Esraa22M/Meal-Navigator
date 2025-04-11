import { FlatList, View  } from "react-native";
import { useMemo } from "react";
import { MenuListItem } from "../menu-list-item/menu-list-item.components";
import { useState, useRef, useCallback } from "react";
import { CategoryItem } from "../category-item/category-item/category-item.components";
import { styles } from "./menu-lists.styles";
export const MenuLists = ({ item, navigation }) => {
	const intialCategories = useMemo(() => {
		return (item?.categories || []).map((category, index) => ({
		  ...category,
		  isActive: index === 0,
		}));
	  }, [item?.categories]);
	  
	const [activeIndex, setActiveIndex] = useState(0);
	const [categoryNameList, setCategoryNameList] = useState(intialCategories);
	const flatListRef = useRef(null);

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
		<View style={styles.outerContainer}>
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
					ref={flatListRef} 
					horizontal
					pagingEnabled
					style={{ flex: 1 }}
					data={categoryNameList[activeIndex]?.items}
					extraData={activeIndex}
					initialNumToRender={1}
					renderItem={(item) => (
						<CategoryItem item={item.item} navigation={navigation} />
					)}
					keyExtractor={(item) => item.id?.toString() || `${item.name}+${item.description}`}
					/>
			</View>
		</View>
	);
};


