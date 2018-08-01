import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';
import { getCategoryPosts } from '../actions';

export class Posts extends Component{

    componentDidMount() {
       this.getPosts(this.props.category)
    }

    getPosts = category => {
        this.props.dispatch(getCategoryPosts(category))
    }

    render() {
        return (
            <div className="list-container">
                {this.props.posts.map(post => (
                    <PostDetail key={post.id} postId={post.id}/>
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

export default connect(mapStateToProps)(Posts);