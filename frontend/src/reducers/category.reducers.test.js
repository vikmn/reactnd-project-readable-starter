import { reducer } from './reducer';
import { categoryActions } from '../actions/.';
import { access } from 'fs';

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
        const category = { name: "1", path: "1" };
        const initialState = {
            categories: {},
            posts: {}
        };
        const categories = [{name:"1", path:"1"},{name:"2", path:"2"}]
        const action = categoryActions.receiveCategories(categories);
        const expectedState = {
            "1": {
                ...category
            },
            "2": {
                name: "2",
                path: "2"
            }
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