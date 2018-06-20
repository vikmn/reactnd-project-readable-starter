import { } from '../actions/index'
import { } from '../actions/types'
import { reducer, initialState } from './reducer';
describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });