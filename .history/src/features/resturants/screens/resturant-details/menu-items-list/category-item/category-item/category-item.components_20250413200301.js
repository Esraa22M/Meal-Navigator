import React, { Suspense } from 'react';
import { View, Image } from 'react-native';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
import { styles } from './category-item.styles';
import { LoadingDataIndicator } from '../../../../../../../ui/loading-data-indicator/loading-data-indicator.components';

// Lazy load components using React.lazy()
const ItemMainInfo = React.lazy(() =>
  import('./components/item-main-info.components').then((module) => module.default)
);

const CategoryItemButton = React.lazy(() =>
  import('./components/category-item-button.components').then((module) => module.default)
);

export const CategoryItem = ({ item }) => {
  return (
    <Suspense fallback={<LoadingDataIndicator />}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <CategoryItemButton item={item} />
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: item.photo }}
              style={styles.itemImage}
              resizeMode={ImageResizeMode.contain}
            />
            <ItemMainInfo item={item} />
          </View>
        </View>
      </View>
    </Suspense>
  );
};
