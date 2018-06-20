export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const CREATE_POST = "CREATE_POST";
export const UPVOTE_POST = "UPVOTE_POST";
export const DOWNVOTE_POST = "DOWNVOTE_POST";
export const DELETE_POST = "DELETE_POST";
const actions = {
    createCategory(name) {
        return {
            type: CREATE_CATEGORY,
            id: 1,
            name
        };
    },
    
    deleteCategory(categoryId) {
        return {
            type: DELETE_CATEGORY,
            id: categoryId,
        };
    },

    createPost(post) {
        return {
            type: CREATE_POST,
            id: 1,
            post
        }
    },

    upvotePost(postId) {
        return {
            type: UPVOTE_POST,
            id: postId,
        }
    },
    
    downvotePost(postId) {
        return {
            type: DOWNVOTE_POST,
            id: postId,
        }
    },
    
    deletePost(postId) {
        return {
            type: DELETE_POST,
            id: postId,
        }
    },
};

export default actions;