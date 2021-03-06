import { CATEGORY, POST, COMMENT } from "./types";
import { fetchAllCategories, fetchPostsForCategory, fetchPostComments }from "../utils/ReadableApi";

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
    fetchAllCategories()
        .then(data => {
            dispatch(categoryActions.receiveCategories(data.categories))
        })
);

export const getCategoryPosts = category => dispatch => (
    fetchPostsForCategory(category)
        .then(data => {
            dispatch(postActions.receivePosts(category, data));
        })
);

export const getCommentsForPost = post => dispatch => (
    fetchPostComments(post)
        .then(data => {
            dispatch(commentActions.receiveComments(post, data));
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
    updatePost(post) {
        return {
            type: POST.UPDATE,
            id: post.id,
            post
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
    },
    receiveComments(post, comments) {
        return {
            type: COMMENT.POST_COMMENTS,
            post,
            comments
        }
    }
};
