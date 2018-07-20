import { reducer } from './reducer';
import { categoryActions } from '../actions/.';

describe('Category Actions', () => {
    it('creates a category', () => {
        const initialState = {
            categories: {},
            posts: {}
        };
        const category = { id: 1, name: "categoryA" };
        const action = categoryActions.createCategory(category);
        const expectedState = category;
        expect(reducer(initialState, action).categories[category.id]).toEqual(expectedState);
    });
    it('gets all the categories', () => {
        const category = { id: 1, name: "categoryA" };
        const initialState = {
            categories: {
                "1": {
                    ...category
                },
                "2": {
                    id: 2,
                    name: "categoryB"
                }
            },
            posts: {}
        };
        const action = categoryActions.getCategories();
        const expectedState = {
           ...initialState.categories
        };
        expect(reducer(initialState, action).categories).toEqual(expectedState);
    });
    it('deletes the specified category', () => {
        const categoryId = 2;
        const initialState = {
            categories: {
                "2": {
                    id: categoryId,
                    name: "categoryA"
                }
            }
        };
        const action = categoryActions.deleteCategory(categoryId);
        expect(reducer(initialState, action).categories).toEqual({});
    });
});