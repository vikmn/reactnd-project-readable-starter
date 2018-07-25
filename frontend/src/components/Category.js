import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, getCategoryPosts } from '../actions';
import { Posts } from './Posts';

export class Category extends Component{

    componentDidMount() {
        const { dispatch } = this.props;
        console.log(dispatch);
        dispatch(getCategories());
    }

    getPosts = category => {
        this.props.dispatch(getCategoryPosts(category))
    }

    render() {
        return (
            <div className="list-container">
                {this.props.categories.map(category => (
                    <div key={category.name}>
                        <div key={category.name}>{category.name}</div>
                        <Posts category={category.name} loadPosts ={this.getPosts} />
                    </div>
                    
                ))}
            </div>
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