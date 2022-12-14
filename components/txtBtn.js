import {StyleSheet, Text, View, Pressable} from "react-native"
import {colors} from "../constants/colors.js"

const TxtBtn = ({title, onPress}) => {
  return (
    <View style={styles.root}>
      <Pressable style={({pressed}) => [{opacity: pressed ? .7 : 1}]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  title: {
    color: colors.green,
    textAlign: "center",
    fontSize: 17
  }
})

export default TxtBtn