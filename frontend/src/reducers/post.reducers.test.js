import { reducer } from './reducer';
import { postActions } from '../actions/.';

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

    it('deletes the specified post', () => {
        const postId = 2;

        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 0,
                    comments: { }
                }
            }
        };

        const action = postActions.deletePost(postId);

        expect(reducer(initialState, action).posts).toEqual({});
    });
});