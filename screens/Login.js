import {StyleSheet, Text, View, TextInput} from "react-native"
import {colors} from "../constants/colors.js"
import Button from "../components/Button.js"
import TxtBtn from "../components/txtBtn.js"

const Login = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>Log In</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput secureTextEntry style={styles.input} placeholder="Password" />
      </View>
      <Button title="Log In" />
      <View style={styles.btnContainer}>
        <TxtBtn title="Forgot Password" />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    marginVertical: 50,
    width: "90%",
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.silver,
    width: "85%",
    paddingVertical: 9,
    fontSize: 18,
    paddingLeft: 4,
    marginBottom: 12
  },
  txt: {
    fontSize: 34
  },
  btnContainer: {
    marginTop: 18
  }
})

export default Login