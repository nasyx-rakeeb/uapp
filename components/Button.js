import {StyleSheet, Text, Pressable, View} from "react-native"
import {colors} from "../constants/colors.js"

const Button = ({title, onPress}) => {
  return (
    <View style={styles.root}>
      <Pressable android_ripple={{color: "silver"}} style={{width: "100%"}} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.green,
    borderRadius: 50,
    width: "80%",
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 22,
    paddingVertical: 6
  }
})

export default Button