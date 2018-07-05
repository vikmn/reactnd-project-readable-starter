import React from 'react';
import { shallow } from 'enzyme'
import Category from './Category'
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

describe('given a category component', () => {

    const category = {
        id: 9999,
        name: "categoryA"
    };

    const categories = [category];
    const initialState = {
        categories: {
            "9999": category
        }
    };
    const store = createStore(() => reducer(initialState, {}));
    const component = shallow(< Category store={store}/>);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('renders the categories', () => {
        expect(component.props().categories).toEqual(categories);
        expect(component.dive().find('.list-container').length).toEqual(1);
    });
});