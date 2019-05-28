export const types = {
  PUT_VALUE: 'PUT_VALUE',
};

export const putValue = payload => ({
  type: types.PUT_VALUE,
  payload,
});
