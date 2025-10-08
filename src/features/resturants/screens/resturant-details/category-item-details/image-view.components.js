import React, { useState } from 'react';
import { View, Image, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import Modal from 'react-native-modal';
import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infastructure/theme/colors';
const { width, height } = Dimensions.get('screen');
const _imageWidth = width;
const _imageHight = height;

export const ImageView = ({ imageUrl }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={{
          width,
          height: _imageHight,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        onPress={openModal}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{ width: _imageWidth, height: _imageHight }}
          resizeMode={ImageResizeMode.contain}
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)']}
          style={styles.background}
        />
      </Pressable>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        useNativeDriver
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <View style={{ flex: 1, backgroundColor: colors.bg.card }}>
          <ImageViewer imageUrls={[{ url: imageUrl }]} onSwipeDown={closeModal} enableSwipeDown resizeMode={ImageResizeMode.contain } />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    height: _imageHight,
    width: _imageWidth,
    padding: 20,
    borderRadius: 20,
  },
});
