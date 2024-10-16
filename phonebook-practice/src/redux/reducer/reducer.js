let initialState = {
  contactList: [],
  keyword: "",
};

// reducer는 바꿀 state와, 받아올 action이 필요하다
// action은 useDispatch()에서 보내며 type, payload를 받아온다.
function reducer(state = initialState, action) {
  const { type, payload } = action;
  // action은 객체가 명확하다.
  // action으로 생성된 두 값을 직접 멘션하여
  // 생성한 const type = 새로 만들어진 action의 type값
  // 생성한 const payload = 새로 만들어진 action의 payload값을 save할 수 있따.
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}

export default reducer;
