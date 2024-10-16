let initialState = {
  count: 0,
  id: "",
  password: "",
};

// reducer는 return으로 store를 변경한다.
// 따라서 항상 return이 필요하다.
function reducer(state = initialState, action) {
  console.log("action:", action);
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  //   // ...state는 state내의 key:value값을 전개하여 기존 값을 유지하고,
  //   // , 뒤의 값으로 특정 state를 변경한다.
  //   // => spread 문법을 통해 기존 객체내용을 복사해 새로운 객체에 전달 가능
  // }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    // return { ...state, count: state.count + action.payload.actionNum };
    case "DECREMENT":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return { ...state };
      }

    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }

  // return { ...state };
}

export default reducer;
