import {StyleSheet, Text, Pressable} from "react-native"
import {colors} from "../constants/colors.js"

const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.green,
    borderRadius: 50,
    width: "80%",
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 6
  }
})

export default Button