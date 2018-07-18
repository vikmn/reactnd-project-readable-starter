import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentActions } from '../actions';
import PropTypes from 'prop-types';
import { MdThumbUp, MdThumbsDown } from 'react-icons/lib/md';

export class Comment extends Component {

    constructor(props) {
        super(props);
    }

    upvote(commentId, postId) {
        this.props.upvote(commentId, postId);
     }
    
    downvote(commentId, postId) {
        this.props.downvote(commentId, postId);
     }

    deleteComment(commentId, postId) {
        this.props.delete(commentId, postId);
     }

    render() {
        const commentDetails = this.props.comment;
        return (
            <div>
                {commentDetails &&
                <div>
                    <input className="comment-body" value={commentDetails.body} onChange={()=>{}} />
                    <input className="comment-author" value={commentDetails.author} onChange={()=>{}} />
                    <input className="comment-currentScore" value={commentDetails.currentScore} onChange={()=>{}} />
                    <MdThumbUp type="image" className="comment-vote" onClick={() => this.upvote(commentDetails.id, commentDetails.postId)} />
                    <MdThumbsDown type="image" className="comment-downVote" onClick={ () => this.downvote(commentDetails.id, commentDetails.postId) } />
                    <input type="button" className="comment-delete" onClick={ () => this.deleteComment(commentDetails.id, commentDetails.postId) } />
                </div>}
            </div>
        );
    };
}
const propTypes = {
    postId: PropTypes.number.isRequired,
    commentId:  PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) =>
    state.posts[ownProps.postId].comments[ownProps.commentId] ? ({
        comment: {
            ...state.posts[ownProps.postId].comments[ownProps.commentId],
            postId: state.posts[ownProps.postId].id
        }
    }):({ comment:{}});

const mapDispatchToProps = dispatch => ({
    upvote: (commentId, postId) => dispatch(commentActions.upvoteComment(commentId, postId)),
    downvote: (commentId, postId) => dispatch(commentActions.downvoteComment(commentId,postId)),
    delete: (commentId, postId) => dispatch(commentActions.deleteComment(commentId,postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
