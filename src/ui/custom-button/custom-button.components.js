import { Pressable, StyleSheet, Text } from "react-native";
const AppButton = (props) => {

  return (
    <Pressable
      style={({ pressed }) => [
        pressed?{
          backgroundColor:props.color,
          opacity:0.7
        }:{backgroundColor:props.color,opacity:1},
        styles.container,
        props.outline&&styles.outlineContainer,
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Text style={[styles.text, props.textStyles]}>
        {props.children || "Press Me"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius:15,
    alignItems: "center",
    width:'100%',
  },
  outlineContainer:{    backgroundColor:"black",
    borderWidth:1,
    borderColor:"#A57110",
  },
  text: { color: "white" },
});

export default AppButton;