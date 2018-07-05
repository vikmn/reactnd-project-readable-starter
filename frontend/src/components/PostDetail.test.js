import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from './PostDetail';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const postDetail = {title:"postTitle",body:"post body goes here",author:"author-1",currentScore:2,comments:[]};

describe('given a <PostDetail> component is mounted', () => {

    const store = createStore(reducer);

    const component = shallow(< PostDetail store={store}/>);

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('verifies the component populates the post details', () => {
        expect(component.props().post).toEqual(postDetail);
    });
});

describe('<PostDetail> component renders', () => {

    const store = createStore(reducer);

    const component = shallow(< PostDetail store={store} />);

    it('renders the post details', () => {
        expect(component.dive().find('.post-title').length).toEqual(1);
        expect(component.dive().find('.post-author').length).toEqual(1);
        expect(component.dive().find('.post-currentScore').length).toEqual(1);
        expect(component.dive().find('.post-commentCount').length).toEqual(1);
    });
});

describe('<PostDetail> component on vote click', () => {

    const store = createStore(reducer);
    const component = shallow(< PostDetail store={store} />);

    it('handles voting on vote click', () => {
        component.dive().find('.post-vote').simulate('click');
    });
});

describe('<PostDetail> component on delete post', () => {

    const store = createStore(reducer);
    const component = shallow(< PostDetail store={store} />);

    it('handles delete on post', () => {
        component.dive().find('.post-delete').simulate('click');
     });
});