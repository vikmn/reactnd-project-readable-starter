import { postActions } from './index';
import { POST } from "./types";
describe('Post actions', () => {
    const post = {};
    it('Should create an action to add a post', () => {
        const expectedAction = {
            type: POST.CREATE,
            id: 1,
            post: post
        };
        expect(postActions.createPost(post)).toEqual(expectedAction);
    });
    it('Should create an action to upvote a post', () => {
        const postId = 1;
        const expectedAction = {
            type: POST.UPVOTE,
            id: postId
        };
        expect(postActions.upvotePost(postId)).toEqual(expectedAction);
    });

    it('Should create an action to down vote a post', () => {
        const postId = 1;
        const expectedAction = {
            type: POST.DOWNVOTE,
            id: postId
        };
        expect(postActions.downvotePost(postId)).toEqual(expectedAction);
    });

    it('Should create an action to delete a post', () => {
        const postId = 1;
        const expectedAction = {
            type: POST.DELETE,
            id: postId
        };
        expect(postActions.deletePost(postId)).toEqual(expectedAction);
    });

    it('Should get a list of posts for the specified category', () => {
        const category = { name: "categoryA", path: "categoryA" };
        const expectedAction = {
            type: POST.CATEGORY_POSTS,
            category: category,
            posts:[post]
        };
        expect(postActions.receivePosts(category, [post])).toEqual(expectedAction);
    });

});