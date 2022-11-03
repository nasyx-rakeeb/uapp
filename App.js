import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'
import {colors} from "./constants/colors.js"
import {Welcome, Login} from "./screens/index.js"

const App = () => {
  return (
    <View style={styles.root}>
      <Welcome />
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white
  }
})


export default App