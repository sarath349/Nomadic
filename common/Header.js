import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../assets/images';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Header = ({navigation}) => {
  // const {navigation} = props;
  // console.log('nav', navigation);

  return (
    <SafeAreaView style={styles.headContainer}>
      <TouchableOpacity
        // activeOpacity={0.75}
        onPress={() => navigation.openDrawer()}>
        {/* <Feather name="menu" size={25} color="#555" /> */}
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image resizeMode="stretch" source={Images.logo} style={styles.logo} />
        <Text style={styles.title}>ABC Bank</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headContainer: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#01a9a1',
  },
  logo: {
    height: 35,
    width: 35,
    borderRadius: 10,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
