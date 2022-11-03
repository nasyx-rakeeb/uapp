import {StyleSheet, Text, View} from "react-native"
import {colors} from "../constants/colors.js"

const Welcome = () => {
  return (
    <View style={styles.root}>
      <Text>Hi</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export default Welcome