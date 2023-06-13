import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../../common/Header';
const {width, height} = Dimensions.get('screen');

const Statement = props => {
  const transactions = [
    {
      date: '2023-06-01',
      amount: 100,
      type: 'Credit',
      detail: 'deposit',
      balance: 1000,
      time: '10:00AM',
    },
    {
      date: '2023-06-02',
      amount: -50,
      type: 'Debit',
      detail: 'deposit',
      balance: 950,
      time: '10:00AM',
    },
    {
      date: '2023-06-03',
      amount: -30,
      type: 'Debit',
      detail: 'deposit',
      balance: 920,
      time: '10:00AM',
    },
    {
      date: '2023-06-04',
      amount: -20,
      type: 'Debit',
      detail: 'deposit',
      balance: 900,
      time: '10:00AM',
    },
  ];
  const {navigation} = props;

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Header />
        <View style={styles.container}>
          {/* Table Header */}
          <View style={{borderWidth: 0.5, padding: 5}}>
            <View style={styles.row}>
              <Text style={styles.headerCell}>Date</Text>
              <Text style={styles.headerCell}>Amount</Text>
              <Text style={styles.headerCell}>Type</Text>
              <Text style={styles.headerCell}>Detail</Text>
              <Text style={styles.headerCell}>Balance</Text>
            </View>

            {/* Table Body */}
            {transactions.map((transaction, index) => {
              console.log('index', index);
              return (
                <View
                  key={index}
                  style={[
                    styles.row,
                    {
                      borderBottomWidth:
                        index == transactions.length - 1 ? 0 : 1,
                    },
                  ]}>
                  <View style={{height: 35}}>
                    <Text style={[styles.cell, {marginRight: 5}]}>
                      {transaction.date}
                    </Text>
                    <Text style={styles.cell}>{transaction.time}</Text>
                  </View>
                  <Text style={styles.cell}>{transaction?.amount}</Text>
                  <Text style={styles.cell}>{transaction?.type}</Text>
                  <Text style={styles.cell}>{transaction?.detail}</Text>
                  <Text style={[styles.cell]}>{transaction?.balance}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Statement;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    marginLeft: 0,
  },
});
