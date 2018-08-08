import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';
import { getCategoryPosts } from '../actions';

export class Posts extends Component{

    componentDidMount() {
        const { getPosts, category } = this.props;
       getPosts(category)
    }

    render() {
        return (
            <div className="list-container">
                {this.props.posts.map(post => (
                    <PostDetail key={post.id} postId={post.id} mode={"VIEW"}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ownProps.category ?({
        posts:Object.keys(state.posts)
            .map(key => state.posts[key])
            .filter(post => post.category === ownProps.category)
    }) :
    ({
        posts:Object.keys(state.posts)
            .map(key => state.posts[key])
    })
};

const mapDispatchToProps = dispatch => ({
    getPosts: category => dispatch(getCategoryPosts(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);