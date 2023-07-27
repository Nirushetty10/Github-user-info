import { ADD_COMMENT , ADD_REPLY , DEL_COMMENT , DEL_REPLY } from "./action";

const initialState = {
    comments : [],
}

const reducer = (state = initialState, action) => {
   switch(action.type ) {
    case ADD_COMMENT : 
    console.log(state);
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
    const {parentId} = action.payload;
     const commentIndex = state.comments.findIndex((comment) => comment.id === parentId);
     if (commentIndex !== -1) {
     const updatedComments = [...state.comments];
     const updatedReplies = [...updatedComments[commentIndex].reply];
     updatedReplies.push(action.payload);
     updatedComments[commentIndex] = {
        ...updatedComments[commentIndex],
        reply: updatedReplies,
      };
      return {
        ...state,
        comments: updatedComments,
      };
     } else {
        return state;
     }

    case DEL_REPLY: 
    const {index,id} = action.payload;
    const updatedComments = [...state.comments];
    const updatedReplies = [...updatedComments[index].reply].filter(res => res.id !== id);
    updatedComments[index] = {
        ...updatedComments[index],
        reply: updatedReplies,
      };
    return {
        ...state,
        comments: updatedComments,
    }
    default : 
     return state;
   }
}

// contact manager

// import { ADD_CONTACT , DEL_CONTACT } from "./action";

// const initialStateForContact = {
//     user : []
// }

// const reducer = (state = initialStateForContact , action) => {
//     switch(action.type) {
//         case ADD_CONTACT : 
//         return {
//             ...state,
//             user : [...state.user , action.payload]
//         }

//         case DEL_CONTACT : 
//         return {
//             ...state,
//             user : state.user.filter(user => user.id !== action.payload)
//         }
//         default : 
//         return state;
//     }
// }

export default reducer;