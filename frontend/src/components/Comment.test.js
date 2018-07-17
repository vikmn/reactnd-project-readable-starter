import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const commentId = 999;
const postId = 9999;
const comment = {
    id: commentId,
    body: "comment body goes here",
    author: "author-1",
    currentScore: 2,
    votes: 0,
};

const post = {
    id: postId,
    votes: 0,
    comments: {
        [commentId]: {
            ...comment
        }
    }
};

const initialState = {
    posts: {
        [postId]: {
            ...post
        }
    }
};

describe('given a <Comment> component is mounted', () => {

    const store = createStore(reducer,initialState);
    const component = shallow(< Comment store={store} postId= {postId} commentId={commentId} />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component populates the comment details', () => {
        expect(component.props().comment).toEqual({
            ...comment,
            postId: postId
        });
    });
});

describe('<Comment> component renders', () => {

    const store = createStore(reducer,initialState);
    const component = shallow(< Comment store={ store } postId= {postId} commentId={commentId} />);

    it('renders the comment details', () => {
        expect(component.dive().find('.comment-body').length).toEqual(1);
        expect(component.dive().find('.comment-author').length).toEqual(1);
        expect(component.dive().find('.comment-currentScore').length).toEqual(1);
    });
});

describe('<Comment> component on upvote click', () => {

    const initialState = {
        posts: {
            [postId]: {
                ...post,
                comments: {
                    ...post.comments,
                    [commentId]: {
                        ...post.comments[commentId],
                        votes: 2,
                    }
                }
            }
        }
    };

    const store = createStore(reducer, initialState);
    const component = shallow(< Comment store={ store } postId= {postId} commentId={commentId} />);

    it('handles voting on vote click', () => {
        component.dive().find('.comment-vote').simulate('click');
        component.update();
        expect(component.props().comment.votes).toEqual(3);
    });
});

describe('<Comment> component on downvote click', () => {

    const initialState = {
        posts: {
            [postId]: {
                ...post,
                comments: {
                    ...post.comments,
                    [commentId]: {
                        ...post.comments[commentId],
                        votes: 2,
                    }
                }
            }
        }
    };

    const store = createStore(reducer, initialState);
    const component = shallow(< Comment store={ store } postId= {postId} commentId={commentId} />);

    it('handles voting on vote click', () => {
        component.dive().find('.comment-downVote').simulate('click');
        component.update();
        expect(component.props().comment.votes).toEqual(1);
    });
});

describe('<Comment> component on delete comment', () => {

    const store = createStore(reducer, initialState);
    const component = shallow(< Comment store={ store } postId= {postId} commentId={commentId} />);

    it('handles delete on comment', () => {
        component.dive().find('.comment-delete').simulate('click');
        component.update();
        expect(component.props().comment).toEqual({});
    });
});