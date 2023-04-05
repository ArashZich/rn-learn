import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Counter} from '../components';
import {DECREMENTAction, IncrementAction} from '../store/actions';

const HomeFun = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Counter
        value={count}
        Increment={() => dispatch(IncrementAction())}
        Decrement={() => dispatch(DECREMENTAction())}
      />
    </View>
  );
};

export default HomeFun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
