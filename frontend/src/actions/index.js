import { CATEGORY, POST, COMMENT } from "./types";

export const categoryActions = {
    createCategory(name) {
        return {
            type: CATEGORY.CREATE,
            id: 1,
            name
        };
    },
    
    deleteCategory(categoryId) {
        return {
            type: CATEGORY.DELETE,
            id: categoryId,
        };
    },

};

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
    
    downvoteComment(commentId) {
        return {
            type: COMMENT.DOWNVOTE,
            id: commentId,
        }
    },
    
    deleteComment(commentId) {
        return {
            type: COMMENT.DELETE,
            id: commentId,
        }
    }  
};
