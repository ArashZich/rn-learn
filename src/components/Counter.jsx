import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    const {value, Increment, Decrement} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count: {value}</Text>
        <Button title="Increment" onPress={Increment} />
        <Button title="Decrement" onPress={Decrement} />
      </View>
    );
  }
}

export {Counter};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
