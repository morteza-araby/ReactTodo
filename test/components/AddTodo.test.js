import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import {AddTodo} from 'AddTodo'
import * as  actions from 'Actions'

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist()
    })

    //To get this work we have to call in AddTodo compoent submit method to startAddTodoThunk as well
    // I'm using ReduxPromise for handling the async functions, which fails in test. Thunk seems to be working.
    it('should dispatch ADD_TODO when valid data', () => {
        var todoText = 'Check mail'
        var action = actions.startAddTodoThunk(todoText)
        var spy = expect.createSpy()
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toHaveBeenCalledWith(action)
    })

        it('should NOT dispatch AddTodo when invalid data', () => {
        var todoText = ''
        var spy = expect.createSpy()
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toNotHaveBeenCalled()
    })
})