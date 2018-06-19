import React from 'react';
import { mount } from 'enzyme'
import Category from './Category'

describe('given a category component', () => {

    const categories = [{ name: 'category1' }, { name: 'category2' }];
    const componentDidMountSpy = jest.spyOn(Category.prototype, 'componentDidMount');
    const onLoadMock = jest.fn()
        .mockImplementationOnce(() => Promise.resolve({ data: categories }));
    const component = mount(< Category onLoad={ onLoadMock } />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component props are set up', () => {
        expect(component.props().onLoad).toEqual(onLoadMock);
        expect(onLoadMock).toHaveBeenCalledTimes(1);
        expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it('renders the categories', () => {
        expect(component.state('categories')).toEqual(categories);
        expect(component.find('.list-container').length).toEqual(1);
    });
});