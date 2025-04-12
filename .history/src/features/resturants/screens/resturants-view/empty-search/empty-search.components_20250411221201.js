import { View, Text, Image } from "react-native";
import { styles } from "./empty-favourites.styles";
export const EmptyFavourites = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View
                    style={styles.imageContainer}
                >
                    <Image
                        source={require("../../../../../../assets/bg-images/collectLove.jpg")}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text
                        style={styles.message}
                    >
                        Whoops, no matches
                    </Text>
                </View>
            </View>
        </View>
    );
};

