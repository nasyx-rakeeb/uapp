import {StyleSheet, Text, View, Image} from "react-native"
import {colors} from "../constants/colors.js"
import Button from "../components/Button.js"

const Welcome = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.img} source={require("../assets/images/welcome.png")} resizeMode="center" />
      <Text style={styles.head1}>Tanesco Tanzania</Text>
      <Text style={styles.head2}>Tunaangaza maisha yako</Text>
      <Button title="Log In" />
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 10,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  img: {
    
  },
  head1: {
    
  },
  head2: {
    
  }
})

export default Welcome