import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import App from './App';
import Category from './Category';

describe('default route for home page ', () => {
  const component = mount(<MemoryRouter><App/></MemoryRouter>);

  it('render the category page', () => {
    expect(component.exists()).toEqual(true);
    expect(component.find(Category).length).toEqual(1);
  });
});