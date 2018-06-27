import { reducer } from './reducer';
import { postActions, commentActions } from '../actions/.';

describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual({ posts: {} });
    });
});

describe('Post Actions', () => {
    it('creates a post', () => {

        const initialState = { posts: {} }; 
        const action = postActions.createPost({
                id: 1,
                votes: 1,
        });

        const expectedState = {
            ...action.post
        };

        expect(reducer(initialState, action).posts[action.id]).toEqual(expectedState);
    });

    it('upvoting an existing post returns updated post count', () => {

        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3
                }
            }
        };

        const action = postActions.upvotePost(postId);

        const expectedState = {
                id: postId,
                votes: 4
        };

        expect(reducer(initialState, action).posts[postId]).toEqual(expectedState);
    });

    it('downvoting a post returns decremented vote count', () => {

        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3
                }
            }
        };
        const action = postActions.downvotePost(postId);

        const expectedState = {
                id: postId,
                votes: 2
        };

        expect(reducer(initialState, action).posts[postId]).toEqual(expectedState);
    });

    it('downvoting a post returns 0 when existing vote count is 0', () => {
        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 0
                }
            }
        };
        const action = postActions.downvotePost(postId);

        const expectedState = {
                id: postId,
                votes: 0
        };

        expect(reducer(initialState, action).posts[postId]).toEqual(expectedState);
    });
});

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

        const action = commentActions.upvoteComment(commentId,postId);

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
});