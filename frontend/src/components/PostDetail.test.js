import React from 'react';
import { mount, shallow } from 'enzyme';
import PostDetail from './PostDetail';

const postDetail = {title:"postTitle",body:"post body goes here",author:"author-1",currentScore:2,comments:[]};

describe('given a <PostDetail> component is mounted', () => {

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

    it('verifies the component state is populated', () => {
        expect(component.state().post).toEqual(postDetail);
    });
});

describe('<PostDetail> component on state update', () => {

    const component = shallow(< PostDetail onLoad={() => Promise.resolve({})} />);
    component.setState({ post: postDetail });

    it('renders the post details', () => {
        expect(component.find('.post-title').length).toEqual(1);
        expect(component.find('.post-commentCount').length).toEqual(1);
        expect(component.find('.post-author').length).toEqual(1);
        expect(component.find('.post-currentScore').length).toEqual(1);
        expect(component.find('.post-vote').length).toEqual(1);
        expect(component.find('.post-delete').length).toEqual(1);
    });

});