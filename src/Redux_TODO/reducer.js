let initialState = {
  str: "",
  arr: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "sub":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case "chn":
      return {
        ...state,
        str: action.payload,
      };
    case "del":
      let newArr = state.arr.filter((val, ind) => {
        return ind != action.payloadIndex;
      });
      return {
        ...state,
        arr: newArr,
      };

    case "edit":
      var pr = prompt("edit the value");

      state.arr.splice(action.payloadIndex, 1, pr);

      return {
        ...state,
        arr: state.arr,
      };

    default:
      return state;
  }
}

export default reducer;
