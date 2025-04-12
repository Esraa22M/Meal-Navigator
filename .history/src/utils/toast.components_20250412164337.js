import Toast from "react-native-toast-message";
export const showToast = (type , text1, text2) => {
         Toast.show({
             type,
            text1 ,
            text2,
            visibilityTime: 4000,
             onPress: () => Toast.hide()

        });
    };