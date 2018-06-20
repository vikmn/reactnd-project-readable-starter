import actions, { CREATE_CATEGORY, CREATE_POST, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST, DELETE_CATEGORY } from './index'

describe('Category actions', () => {
    const categoryName = 'categoryA';
  
    it('Should create an action to add a category', () => {
      const expectedAction = {
        type: CREATE_CATEGORY,
        id: 1,
        name: categoryName,
      };
  
      expect(actions.createCategory(categoryName)).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a category', () => {
      const categoryId = 2;
      const expectedAction = {
        type: DELETE_CATEGORY,
        id: categoryId
        };
  
        expect(actions.deleteCategory(categoryId)).toEqual(expectedAction);
    });
});

describe('Post actions', () => {
    const post = {};

    it('Should create an action to add a post', () => {
      const expectedAction = {
        type: CREATE_POST,
        id: 1,
        post:post
      };
  
      expect(actions.createPost(post)).toEqual(expectedAction);
    });
    
    it('Should create an action to upvote a post', () => {

        const postId = 1;
        const expectedAction = {
                type: UPVOTE_POST,
                id: 1
            };
  
      expect(actions.upvotePost(postId)).toEqual(expectedAction);
    });

    it('Should create an action to down vote a post', () => {

        const postId = 1;
        const expectedAction = {
                type: DOWNVOTE_POST,
                id: 1
            };
  
      expect(actions.downvotePost(postId)).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a post', () => {

        const postId = 1;
        const expectedAction = {
                type: DELETE_POST,
                id: 1
            };
  
      expect(actions.deletePost(postId)).toEqual(expectedAction);
    });
});
