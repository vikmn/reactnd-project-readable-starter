import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const comment = {
    id: 999,
    body: "comment body goes here",
    author: "author-1",
    currentScore: 2,
    votes: 0,
};

describe('given a <Comment> component is mounted', () => {

    const initialState = {
        posts: {
            "9999": {
                id: 9999,
                votes: 0,
                comments: {
                    "999": {
                        ...comment
                    }
                }
            }
        }
    };
    const store = createStore(reducer,initialState);
    const component = shallow(< Comment store={ store } />);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component populates the comment details', () => {
        expect(component.props().comment).toEqual({
            ...comment,
            postId: 9999
        });
    });
});

describe('<Comment> component renders', () => {

    const initialState = {
        posts: {
            "9999": {
                id: 9999,
                votes: 0,
                comments: {
                    "999": {
                        ...comment,
                    }
                }
            }
        }
    };

    const store = createStore(reducer,initialState);
    const component = shallow(< Comment store={ store } />);

    it('renders the comment details', () => {
        expect(component.dive().find('.comment-body').length).toEqual(1);
        expect(component.dive().find('.comment-author').length).toEqual(1);
        expect(component.dive().find('.comment-currentScore').length).toEqual(1);
    });
});

describe('<Comment> component on upvote click', () => {

    const initialState = {
        posts: {
            "9999": {
                id: 9999,
                votes: 0,
                comments: {
                    "999": {
                        ...comment,
                        votes: 2,
                    }
                }
            }
        }
    };

    const store = createStore(reducer, initialState);
    const component = shallow(< Comment store={ store } />);

    it('handles voting on vote click', () => {
        component.dive().find('.comment-vote').simulate('click');
        component.update();
        expect(component.props().comment.votes).toEqual(3);
    });
});

describe('<Comment> component on downvote click', () => {

    const initialState = {
        posts: {
            "9999": {
                id: 9999,
                votes: 0,
                comments: {
                    "999": {
                        ...comment,
                        votes: 2,
                    }
                }
            }
        }
    };

    const store = createStore(reducer, initialState);
    const component = shallow(< Comment store={ store } />);

    it('handles voting on vote click', () => {
        component.dive().find('.comment-downVote').simulate('click');
        component.update();
        expect(component.props().comment.votes).toEqual(1);
    });
});

describe('<Comment> component on delete comment', () => {

    const initialState = {
        posts: {
            "9999": {
                id: 9999,
                votes: 0,
                comments: {
                    "999": {
                        ...comment,
                        votes: 3
                    }
                }
            }
        }
    };

    const store = createStore(reducer, initialState);
    const component = shallow(< Comment store={ store } />);

    it('handles delete on comment', () => {
        component.dive().find('.comment-delete').simulate('click');
        component.update();
        expect(component.props().comment).toEqual({});
    });
});