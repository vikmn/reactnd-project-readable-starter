import { POST } from '../actions/types'
import { reducer } from './reducer';

describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual({ posts: {} });
    });
});

describe('Create post when post does not exist', () => {
    it('should create a post', () => {

        const initialState = { posts: {} }; 
        const action = {
            type: POST.CREATE,
            id: 1,
            post: {
                id: 1,
                votes: 1,
            }
        };
        const expectedState = {
            ...action.post
        };
        expect(reducer(initialState, action).posts[action.id]).toEqual(expectedState);
    });

    it('upvoting an existing post should return updated post count', () => {
        const initialState = {
            posts: {
                "2": {
                    id: 2,
                    votes: 3
                }
            }
        };

        const action = {
            type: POST.UPVOTE,
            id: 2,
        };

        const expectedState = {
                id: action.id,
                votes: 4
        };
        expect(reducer(initialState, action).posts[action.id]).toEqual(expectedState);
    });
    
    it('downvoting a post should return decremented vote count', () => {
        const initialState = {
            posts: {
                "2": {
                    id: 2,
                    votes: 3
                }
            }
        };

        const action = {
            type: POST.DOWNVOTE,
            id: 2
        };

        const expectedState = {
                id: action.id,
                votes: 2
        };
        expect(reducer(initialState, action).posts[action.id]).toEqual(expectedState);
    });
    
    it('downvoting a post should not decrement vote count when 0', () => {
        const initialState = {
            posts: {
                "2": {
                    id: 2,
                    votes: 0
                }
            }
        };
        const action = {
            type: POST.DOWNVOTE,
            id: 2
        };

        const expectedState = {
                id: action.id,
                votes: 0
        };
        expect(reducer(initialState, action).posts[action.id]).toEqual(expectedState);
    });
});