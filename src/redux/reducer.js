import { ADD_COMMENT , ADD_REPLY , DEL_COMMENT , DEL_REPLY } from "./action";

const initialState = {
    comments : [],
}

const reducer = (state = initialState, action) => {
   switch(action.type ) {
    case ADD_COMMENT : 
    return {
        ...state,
        comments : [...state.comments , action.payload]
    }
    case DEL_COMMENT : 
    return {
        ...state,
        comments : state.comments.filter(item => {
            return item.id !== action.payload;
        })
    }
    case ADD_REPLY: 
    const {index , ...other} = action.payload;
    console.log(action.payload);
    return {
        ...state,
        comments : [...state.comments[index].reply , { ...other }] 
    }
    case DEL_REPLY: 
    return {
        ...state,
        comments :  state.reply.filter(item => {
            return item.id !== action.payload;
        })
    }
    default : 
     return state;
   }
}

export default reducer;