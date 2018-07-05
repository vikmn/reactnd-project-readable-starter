import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import App from './App';
import Category from './Category';
import { createStore } from 'redux';
import { reducer } from '../reducers/reducer';
import { Provider } from 'react-redux';


describe('default route for home page ', () => {
  const store = createStore(() => reducer(undefined, {}));
  const component = mount(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);

  it('render the category page', () => {
    expect(component.exists()).toEqual(true);
    expect(component.find(Category).length).toEqual(1);
  });
});