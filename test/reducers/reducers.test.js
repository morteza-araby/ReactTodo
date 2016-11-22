import expect from 'expect'
import df from 'deep-freeze-strict'
import searchTextReducer from 'searchTextReducer'
import showCompletedReducer from 'showCompletedReducer'
import todosReducer from 'todosReducer'
import authReducer from 'authReducer'

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }

            var res = searchTextReducer(df(''), df(action))

            expect(res).toEqual(action.searchText)
        })
    })

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }

            var res = showCompletedReducer(df(false), df(action))

            expect(res).toEqual(true)
        })
    })

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'Walk the dog',
                    completed: false,
                    createdAt: 923876
                }
            }

            var res = todosReducer(df([]), df(action))

            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(action.todo)
        })

        it('should toggle todo', () => {
            var todos = [{
                id: 123,
                text: 'something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }]
            var action = {
                type: 'TOGGLE_TODO',
                id: 123
            }
            var res = todosReducer(df(todos), df(action))

            expect(res[0].completed).toEqual(false)
            expect(res[0].completedAt).toEqual(undefined)
        })

        it('should update todo', () => {
            var todos = [{
                id: 123,
                text: 'something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }]

            var updates = {
                completed: false,
                completedAt: null
            }
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            }
            var res = todosReducer(df(todos), df(action))

            expect(res[0].completed).toEqual(updates.completed)
            expect(res[0].completedAt).toEqual(updates.completedAt)
            expect(res[0].text).toEqual(todos[0].text)
        })


        it('should add existing todos', () => {
            var todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }]
            var action = {
                type: 'ADD_TODOS',
                todos
            }

            var res = todosReducer(df([]), df(action))

            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(todos[0])

        })
    })


    describe('authReducer', () => {
        it('should store uid on LOGIN', () => {
            const action = {
                type: 'LOGIN',
                uid: '123abc'
            }
            const res = authReducer(undefined, df(action))

            expect(res).toEqual({
                uid: action.uid
            })
        })

        it('should wipe auth on LOGOUT', () => {
            const authData = {
                uid: '123abc'
            }

            const action = {
                type: 'LOGOUT'
            }

            const res = authReducer(df(authData), df(action))

            expect(res).toEqual({})
        })
    })

})