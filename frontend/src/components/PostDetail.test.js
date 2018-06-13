import React from 'react';
import { mount } from 'enzyme';
import PostDetail from './PostDetail';

describe('given a category component', () => {

    const postDetail = {title:"postTitle",body:"post body goes here",author:"author-1",currentScore:2};
    const spy = jest.spyOn(PostDetail.prototype, 'componentDidMount');
    const onLoadMock = jest.fn()
        .mockImplementation(() => Promise.resolve({ data: postDetail }));
    const component = mount(< PostDetail onLoad={ onLoadMock } />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component props are set up', () => {
        expect(component.props().onLoad).toEqual(onLoadMock);
        expect(onLoadMock).toHaveBeenCalled();
        expect(PostDetail.prototype.componentDidMount).toHaveBeenCalled();
    });

});