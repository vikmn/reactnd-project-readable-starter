import { POST } from "../actions/types";

export const initialState = {
    posts: {
        "2": {
            id: 2,
            votes: 3
        },
        "3": {
            id: 3,
            votes: 0
        }
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST.CREATE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]: action.post
                }
        }; 
        case POST.UPVOTE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]:{
                        id: action.id,
                        votes: state.posts[action.id].votes +1,
                    }
                }
        }; 
        case POST.DOWNVOTE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]:{
                        id: action.id,
                        votes: state.posts[action.id].votes > 0 ? state.posts[action.id].votes - 1 : 0,
                    }
                }
        }; 
        default: return state;
    }
};

export default reducer;