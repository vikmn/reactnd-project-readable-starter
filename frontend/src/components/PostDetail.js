import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postActions, getCommentsForPost } from '../actions/index';
import { MdThumbUp, MdThumbsDown } from 'react-icons/lib/md';
import Comment from './Comment';

export class PostDetail extends Component {

    state = {
        mode: "",
        title: "",
        body : "",
    }

    constructor(props) {
        super(props);
        this.upVotePost = this.upVotePost.bind(this);
        this.downVotePost = this.downVotePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.cancel = this.cancel.bind(this);
        this.savePost = this.savePost.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const { getPostComments, postId, mode, post } = this.props;
        this.setState({
            mode,
            title: post.title,
            body: post.body
        });
        getPostComments(postId);
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

    savePost(postId) {
        // this.props.delete(postId);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    cancel() {
        this.setState({
            mode: "VIEW",
            title: this.props.post.title,
            body: this.props.post.body
        });
    }

    render() {
        const postDetails = this.props.post;
        const { mode } = this.state;
        return (
            <div>
                {postDetails && mode === "VIEW" &&
                    <div key={postDetails.id}>
                    <input type="button" className="comment-edit" onClick={()=> this.setState({mode:"EDIT"})} value="EDIT POST"/> 
                    <input type="button" className="post-delete" onClick={() => this.deletePost(postDetails.id)} value="DELETE" />
                    <div>{postDetails.id}</div>
                    <div>{postDetails.title} </div>
                    <div>{postDetails.body} </div>
                    <div>{postDetails.author} </div>
                </div>}
                {postDetails && mode === "EDIT" &&
                    <div key={postDetails.id}>
                    <input type="text" className="post-title" name="title" value={this.state.title} onChange={this.handleInputChange } />
                    <input type="text" className="post-body" name="body" value={this.state.body} onChange={this.handleInputChange } />
                    <input type="text" className="post-author" value={postDetails.author} onChange={()=>{}} />
                    <div>{postDetails.voteScore} </div>
                    <input type="image" className="post-vote" onClick={ () => this.upVotePost(postDetails.id) } />
                    <input type="image" className="post-downVote" onClick={ () => this.downVotePost(postDetails.id) } />
                    <input type="button" className="post-save" onClick={() => this.deletePost(postDetails.id)} value="SAVE" />
                    <input type="button" className="post-delete" onClick={() => this.deletePost(postDetails.id)} value="DELETE" />
                    <input type="button" className="post-cancel" onClick={() => this.setState({ mode: "VIEW" })} value="CANCEL" />
                    </div>
                }
                {postDetails &&
                    <div>
                    <div>{postDetails.commentCount} </div>
                        {postDetails.comments.map(comment => (<Comment commentId={comment.id} postId={postDetails.id} key={comment.id} mode={"VIEW"} />))}
                    </div>
                }
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
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