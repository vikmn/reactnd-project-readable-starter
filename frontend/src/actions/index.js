import { CATEGORY, POST, COMMENT } from "./types";
import { getAllCategories, getPostsForCategory, getAllPosts }from "../utils/ReadableApi";

export const categoryActions = {
    createCategory(category) {
        return {
            type: CATEGORY.CREATE,
            id: 1,
            category
        };
    },

    deleteCategory(categoryId) {
        return {
            type: CATEGORY.DELETE,
            id: categoryId,
        };
    },

    receiveCategories(categories) {
        return {
            type: CATEGORY.ALL_CATEGORIES,
            categories
        }
    }
};

export const getCategories = () => dispatch => (
    getAllCategories()
        .then(data => {
            dispatch(categoryActions.receiveCategories(data.categories))
        })
);

export const getCategoryPosts = category => dispatch => (
    getPostsForCategory(category)
        .then(data => {
            console.log(data);
            dispatch(postActions.receivePosts("react",[]))
        })
);


export const postActions = {

    createPost(post) {
        return {
            type: POST.CREATE,
            id: 1,
            post
        }
    },

    upvotePost(postId) {
        return {
            type: POST.UPVOTE,
            id: postId,
        }
    },
    
    downvotePost(postId) {
        return {
            type: POST.DOWNVOTE,
            id: postId,
        }
    },
    
    deletePost(postId) {
        return {
            type: POST.DELETE,
            id: postId,
        }
    },

    receivePosts(category, posts) {
        return {
            type: POST.CATEGORY_POSTS,
            category,
            posts
        }
    }
};

export const commentActions = {

    createComment(comment, postId) {
        return {
            type: COMMENT.CREATE,
            id: 1,
            postId,
            comment
        }
    },

    upvoteComment(commentId, postId) {
        return {
            type: COMMENT.UPVOTE,
            id: commentId,
            postId
        }
    },
    
    downvoteComment(commentId, postId) {
        return {
            type: COMMENT.DOWNVOTE,
            id: commentId,
            postId
        }
    },

    deleteComment(commentId, postId) {
        return {
            type: COMMENT.DELETE,
            id: commentId,
            postId
        }
    }  
};
