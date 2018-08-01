import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostDetail } from './PostDetail';

export class Posts extends Component{

    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        return (
            <div className="list-container">
                {this.props.posts.map(post => (
                    <PostDetail post={post} key={post.id}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        posts:Object.keys(state.posts)
        .map(key => state.posts[key])
    })
};

export default connect(mapStateToProps)(Posts);