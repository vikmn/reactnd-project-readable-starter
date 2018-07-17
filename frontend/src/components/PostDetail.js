import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postActions } from '../actions/index';
import PropTypes from 'prop-types';

export class PostDetail extends Component {

    constructor(props) {
        super(props);

        this.upVotePost = this.upVotePost.bind(this);
        this.downVotePost = this.downVotePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    upVotePost(postId) { 
        this.props.upvotePost(postId);
    }
    
    downVotePost(postId) { 
        this.props.downVotePost(postId);
    }
    
    deletePost(postId) {
        this.props.delete(postId);
    }

    render() {
        const postDetails = this.props.post;
        return (
            <div>
                {postDetails &&
                <div>
                    <input className="post-title" value={postDetails.title} onChange={()=>{}}/>
                    <input className="post-body" value={postDetails.body} onChange={()=>{}} />
                    <input className="post-author" value={postDetails.author} onChange={()=>{}} />
                    <input className="post-commentCount" value={postDetails.comments.length} onChange={()=>{}}/>
                    <input className="post-currentScore" value={postDetails.currentScore} onChange={()=>{}} />
                    <input type="button" className="post-vote" onClick={ () => this.upVotePost(postDetails.id) } />
                    <input type="button" className="post-downVote" onClick={ () => this.downVotePost(postDetails.id) } />
                    <input type="button" className="post-delete" onClick={ () => this.deletePost(postDetails.id) } />
                </div>}
            </div>
        );
    };
}
const propTypes = {
    postId: PropTypes.number.isRequired
}
const mapStateToProps = (state, ownProps) =>

    ({
        post: {
            ...state.posts[ownProps.postId]
        }
    });

const mapDispatchToProps = dispatch => ({
    upvotePost: postId => dispatch(postActions.upvotePost(postId)),
    downVotePost: postId => dispatch(postActions.downvotePost(postId)),
    delete: postId => dispatch(postActions.deletePost(postId))
});


export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);