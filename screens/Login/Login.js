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

const Login = props => {
  const {navigation} = props;
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.title}>Login to your account</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.email}>Email Address</Text>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textinput}
              value={userName}
              onChangeText={setUserName}
            />
            <Text style={styles.email}>Password</Text>
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textinput}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.rem}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={[
                styles.checkBox,
                isChecked ? {backgroundColor: 'black'} : null,
              ]}></TouchableOpacity>
            <Text style={{fontWeight: '500'}}>Remember Me</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={{alignSelf: 'center'}}>
          Don't have account yet?{' '}
          <Text
            onPress={() => props.navigation.navigate('SignUp')}
            style={{color: '#0292EF'}}>
            Sign Up
          </Text>
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 50,
    fontSize: 20,
    alignSelf: 'center',
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
  rem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkBox: {
    height: 13,
    width: 13,
    borderWidth: 1,
    marginRight: 5,
  },
});
