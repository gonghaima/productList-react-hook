export default (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      console.log(`action is ${JSON.stringify(action)}`);
      return state;
    default:
      return state;
  }
};
