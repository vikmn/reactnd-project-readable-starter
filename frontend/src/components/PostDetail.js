import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postActions, getCommentsForPost } from '../actions/index';
import { MdThumbUp, MdThumbsDown } from 'react-icons/lib/md';
import Comment from './Comment';

export class PostDetail extends Component {

    state = {
        mode: "VIEW"
    }

    constructor(props) {
        super(props);
        
        this.upVotePost = this.upVotePost.bind(this);
        this.downVotePost = this.downVotePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        const { getPostComments, postId } = this.props;
        getPostComments(postId)
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
        const { mode } = this.state;
        return (
            <div>
                {postDetails && mode === "VIEW" &&
                <div key={postDetails.id}>
                    <div>{postDetails.id}</div>
                    <div>{postDetails.title} </div>
                    <div> {postDetails.body} </div>
                    <div> {postDetails.author} </div>
                    {postDetails.comments.map(comment => (<Comment commentId={comment.id} postId={postDetails.id} key={comment.id}/> ))}
                </div>}
                {postDetails && mode === "EDIT" &&
                    <div key={postDetails.id}>
                        <input className="post-title" value={postDetails.title} onChange={()=>{}}/>
                        <input className="post-body" value={postDetails.body} onChange={()=>{}} />
                        <input className="post-author" value={postDetails.author} onChange={()=>{}} />
                        <input className="post-commentCount" value={postDetails.comments.length} onChange={()=>{}}/>
                        <input className="post-currentScore" value={postDetails.currentScore} onChange={()=>{}} />
                        <MdThumbUp type="image" className="post-vote" onClick={ () => this.upVotePost(postDetails.id) } />
                        <MdThumbsDown type="image" className="post-downVote" onClick={ () => this.downVotePost(postDetails.id) } />
                        <input type="button" className="post-delete" onClick={ () => this.deletePost(postDetails.id) } />
                    </div>
                }
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    console.log(Object.keys(state.posts[ownProps.postId].comments))
    return ({
        post: {
            ...state.posts[ownProps.postId],
            comments: Object.keys(state.posts[ownProps.postId].comments)
                .map(key => state.posts[ownProps.postId].comments[key])
        }
    });
}

const mapDispatchToProps = dispatch => ({
    getPostComments: postId => dispatch(getCommentsForPost(postId)),
    upvotePost: postId => dispatch(postActions.upvotePost(postId)),
    downVotePost: postId => dispatch(postActions.downvotePost(postId)),
    delete: postId => dispatch(postActions.deletePost(postId))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);