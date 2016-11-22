import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ReduxPromise from "redux-promise"
import * as  actions from 'Actions'

import firebase, {firebaseRef} from 'Src/firebase/'

var createMockStore = configureMockStore([thunk,ReduxPromise])


describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        }

        var res = actions.setSearchText(action.searchText)

        expect(res).toEqual(action)
    })

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: '123abc',
                text:'Something todo',
                completed: false,
                createdAt: 0
            }
        }

        var res = actions.addTodo(action.todo)

        expect(res).toEqual(action)
    })

    it('should generate add todos actions', () => {           
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

        var res = actions.addTodos(todos)

        expect(res).toEqual(action)
    })

    it('should toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }

        var res = actions.toggleShowCompleted()

        expect(res).toEqual(action)
    })

    it('should toggle Todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        }

        var res = actions.toggleTodo(action.id)

        expect(res).toEqual(action)
    })
     it('should generate update Todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: '123',
            updates: {completed:false}
        }

        var res = actions.updateTodo(action.id, action.updates)

        expect(res).toEqual(action)
    })

    it('should generate login action object', () =>{
        var action = {
            type: 'LOGIN',
            uid: '123abc'
        }
        var res = actions.login(action.uid)

        expect(res).toEqual(action)
    })

    it('should generate logout action object', () => {
        var action = {
            type: 'LOGOUT'
        }

        var res = actions.logout()

        expect(res).toEqual(action)
    })

//###########################################################
    describe('Tests with firebase todos', () => {
        var testTodoRef
        var uid
        var todosRef
        beforeEach((done) => {
            var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN)
            firebase.auth().signInWithCredential(credential).then(() =>{
                uid = user.uid
                todosRef = firebaseRef.child(`users/${uid}/todos`)
                return todosRef.remove()
            }).then(() => {
                testTodoRef = todosRef.push()
                
                return testTodoRef.set({
                text: 'Something',
                completed: false,
                createdAt: 2345678
            })
            }).then(() => {
                done()
            }).catch(done)
        })

        afterEach((done) => {
            todosRef.remove().then(() => done())
        })

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth:{uid}})
            const action = actions.startToggleTodoThunk(testTodoRef.key, true)

            store.dispatch(action).then(() => {
                const mockActions = store.getActions()

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key,
                })

                expect(mockActions[0].updates).toInclude({
                    completed: true                    
                })

                expect(mockActions[0].updates.completedAt).toExist()

                done()
            }, done)
        })

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({auth:{uid}})
            const action = actions.startAddTodosThunk()

            store.dispatch(action).then(() => {
                const mockActions = store.getActions()

                expect(mockActions[0].type).toEqual('ADD_TODOS')
                expect(mockActions[0].todos.length).toEqual(1)
                expect(mockActions[0].todos[0].text).toEqual('Something')

                done()
            }, done)
        })


        it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({auth:{uid}})
        const todoText = 'My todo item'
        store.dispatch(actions.startAddTodoThunk(todoText)).then(() => {
            const actions = store.getActions()
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            })

            expect(actions[0].todo).toInclude({
                text:todoText
            })

            done()
        }).catch(done)
    })




    })



})