import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentActions } from '../actions';

class Comment extends Component {

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
                    <input type="button" className="comment-vote" onClick={() => this.upvote(commentDetails.id, commentDetails.postId)} />
                    <input type="button" className="comment-downVote" onClick={ () => this.downvote(commentDetails.id, commentDetails.postId) } />
                    <input type="button" className="comment-delete" onClick={ () => this.deleteComment(commentDetails.id, commentDetails.postId) } />
                </div>}
            </div>
        );
    };
}

const mapStateToProps = (state) =>
    state.posts["9999"].comments["999"] ? ({
        comment: {
            ...state.posts["9999"].comments["999"],
            postId: state.posts["9999"].id
        }
    }):({ comment:{}});

const mapDispatchToProps = dispatch => ({
    upvote: (commentId, postId) => dispatch(commentActions.upvoteComment(commentId, postId)),
    downvote: (commentId, postId) => dispatch(commentActions.downvoteComment(commentId,postId)),
    delete: (commentId, postId) => dispatch(commentActions.deleteComment(commentId,postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
