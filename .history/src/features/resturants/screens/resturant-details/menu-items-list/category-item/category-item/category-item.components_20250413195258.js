import React, { Suspense } from 'react';
import { View, Image } from 'react-native';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
import { styles } from './category-item.styles';

const ItemMainInfo = React.lazy(() => import('./components/item-main-info.components'));
const CategoryItemButton = React.lazy(() => import('./components/category-item-button.components'));

export const CategoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {/* استخدام Suspense لتحديد واجهة تحميل مؤقتة */}
        <Suspense fallback={<View><Text>تحميل...</Text></View>}>
          <CategoryItemButton item={item} />
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: item.photo }}
              style={styles.itemImage}
              resizeMode={ImageResizeMode.contain}
            />
            <ItemMainInfo item={item} />
          </View>
        </Suspense>
      </View>
    </View>
  );
};
