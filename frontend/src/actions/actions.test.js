import actions from './index'
import { CATEGORY, POST, COMMENT } from "./types";

describe('Category actions', () => {
    const categoryName = 'categoryA';
  
    it('Should create an action to add a category', () => {
      const expectedAction = {
        type: CATEGORY.CREATE,
        id: 1,
        name: categoryName,
      };
  
      expect(actions.createCategory(categoryName)).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a category', () => {
      const categoryId = 2;
      const expectedAction = {
        type: CATEGORY.DELETE,
        id: categoryId
        };
  
        expect(actions.deleteCategory(categoryId)).toEqual(expectedAction);
    });
});

describe('Post actions', () => {
    const post = {};

    it('Should create an action to add a post', () => {
      const expectedAction = {
        type: POST.CREATE,
        id: 1,
        post:post
      };
  
      expect(actions.createPost(post)).toEqual(expectedAction);
    });
    
    it('Should create an action to upvote a post', () => {

        const postId = 1;
        const expectedAction = {
                type: POST.UPVOTE,
                id: postId
            };
  
      expect(actions.upvotePost(postId)).toEqual(expectedAction);
    });

    it('Should create an action to down vote a post', () => {

        const postId = 1;
        const expectedAction = {
                type: POST.DOWNVOTE,
                id: postId
            };
  
      expect(actions.downvotePost(postId)).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a post', () => {

        const postId = 1;
        const expectedAction = {
                type: POST.DELETE,
                id: postId
            };
  
      expect(actions.deletePost(postId)).toEqual(expectedAction);
    });
});

describe('Comment actions', () => {
    const comment = {};

    it('Should create an action to add a comment', () => {
      const postId = 21;
      const expectedAction = {
        type: COMMENT.CREATE,
          id: 1,
        postId,
        comment
      };
  
      expect(actions.createComment(comment, postId)).toEqual(expectedAction);
    });
    
    it('Should create an action to upvote a comment', () => {

        const commentId = 1;
        const expectedAction = {
                type: COMMENT.UPVOTE,
                id: commentId
            };
  
      expect(actions.upvoteComment(commentId)).toEqual(expectedAction);
    });

    it('Should create an action to down vote a comment', () => {

        const commentId = 1;
        const expectedAction = {
                type: COMMENT.DOWNVOTE,
                id: commentId
            };
  
      expect(actions.downvoteComment(commentId)).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a comment', () => {

        const commentId = 1;
        const expectedAction = {
                type: COMMENT.DELETE,
                id: commentId
            };
  
      expect(actions.deleteComment(commentId)).toEqual(expectedAction);
    });
});
