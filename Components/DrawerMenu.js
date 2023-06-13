import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
const {width} = Dimensions.get('screen');
function DrawerMenu(props) {
  const {navigation} = props;
  // const [routeName, setRoute] = useState("Home");

  return (
    <SafeAreaView style={styles.container}>
      {/* Home */}
      <TouchableOpacity
        activeOpacity={0.75}
        // style={routeName == 'Home' ? styles.activeContent : styles.content}
        // onPress={navigateToScreen('Home')}
      >
        {/* <Feather name="home" color={WHITE_COLOR} size={24} />
        <Text style={styles.itemText}>{i18n.t('home')}</Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width: '75%',
    backgroundColor: 'red',
  },
});
