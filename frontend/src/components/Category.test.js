import React from 'react';
import { mount } from 'enzyme'
import Category from './Category'

describe('', () => {

    const spy = jest.spyOn(Category.prototype, 'componentDidMount');
    const onLoadMock = jest.fn();
    const component = mount(< Category onLoad={onLoadMock} />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('renders the container element for categories', () => {
        expect(component.find('.list-container').length).toEqual(1);
    });

    it('verifies the component onLoad props is called', () => {
        expect(component.props().onLoad).toEqual(onLoadMock);
        expect(onLoadMock).toHaveBeenCalledTimes(1);
        expect(Category.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    });
})