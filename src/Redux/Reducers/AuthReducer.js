const initialState = {
  token: "",
  userInfo: {},
  selectedChat: "",
  chats: [],
  profile:[],
  notification: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { token, userInfo } = action.payload;

      return {
        ...state,
        token: token,
        userInfo: userInfo,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        state,
      };
    case "SELECT_CHAT":
      const { data } = action.payload;
      return {
        ...state,
        selectedChat: data,
      };
    case "EMPTY_SELECT_CHAT":
      return {
        ...state,
        selectedChat: "",
      };
    case "CHATS":
      const { chats } = action.payload;
      return {
        ...state,
        chats: chats,
      };
    case "SET_NOTIFICATION":
      const { notify } = action.payload;
      return {
        ...state,
        notification: notify,
      };
      case "Profile":
        const { profile } = action.payload;
        return {
          ...state,
          profile: profile,
        }

    default:
      return {
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : null,
        userInfo: localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null,
      };
  }
};

export default AuthReducer;
