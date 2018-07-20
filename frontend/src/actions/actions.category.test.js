import { categoryActions } from './index';
import { CATEGORY } from "./types";
describe('Category actions', () => {
    const category = { name: "categoryA" };

    it('Should create an action to add a category', () => {
        const expectedAction = {
            type: CATEGORY.CREATE,
            id: 1,
            category
        };
        expect(categoryActions.createCategory(category)).toEqual(expectedAction);
    });

    it('Should get the categories for post', () => {
        const expectedAction = {
            type: CATEGORY.ALL_CATEGORIES,
        };
        expect(categoryActions.getCategories()).toEqual(expectedAction);
    });
    
    it('Should create an action to delete a category', () => {
        const categoryId = 2;
        const expectedAction = {
            type: CATEGORY.DELETE,
            id: categoryId
        };
        expect(categoryActions.deleteCategory(categoryId)).toEqual(expectedAction);
    });
});