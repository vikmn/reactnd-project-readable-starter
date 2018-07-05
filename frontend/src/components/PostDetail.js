import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component {

    constructor(props) {
        super(props);
    }

    updateVote() { }
    
    deletePost() { }

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
                    <input type="button" className="post-vote" onClick={ this.updateVote } />
                    <input type="button" className="post-delete" onClick={ this.deletePost } />
                </div>}
            </div>
        );
    };
}

const mapStateToProps = (state) =>
    ({
        post: {
            title: "postTitle",
            body: "post body goes here",
            author: "author-1",
            currentScore: 2,
            comments: []
        }
    });

export default connect(mapStateToProps)(PostDetail);