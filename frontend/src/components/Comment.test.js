import React from 'react';
import { mount, shallow } from 'enzyme';
import Comment from './Comment';

const comment = {body:"comment body goes here",author:"author-1",currentScore:2};

describe('given a <Comment> component is mounted', () => {

    const componentDidMountSpy = jest.spyOn(Comment.prototype, 'componentDidMount');
    const onLoadMock = jest.fn()
        .mockImplementation(() => Promise.resolve({ data: comment }));
    const component = mount(< Comment onLoad={ onLoadMock } />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component props are set up', () => {
        expect(component.props().onLoad).toEqual(onLoadMock);
        expect(onLoadMock).toHaveBeenCalled();
        expect(componentDidMountSpy).toHaveBeenCalled();
    });

    it('verifies the component populates the comment details', () => {
        expect(component.state().comment).toEqual(comment);
    });
});

describe('<Comment> component renders', () => {

    const component = shallow(< Comment onLoad={() => Promise.resolve({})} />);
    component.setState({ comment: comment });

    it('renders the comment details', () => {
        expect(component.find('.comment-body').length).toEqual(1);
        expect(component.find('.comment-author').length).toEqual(1);
        expect(component.find('.comment-currentScore').length).toEqual(1);
    });
});

describe('<Comment> component on vote click', () => {
    const voteSpy = jest.spyOn(Comment.prototype, 'updateVote');

    const component = shallow(< Comment onLoad={() => Promise.resolve({})} />);
    component.setState({ comment: comment });

    it('handles voting on vote click', () => {
        component.find('.comment-vote').simulate('click');
        expect(voteSpy).toHaveBeenCalled();
    });
});

describe('<Comment> component on delete comment', () => {
    const deleteSpy = jest.spyOn(Comment.prototype, 'deleteComment');

    const component = shallow(< Comment onLoad={() => Promise.resolve({})} />);
    component.setState({ comment: comment });

    it('handles delete on comment', () => {
        component.find('.comment-delete').simulate('click');
        expect(deleteSpy).toHaveBeenCalled();
     });
});