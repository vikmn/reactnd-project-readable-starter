import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories, getCategoryPosts } from '../actions';
import Posts from './Posts';

export class Category extends Component{

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getCategories());
    }



    render() {
        const { match: { params } } = this.props;
        return (
            <div className="list-container">
                {this.props.categories.map(category => (
                    <div key={category.name}>
                        <Link to={`/${category.name}`}>{category.name}</Link>
                    </div>
                ))}
                <div>{params.category}</div>
                <Posts category={params.category}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match: { params } } = ownProps;
    return ({
        categories: Object.keys(state.categories)
            .map(key =>
                ({
                    ...state.categories[key],
                    posts: Object.keys(state.posts)
                        .map(key => state.posts[key])
                        .filter(post  => post.category===key)
                }
                )),
        // posts: Object.keys(state.posts)
        //     .map(key => state.posts[key])
        //     .filter(post => post.category === params.category),
    })
};

export default connect(mapStateToProps)(Category);