import { POST } from '../actions/types'
import { reducer, initialState } from './reducer';

describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
});

describe('Create post', () => {
    it('should return correct state', () => {
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
        expect(reducer(undefined, action).posts[action.id]).toEqual(expectedState);
    });

    it('upvoting a post should return updated post count', () => {
        const action = {
            type: POST.UPVOTE,
            id: 2,
            post: {
                votes: 1
            }
        };

        const expectedState = {
                id: action.id,
                votes: 4
        };
        expect(reducer(undefined, action).posts[action.id]).toEqual(expectedState);
    });
});