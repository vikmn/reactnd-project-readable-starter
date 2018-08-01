import { reducer } from './reducer';
import { commentActions } from '../actions/.';
describe('Comment actions', () => {
    it('creates a comment for the specified post ', () => {
        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3,
                    comments: {}
                }
            }
        };
        const action = commentActions.createComment({
            id: 1,
            votes: 1,
        }, postId);
        const expectedState = {
            ...action.comment
        };
        expect(reducer(initialState, action).posts[postId].comments[1]).toEqual(expectedState);
    });
    it('upvoting an existing comment for the specified post updates votes for the comment', () => {
        const postId = 2;
        const commentId = 1;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3,
                    comments: {
                        "1": {
                            id: 1,
                            votes: 1,
                        }
                    }
                }
            }
        };
        const action = commentActions.upvoteComment(commentId, postId);
        const expectedState = {
            id: commentId,
            votes: 2
        };
        expect(reducer(initialState, action).posts[postId].comments[commentId]).toEqual(expectedState);
    });
    it('downvoting a comment should return decremented vote count for the specified comment', () => {
        const postId = 2;
        const commentId = 1;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3,
                    comments: {
                        "1": {
                            id: commentId,
                            votes: 1,
                        }
                    }
                }
            }
        };
        const action = commentActions.downvoteComment(commentId, postId);
        const expectedState = {
            id: commentId,
            votes: 0
        };
        expect(reducer(initialState, action).posts[postId].comments[commentId]).toEqual(expectedState);
    });
    it('downvoting a comment should not decrement vote count when 0', () => {
        const postId = 2;
        const commentId = 1;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 0,
                    comments: {
                        "1": {
                            id: commentId,
                            votes: 0,
                        }
                    }
                }
            }
        };
        const action = commentActions.downvoteComment(commentId, postId);
        const expectedState = {
            id: commentId,
            votes: 0
        };
        expect(reducer(initialState, action).posts[postId].comments[commentId]).toEqual(expectedState);
    });
    it('delete a comment for the specified post', () => {
        const postId = 2;
        const commentId = 1;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 0,
                    comments: {
                        "1": {
                            id: commentId,
                            votes: 0,
                        }
                    }
                }
            }
        };
        const action = commentActions.deleteComment(commentId, postId);
        expect(reducer(initialState, action).posts[postId].comments).toEqual({});
    });

    it('gets comments for the specified post', () => {
        const comment = {
            id: 2,
            votes: 3,
            parentId: "3"
        };
        const initialState = {
            categories: {},
            posts: {
                "3": {
                    id: 3,
                    votes: 0,
                    category: "1",
                    comments: {
                        "3": {
                            ...comment,
                            id:3,
                        }
                    }
                }
            },
        };
        
        const action = commentActions.receiveComments("3", [comment]);
        const expectedState = {
            "3": {
                id: 3,
                category: "1",
                votes: 0,
                comments:{
                    "2": {
                        ...comment,
                    },
                    "3": {
                        ...comment,
                        id:3,
                    }
                }
            }
        };
        expect(reducer(initialState, action).posts).toEqual(expectedState);
    });
});