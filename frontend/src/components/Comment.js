import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = { comment: null };
    }

    componentDidMount() {
        this.props.onLoad()
            .then(result => {
                this.setState({ comment: result.data });
            })
    }

    updateVote() { }
    
    deleteComment() { }

    render() {
        return (
            <div>
                {this.state.comment &&
                <div>
                    <input className="comment-body" value={this.state.comment.body} onChange={()=>{}} />
                    <input className="comment-author" value={this.state.comment.author} onChange={()=>{}} />
                    <input className="comment-currentScore" value={this.state.comment.currentScore} onChange={()=>{}} />
                    <input type="button" className="comment-vote" onClick={ this.updateVote } />
                    <input type="button" className="comment-delete" onClick={ this.deleteComment } />
                </div>}
            </div>
        );
    };
}
Comment.propTypes = {
    onLoad : PropTypes.func
}

export default Comment;