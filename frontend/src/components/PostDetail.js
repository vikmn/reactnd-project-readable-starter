import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { post: null };
    }

    componentDidMount() {
        this.props.onLoad()
            .then(result => {
                this.setState({ post: result.data });
            })
    }

    render() {
        return (
            <div>
                {this.state.post &&
                <div>
                    <input className="post-title" value={this.state.post.title} onChange={()=>{}}/>
                    <input className="post-body" value={this.state.post.body} onChange={()=>{}} />
                    <input className="post-author" value={this.state.post.author} onChange={()=>{}} />
                    <input className="post-commentCount" value={this.state.post.comments.length} onChange={()=>{}}/>
                    <input className="post-currentScore" value={this.state.post.currentScore} onChange={()=>{}} />
                    <input type="button" className="post-vote" />
                    <input type="button" className="post-delete" />
                </div>}
            </div>
        );
    };
}
PostDetail.propTypes = {
    onLoad : PropTypes.func
}

export default PostDetail;