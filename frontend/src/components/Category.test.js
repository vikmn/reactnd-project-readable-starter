import React from 'react';
import { shallow } from 'enzyme'
import Category from './Category'
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

describe('given a category component', () => {
    it('to revisit these tests',() => expect(1).toBe(1));
    // const category = {
    //     name: "categoryA",
    //     path:"categoryA"
    // };

    // const categories = [category];
    // // const initialState = {
    // //     categories: {}
    // // };
    // fetchMock.get('http://localhost:3001/categories', { categories: categories });
    // const store = createStore(reducer);
    // const component = shallow(< Category store={store}/>);
    // component.update();
    // it('renders without crashing', () => {
    //     expect(component.exists()).toEqual(true);
    // });

    // it('renders the categories', () => {
    //     console.log(component.props());
    //     expect(component.dive().props().categories).toEqual(categories);
    //     expect(component.dive().find('.list-container').length).toEqual(1);
    // });
});