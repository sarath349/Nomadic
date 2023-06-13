import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../common/Header';
const {width, height} = Dimensions.get('screen');

const Withdraw = props => {
  const {navigation} = props;
  const [amount, setAmount] = useState();
  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.title}>Withdraw Money</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.email}>Amount</Text>
            <TextInput
              placeholder="Enter amount to withdraw"
              autoCapitalize="none"
              style={styles.textinput}
              value={amount}
              onChangeText={setAmount}
              keyboardType="number-pad"
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
  container: {
    margin: 10,
    justifyContent: 'center',
    padding: 25,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  textinput: {
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#A7A5A4',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '500',
  },
  inputContainer: {},
  email: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#0292EF',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});
