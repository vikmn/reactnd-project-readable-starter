import { POST, COMMENT, CATEGORY } from "../actions/types";

export const initialState = {
    categories: {},
    posts: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY.CREATE:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.id]:
                    {
                        ...action.category,
                        id: action.id
                    }
                }
            };
        case CATEGORY.DELETE:
            return {
                ...state,
                categories: Object.keys(state.categories)
                    .filter(key => key != action.id)
                    .reduce((obj, key) => {
                        return {
                            [key]: state.categories[key]
                        }
                    }, {})
            };
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
                    [action.id]: {
                        ...state.posts[action.id],
                        votes: state.posts[action.id].votes + 1,
                    }
                }
            };
        case POST.DOWNVOTE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]: {
                        ...state.posts[action.id],
                        votes: state.posts[action.id].votes > 0 ? (state.posts[action.id].votes - 1) : 0,
                    }
                }
            };
        case POST.DELETE:
            return {
                ...state,
                posts: Object.keys(state.posts)
                    .filter(key => key != action.id)
                    .reduce((obj, key) => {
                        return {
                            [key]: state.posts[key]
                        }
                    }, {})
            };
        case COMMENT.CREATE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postId]: {
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
                    [action.postId]: {
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
                    [action.postId]: {
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
        case COMMENT.DELETE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postId]: {
                        ...state.posts[action.postId],
                        comments: Object.keys(state.posts[action.postId].comments)
                            .filter(key => key != action.id)
                            .reduce((obj, key) => {
                                return {
                                    [key]: state.posts[action.postId].comments[key]
                                }
                            }, {})
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;