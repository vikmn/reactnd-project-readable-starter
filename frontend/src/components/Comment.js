import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentActions } from '../actions';
import PropTypes from 'prop-types';
import { MdThumbUp, MdThumbsDown } from 'react-icons/lib/md';

export class Comment extends Component {

    state = {
        mode: "",
        body : ""
    }

    constructor(props) {
        super(props);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const { mode,comment } = this.props;
        this.setState({
            mode,
            body: comment.body
        });
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

    cancel() {
        this.setState({
            mode: "VIEW",
            body: this.props.comment.body
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        const commentDetails = this.props.comment;
        return (
            <div>
                {commentDetails && this.state.mode === "VIEW" &&
                    <div key={commentDetails.id}>
                    <input type="button" className="comment-edit" onClick={()=> this.setState({mode:"EDIT"})} value="EDIT COMMENT"/> 
                    <input type="button" className="comment-delete" onClick={() => this.deleteComment(commentDetails.id, commentDetails.postId)} value="DELETE" />
                    <div>{commentDetails.body}</div>
                    <div>{commentDetails.author}</div>
                </div>}
                {commentDetails && this.state.mode === "EDIT" &&
                <div key={commentDetails.id}>
                    <input className="comment-body" name="body" value={this.state.body} onChange={this.handleInputChange} />
                    <input className="comment-author" value={commentDetails.author} onChange={()=>{}} />
                    <div>{commentDetails.voteScore}</div>
                    <input type="image" className="comment-vote" onClick={() => this.upvote(commentDetails.id, commentDetails.postId)} />
                    <input type="image" className="comment-downVote" onClick={ () => this.downvote(commentDetails.id, commentDetails.postId) } />
                    <input type="button" className="comment-delete" onClick={() => this.deleteComment(commentDetails.id, commentDetails.postId)} value="DELETE"/>
                    <input type="button" className="comment-cancel" onClick={() => this.cancel() } value="CANCEL"/>
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
