import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Props', this.props);
        return (
            <ol className="list-container">
                {this.props.categories.map(category => (
                    <li key={category.name}>{category.name}</li>
                ))}
            </ol>
        );
    }
}

const mapStateToProps = (state) =>
    ({
        categories: Object.keys(state.categories).map(key => state.categories[key])
    });

export default connect(mapStateToProps)(Category);