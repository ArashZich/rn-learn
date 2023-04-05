import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {Counter} from '../components';
import {DECREMENTAction, IncrementAction} from '../store/actions';

class Home extends React.Component {
  render() {
    const {DECREMENTAction, IncrementAction, count} = this.props;
    return (
      <View style={styles.container}>
        <Counter
          value={count}
          Increment={IncrementAction}
          Decrement={DECREMENTAction}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => ({
  DECREMENTAction: data => dispatch(DECREMENTAction(data)),
  IncrementAction: data => dispatch(IncrementAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
