export default (state, action) => {
  switch (action.type) {
    case "SET_SELECTION":
      console.log(`selection is ${JSON.stringify(action.payload.value)}`);
      return { ...state, ...{ currentLimit: action.payload.value } };
    default:
      return state;
  }
};
