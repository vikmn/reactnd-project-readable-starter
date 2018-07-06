import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    updateVote() { }
    
    deleteComment() { }

    render() {
        const commentDetails = this.props.comment;
        return (
            <div>
                {commentDetails &&
                <div>
                    <input className="comment-body" value={commentDetails.body} onChange={()=>{}} />
                    <input className="comment-author" value={commentDetails.author} onChange={()=>{}} />
                    <input className="comment-currentScore" value={commentDetails.currentScore} onChange={()=>{}} />
                    <input type="button" className="comment-vote" onClick={ this.updateVote } />
                    <input type="button" className="comment-delete" onClick={ this.deleteComment } />
                </div>}
            </div>
        );
    };
}

const mapStateToProps = (state) =>
    ({
        comment: {
            id: 999,
            body: "comment body goes here",
            author: "author-1",
            currentScore: 2,
            votes: 0
        }
    });

export default connect(mapStateToProps)(Comment);
