import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';

class Category extends Component{

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getCategories())
    }

    render() {
        return (
            <ol className="list-container">
                {this.props.categories.map(category => (
                    <li key={category.name}>{category.name}</li>
                ))}
            </ol>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        categories: Object.keys(state.categories)
                .map(key => state.categories[key])
    })
};

export default connect(mapStateToProps)(Category);