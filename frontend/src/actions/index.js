import { CATEGORY, POST, COMMENT } from "./types";
import ReadableApi from "../utils";

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
    getCategories(categories) {
        return {
            type: CATEGORY.ALL_CATEGORIES,
            categories
        }
    }
};

export const categoryThunkActions = {
    getAllCategories = () => dispatch => (
        ReadableApi.getAllCategories().
        then(categories=> dispatch(getCategories))
    )
}

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
