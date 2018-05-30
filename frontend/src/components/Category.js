import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Category extends Component{
    constructor(props) {
        super(props);
        this.state = { categories:[] };
    }
    
    componentDidMount() {
        this.props.onLoad();
        // this.props.onLoad()
        //     .then(result => {
        //         this.setState({ categories: [ "test1","test2"]})
        //     });
    }

    render() {
        return (
            <ol className="list-container">
                {/* {this.state.categories.map(category => (
                    <li key={category}/>
                ))} */}
            </ol>
        );
    }
}
Category.propTypes = {
    onLoad: PropTypes.func
  };
export default Category;