import { CATEGORY, POST, COMMENT } from "./types";

const actions = {
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
    
    createComment(comment, postId) {
        return {
            type: COMMENT.CREATE,
            id: 1,
            postId,
            comment
        }
    },

    upvoteComment(commentId) {
        return {
            type: COMMENT.UPVOTE,
            id: commentId,
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
    },
};

export default actions;