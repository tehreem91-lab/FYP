const initialState = {
  feedback: [],
  teacherdata:[],
  profile:{}
};

const FeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FEEDBACK":
      const { feedback } = action.payload;
      console.log(feedback)
      return {
        ...state,
        feedback: feedback,
      };
      case "PROFILE":
        const { profile } = action.payload;
        return {
          ...state,
          profile: profile,
        }

        case "GET_TEACHER" :
        const {teacherdata} = action.payload;
        return{
          ...state,
          teacherdata:teacherdata,
        }
        

    default:
      return {
        state,
      };
  }
};

export default FeedbackReducer;
