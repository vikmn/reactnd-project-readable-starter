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
        return ( < h1 / > );
    };
}
PostDetail.propTypes = {
    onLoad : PropTypes.func
}

export default PostDetail;