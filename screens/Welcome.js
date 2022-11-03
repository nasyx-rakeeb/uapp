import {StyleSheet, Text, View, Image} from "react-native"
import {colors} from "../constants/colors.js"
import Button from "../components/Button.js"

const Welcome = () => {
  return (
    <View style={styles.root}>
    <View style={styles.root2}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../assets/images/welcome.png")} resizeMode="center" />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.head1}>Tanesco Tanzania</Text>
        <Text style={styles.head2}>Tunaangaza maisha yako</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Log In" />
      </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 15,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  root2: {
    flex: 1,
    width: "100%"
  },
  imgContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    flex: 1,
    aspectRatio: 1,
    width: "100%",
    height: undefined
  },
  btnContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  txtContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  head1: {
    
  },
  head2: {
    color: colors.silver,
  }
})

export default Welcome