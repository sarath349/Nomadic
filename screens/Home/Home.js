import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Dimensions} from 'react-native';
import Header from '../../common/Header';
const {width, height} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <Text
        onPress={() => props.navigation.navigate('Login')}
        style={{alignSelf: 'flex-end', marginRight: 25}}>
        Logout
      </Text>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.title}>Welcome John Doe</Text>
          <View style={styles.content}>
            <Text>YOUR ID</Text>
            <Text style={{marginLeft: 70}}>john.doe@gmail.com</Text>
          </View>
          <View style={styles.content}>
            <Text>YOUR Balance</Text>
            <Text style={{marginLeft: 32}}>20,00,00 INR</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDBDA',
  },
  table: {
    borderWidth: 1,
    margin: 10,
    borderColor: '#DDDBDA',
    height: 150,
    padding: 5,
  },
  content: {
    flexDirection: 'row',
    margin: 10,
  },
});
