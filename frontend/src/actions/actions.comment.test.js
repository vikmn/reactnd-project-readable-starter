import { commentActions } from './index'
import { COMMENT } from "./types";

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
  
      expect(commentActions.createComment(comment, postId)).toEqual(expectedAction);
    });
    
    it('Should create an action to upvote a comment', () => {

        const commentId = 1;
      const postId = 2;
        const expectedAction = {
          type: COMMENT.UPVOTE,
          id: commentId,
          postId: postId,
      };

      expect(commentActions.upvoteComment(commentId, postId)).toEqual(expectedAction);
    });

    it('Should create an action to down vote a comment', () => {

        const commentId = 1;
        const expectedAction = {
                type: COMMENT.DOWNVOTE,
                id: commentId
            };
  
      expect(commentActions.downvoteComment(commentId)).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a comment', () => {

        const commentId = 1;
        const expectedAction = {
                type: COMMENT.DELETE,
                id: commentId
            };
  
      expect(commentActions.deleteComment(commentId)).toEqual(expectedAction);
    });
});
