import { POST, COMMENT } from "../actions/types";

export const initialState = {
    posts: { }
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
        case COMMENT.CREATE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postId]:{
                        ...state.posts[action.postId],
                        comments: {
                            ...state.posts[action.postId].comments,
                            [action.id]: action.comment
                        }
                    }
                }
            };
        case COMMENT.UPVOTE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postId]:{
                        ...state.posts[action.postId],
                        comments: {
                            ...state.posts[action.postId].comments,
                            [action.id]: {
                                ...state.posts[action.postId].comments[action.id],
                                votes: state.posts[action.postId].comments[action.id].votes + 1,
                            }
                        }
                    }
                }
            };
        case COMMENT.DOWNVOTE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postId]:{
                        ...state.posts[action.postId],
                        comments: {
                            ...state.posts[action.postId].comments,
                            [action.id]: {
                                ...state.posts[action.postId].comments[action.id],
                                votes: state.posts[action.postId].comments[action.id].votes > 0 ? state.posts[action.postId].comments[action.id].votes - 1 : 0,
                            }
                        }
                    }
                }
            };
        
        default: return state;
    }
};

export default reducer;