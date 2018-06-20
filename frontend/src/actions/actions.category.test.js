import { categoryActions } from './index';
import { CATEGORY } from "./types";
describe('Category actions', () => {
    const categoryName = 'categoryA';
    it('Should create an action to add a category', () => {
        const expectedAction = {
            type: CATEGORY.CREATE,
            id: 1,
            name: categoryName,
        };
        expect(categoryActions.createCategory(categoryName)).toEqual(expectedAction);
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