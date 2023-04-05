export const IncrementAction = value => {
  return {
    type: 'INCREMENT',
    payload: value,
  };
};

export const DECREMENTAction = value => {
  return {
    type: 'DECREMENT',
    payload: value,
  };
};
