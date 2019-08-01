export default (state, action) => {
  switch (action.type) {
    case "SET_SELECTION":
      console.log(`selection is ${JSON.stringify(action.payload.value)}`);
      return state;
    default:
      return state;
  }
};
