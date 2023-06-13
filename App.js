/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Route from './screens/Route';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
function App() {
  return (
    <>
      <View style={styles.Container}>
        <Route />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
