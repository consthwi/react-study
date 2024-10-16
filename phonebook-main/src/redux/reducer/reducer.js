import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contactList: [],
  keyword: ""
  /* 
  contactList: [
  {name: "A", phoneNumber: "01052223333"},
  {name: "B", phoneNumber: "01052223333"},
  {name: "C", phoneNumber: "01052223333"},
  ...
  ],
   */
}

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state, contactList: [...state.contactList, { id: uuidv4(), name: payload.name, phoneNumber: payload.phoneNumber }]
        // state값을 전개하여 그 중 contactList 배열을 새롭게 만든 배열을 통하여 수정하겠다.
        // payload에 id추가 => delete기능
      }
    case "DELETE_CONTACT":
      return {
        ...state, contactList: state.contactList.filter((item) => { return item.id !== payload.id })
      }

    case "RESET_CONTACT":
      return {
        ...state,
        contactList: []  // contactList를 빈 배열로 초기화
      }
    case "SEARCH_BY_USERNAME":
      return {
        ...state, keyword: payload.keyword
      }
    default:
      return { ...state }
  }
}

// [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }]

export default reducer