import React from 'react';
import { mount, shallow } from 'enzyme';
import PostDetail from './PostDetail';

const postDetail = {title:"postTitle",body:"post body goes here",author:"author-1",currentScore:2,comments:[]};

describe('given a <PostDetail> component is mounted', () => {

    const componentDidMountSpy = jest.spyOn(PostDetail.prototype, 'componentDidMount');
    const onLoadMock = jest.fn()
        .mockImplementation(() => Promise.resolve({ data: postDetail }));
    const component = mount(< PostDetail onLoad={ onLoadMock } />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component props are set up', () => {
        expect(component.props().onLoad).toEqual(onLoadMock);
        expect(onLoadMock).toHaveBeenCalled();
        expect(componentDidMountSpy).toHaveBeenCalled();
    });

    it('verifies the component populates the post details', () => {
        expect(component.state().post).toEqual(postDetail);
    });
});

describe('<PostDetail> component renders', () => {

    const component = shallow(< PostDetail onLoad={() => Promise.resolve({})} />);
    component.setState({ post: postDetail });

    it('renders the post details', () => {
        expect(component.find('.post-title').length).toEqual(1);
        expect(component.find('.post-commentCount').length).toEqual(1);
        expect(component.find('.post-author').length).toEqual(1);
        expect(component.find('.post-currentScore').length).toEqual(1);
    });
});

describe('<PostDetail> component on vote click', () => {
    const voteSpy = jest.spyOn(PostDetail.prototype, 'updateVote');

    const component = shallow(< PostDetail onLoad={() => Promise.resolve({})} />);
    component.setState({ post: postDetail });

    it('handles voting on vote click', () => {
        component.find('.post-vote').simulate('click');
        expect(voteSpy).toHaveBeenCalled();
    });
});

describe('<PostDetail> component on delete post', () => {
    const deleteSpy = jest.spyOn(PostDetail.prototype, 'deletePost');

    const component = shallow(< PostDetail onLoad={() => Promise.resolve({})} />);
    component.setState({ post: postDetail });

    it('handles delete on post', () => {
        component.find('.post-delete').simulate('click');
        expect(deleteSpy).toHaveBeenCalled();
     });
});