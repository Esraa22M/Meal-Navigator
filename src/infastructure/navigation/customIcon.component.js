import { View, Text } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const CustomTabIcon = ({ name, color, size, badgeCount }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <FontAwesome6 name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 10,
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 12 }}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomTabIcon;
