import {StyleSheet, Text, View} from "react-native"
import {colors} from "../constants/colors.js"

const TxtBtn = ({title, onPress}) => {
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
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  title: {
    color: colors.green,
    textAlign: "center",
    fontSize: 22
  }
})

export default TxtBtn